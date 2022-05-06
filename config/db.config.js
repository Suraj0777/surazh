const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("biography", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const db = {}
db.sequelize = sequelize;

const userDefiner = require("../models/user")
db.user = userDefiner(sequelize)

const roleDefiner = require("../models/role")
db.role = roleDefiner(sequelize)

const bookDefiner = require("../models/book")
db.book = bookDefiner(sequelize)

db.role.hasMany(db.user);
db.book.hasMany(db.user);


db.ROLES = ["user", "admin"]

module.exports = db;