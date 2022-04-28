module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("book", {
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
    });
    return Role;
  };
