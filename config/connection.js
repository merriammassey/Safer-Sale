const Sequelize = require("sequelize");

require("dotenv").config();
// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("tech_blog_db", "root", "mysqlPassword1", {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
