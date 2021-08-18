module.exports = function(sequelize, Sequelize) {
  return sequelize.define('asset_status', {
    asset_status_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: Sequelize.STRING(2),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    last_mod_by: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'asset_status',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_status_id" },
        ]
      },
      {
        name: "idx_status_code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
