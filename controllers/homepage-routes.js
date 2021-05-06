
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    product_name: 'testing product', 
    price: 25.00,
    created_at: new Date(), 
    comments: [{}, {}],
    user: {
      username: 'ultimate_test'
    }
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
module.exports = router;