const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const fs = require("fs");
const sequelize = require("../../config/connection.js");
const s3upload = require("../../utils/uploadToS3.js");
const multer = require("multer");
const upload = multer({
  dest: "uploads/", // this saves your file into a directory called "uploads"
});

//get all posts //filter by location and title? and category?
router.get("/", (req, res) => {
  Post.findAll({
    order: [["created_at", "DESC"]],
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
        attributes: ["username", "location"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
/*
//create a post
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    user_id: req.session.user_id,
    //location: req.body.location,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/

/*create a post
router.post("/", upload.single("file-to-upload"), async (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    user_id: req.session.user_id,
    //location: req.body.location,
    image_url: await s3upload(
      req.file.originalname,
      fs.readFileSync(req.file.path)
    ),
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/

router.post("/", upload.single("file-to-upload"), async (req, res) => {
  const url = await s3upload(
    req.file.originalname,
    fs.readFileSync(req.file.path)
  );
  console.log(url);
  console.log(req.body);
  Post.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: url,
    user_id: req.session.user_id,

    //location: req.body.location,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a post
router.put("/:id", (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_body: req.body.post_body,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //send back data that has been modified and stored in the database
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
