const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

Post.belongsTo(User, {
  //  foreignKey: "id",
  //  foreignKey: "location"
});

User.hasMany(Post, {
  //  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  //  foreignKey: "product_id",
});

Post.hasMany(Comment, {
  //  foreignKey: "product_id",
});

Comment.belongsTo(User, {
  //  foreignKey: "user_id",
});

User.hasMany(Comment, {
  //  foreignKey: "user_id",
});

module.exports = { User, Comment, Post };
