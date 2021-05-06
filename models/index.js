const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "title",
});

Comment.belongsTo(Post, {
  foreignKey: "title",
});

Post.hasMany(Comment, {
  foreignKey: "title",
});

Post.hasMany(Comment, {
  foreignKey: "title",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Comment, Post };
