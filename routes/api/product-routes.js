const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

const handleFailure = (res, message) => {
  console.error(message);
  res.status(500).json({ error: message });
};

const productIncludeOptions = [
  {
    model: Category,
    attributes: ['category_name']
  },
  {
    model: Tag,
    attributes: ['tag_name']
  }
];


router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'product_name', 'price', 'stock'],
      include: productIncludeOptions
    });
    res.json(products);
  } catch (error) {
    handleFailure(res, error.message);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'product_name', 'price', 'stock'],
      include: productIncludeOptions
    });
    if (!product) {
      res.status(404).json({ error: 'No product related to ID' });
      return;
    }
    res.json(product);
  } catch (error) {
    handleFailure(res, error.message);
  }
});


router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body, { include: [Tag] });
    res.status(201).json(product);
  } catch (error) {
    handleFailure(res, error.message);
  }
});


router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });
    // Additional logic to update product tags could be added here
    res.status(200).json({ message: 'Product updated' });
  } catch (error) {
    handleFailure(res, error.message);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!product) {
      res.status(404).json({ message: 'No product found' });
      return;
    }
   
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    
    res.status(500).json({ message: "Product was not deleted", error: err });
  }
});

module.exports = router;
