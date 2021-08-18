module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_role", {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      last_mod_by: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'user_role'
    });
  
    return UserRole;
  };
  