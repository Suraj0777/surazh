const Sequelize = require("sequelize")

module.exports = function (sequelize) {
  return sequelize.define("book", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    ISBN: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.INTEGER
    },
    publishing_house: {
      type: Sequelize.STRING
    },
  },{
    timestamps: false
  });

};