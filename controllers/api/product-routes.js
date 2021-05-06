const router = require("express").Router();
const { Product, Comment, User } = require("../../models");


router.get("/", (req, res) => {
  Product.findAll({
    // include: [
    //   {
    //     model: Category,
    //   },
    // ], 
    include:[ {
        model: Comment,
        attributes: ['id', 'comment_text', 'product_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      { 
        model: User,
       attributes: ["username"]
    }
    ] 
  })
    .then((dbProduct) => {
      res.json(dbProduct);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'product_name',
      'price',
      'user_id',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'product_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    user_id: req.session.user_id,
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router