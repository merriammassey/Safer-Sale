const router = require("express").Router();
//const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "description", "price", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      console.log("DB DATA", dbPostData);
      // pass a single post object into the homepage template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(posts);
      //res.render("homepage", {msg: 'this is the homepage'})
      res.render("homepage", {posts});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  res.render("logout");
});

module.exports = router;
