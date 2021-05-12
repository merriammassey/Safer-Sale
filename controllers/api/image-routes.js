const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const sequelize = require("../../config/connection.js");
const s3upload = require("../../utils/uploadToS3.js");
const multer = require("multer");
const upload = multer({
  dest: "uploads/", // this saves your file into a directory called "uploads"
});
router.post("/", upload.single("file-to-upload"), async (req, res) => {
  const url = await s3upload(
    req.file.originalname,
    fs.readFileSync(req.file.path)
  );
  console.log(url);

  Post.update(
    {
      image: url,
    },
    {
      where: {
        id: req.body.id,
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

  res.redirect("/");
});

module.exports = router;
