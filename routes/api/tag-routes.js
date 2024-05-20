const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tags
router.get('/', async (req, res) => {
  try {
    
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
   
    res.status(200).json(tags);
  } catch (err) {
    
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    
    if (!tag) {
      res.status(404).json({ message: 'No tag found' });
      return;
    }
    
    res.status(200).json(tag);
  } catch (err) {
    
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    
    const tagData = await Tag.create(req.body);
  
    res.status(201).json(tagData);
  } catch (err) {
    
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
   
    if (!tag[0]) {
      res.status(404).json({ message: 'No tag found' });
      return;
    }
    
    res.status(200).json({ message: 'Tag updated' });
  } catch (err) {
  
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
   
    if (!tag) {
      res.status(404).json({ message: 'No tag found' });
      return;
    }
   
    res.status(200).json({ message: 'Tag deleted' });
  } catch (err) {
  
    res.status(500).json({ message: "Tag was not deleted", error: err });
  }
});

module.exports = router;
