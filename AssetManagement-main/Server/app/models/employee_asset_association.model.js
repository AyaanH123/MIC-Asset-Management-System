module.exports = (sequelize, Sequelize) => {
  return sequelize.define('employee_asset_association', {
    employee_id: {
      type: Sequelize.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    },
    asset_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    assigned_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    returned_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    last_mod_by: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'employee_asset_association',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
          { name: "asset_id" },
        ]
      },
    ]
  });

  return EmployeeAssetAssociation;
};
