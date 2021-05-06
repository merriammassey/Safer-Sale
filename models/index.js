const User = require("./User");
const Comment = require("./Comment");
const Product = require("./Product");
const Post = require("./Post");

Product.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Product, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Product, {
  foreignKey: "product_id",
});

Comment.belongsTo(Post, {
  foreignKey: "product_id",
});

Product.hasMany(Comment, {
  foreignKey: "product_id",
});

Post.hasMany(Comment, {
  foreignKey: "product_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Product, Comment, Post };
