module.exports = function(sequelize, Sequelize) {
  return sequelize.define('asset_category', {
    asset_category_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: Sequelize.STRING(3),
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
    tableName: 'asset_category',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_category_id" },
        ]
      },
      {
        name: "idx_code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
