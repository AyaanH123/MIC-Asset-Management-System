module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    },
    email_address: {
      type: Sequelize.STRING
    },
    last_mod_by: {
      type: Sequelize.STRING
    }
  }, {
    tableName: 'user'
  });

  return User;
};
