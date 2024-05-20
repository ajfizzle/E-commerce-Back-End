const router = require('express').Router();
const { Category, Product } = require('../../models');

const handleError = (res, message) => {
  console.error(message);
  res.status(500).json({ error: message });
};

const categoryIncludeOptions = {
  include: {
    model: Product,
    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
  }
};

const findCategoryById = async (id, res) => {
  try {
    const category = await Category.findOne({
      where: { id },
      ...categoryIncludeOptions
    });
    if (!category) {
      res.status(404).json({ error: 'No categories found' });
      return null;
    }
    return category;
  } catch (error) {
    handleError(res, error.message);
  }
};

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll(categoryIncludeOptions);
    if (!categories.length) {
      res.status(404).json({ error: 'No categories found' });
      return;
    }
    res.json(categories);
  } catch (error) {
    handleError(res, error.message);
  }
});

router.get('/:id', async (req, res) => {
  const category = await findCategoryById(req.params.id, res);
  if (category) {
    res.json(category);
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.category_name) {
      return res.status(400).json({ error: 'Category name is required' });
    }
    const category = await Category.create({ category_name: req.body.category_name });
    res.json(category);
  } catch (error) {
    handleError(res, error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    if (!req.body.category_name) {
      return res.status(400).json({ error: 'Category name is required' });
    }
    const [updatedRows] = await Category.update(req.body, { where: { id: req.params.id } });
    if (updatedRows === 0) {
      res.status(404).json({ error: 'No category related to ID found' });
      return;
    }
    res.json({ message: 'Category updated' });
  } catch (error) {
    handleError(res, error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
   
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
   
    if (!category) {
      res.status(404).json({ message: 'No category found' });
      return;
    }
   
    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
   
    res.status(500).json({ message: "Category was not deleted", error: err });
  }
});

module.exports = router;
