module.exports = (sequelize, Sequelize) => {
  return sequelize.define('employee', {
    employee_id: {
      type: Sequelize.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    middle_name: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    status: {
      type: Sequelize.STRING(1),
      allowNull: false,
      references: {
        model: 'employee_status',
        key: 'code'
      }
    },
    job_title: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email_address: {
      type: Sequelize.STRING(50),
      allowNull: false
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
    },
  }, {
    tableName: 'employee',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "fk_municipality_idx",
        using: "BTREE",
        fields: [
          { name: "municipality_id" },
        ]
      },
      {
        name: "fk_status_idx",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });

  return Employee
};
