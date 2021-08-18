module.exports = (sequelize, Sequelize) => {
  return sequelize.define('employee_status', {
    employee_status_id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: Sequelize.STRING(1),
      allowNull: false,
      unique: "code_UNIQUE"
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
    tableName: 'employee_status',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_status_id" },
        ]
      },
      {
        name: "code_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });

  return EmployeeStatus;
};
