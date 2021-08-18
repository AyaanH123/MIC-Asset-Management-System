module.exports = (sequelize, Sequelize) => {
  return sequelize.define('municipality', {
    municipality_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: "name_UNIQUE"
    },
    description: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    last_mod_by: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'municipality',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "municipality_id" },
        ]
      },
      {
        name: "name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });

  return Municipality;
};
