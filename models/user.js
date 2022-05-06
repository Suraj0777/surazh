const Sequelize = require("sequelize")

module.exports = function (sequelize) {
  return sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    middlename: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATE
    },
    died_on: {
      type: Sequelize.DATE
    },
    num: {
      type: Sequelize.STRING
    }
  },{
    timestamps: false
  });
    
};