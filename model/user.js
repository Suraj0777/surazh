module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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
      roleid: {
        type: Sequelize.INTEGER
      },
      num: {
        type: Sequelize.STRING
      }
    });
    return User;
  };
