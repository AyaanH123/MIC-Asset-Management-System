module.exports = (sequelize, Sequelize) => {
  return sequelize.define('asset', {
    asset_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    category: {
      type: Sequelize.STRING(3),
      allowNull: false,
      references: {
        model: 'asset_category',
        key: 'code'
      }
    },
    status_code: {
      type: Sequelize.STRING(2),
      allowNull: false,
      references: {
        model: 'asset_status',
        key: 'code'
      }
    },
    serial_number: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    asset_tag: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    location_id: {
      type: Sequelize.SMALLINT,
      allowNull: true,
      // references: {
      //   model: 'location',
      //   key: 'location_id'
      // }
    },
    model: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    manufacturer: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    acquired_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    retired_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    purchase_price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: true
    },
    last_mod_by: {
      type: Sequelize.STRING(45),
      allowNull: false
    },
    last_mod_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'asset',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
      {
        name: "idx_fk_asset_category_idx",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
      {
        name: "idx_fk_asset_status_idx",
        using: "BTREE",
        fields: [
          { name: "status_code" },
        ]
      },
      {
        name: "fk_asset_location_idx",
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });

  return Asset;
};

