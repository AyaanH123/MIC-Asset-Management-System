module.exports = function(sequelize, Sequelize) {
  return sequelize.define('location', {
    location_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    address1: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    address2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    city: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    province: {
      type: Sequelize.STRING(2),
      allowNull: false
    },
    postal_code: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    department: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    municipality_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      references: {
        model: 'municipality',
        key: 'municipality_id'
      }
    },
    last_mod_by: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'location',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
      {
        name: "fk_municipality_id_idx",
        using: "BTREE",
        fields: [
          { name: "municipality_id" },
        ]
      },
    ]
  });

  return Location;
};
