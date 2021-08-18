const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    define : {
      timestamp: true,
      freezeTableName: true,
      createdAt: 'created_date',
      updatedAt: 'last_mod_date'
    },
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.user_role = require("../models/user_role.model.js")(sequelize, Sequelize);
db.asset = require("../models/asset.model.js")(sequelize, Sequelize);
db.location = require("../models/location.model.js")(sequelize, Sequelize);
db.asset_status = require("../models/asset_status.model.js")(sequelize, Sequelize);
db.asset_category= require("../models/asset_category.model.js")(sequelize, Sequelize);
db.employee= require("../models/employee.model.js")(sequelize, Sequelize);
db.employee_asset_association= require("../models/employee_asset_association.model.js")(sequelize, Sequelize);
db.employee_status= require("../models/employee_status.model.js")(sequelize, Sequelize);
db.municipality= require("../models/municipality.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_role",
  foreignKey: "role_id",
  otherKey: "user_id"
});
db.user.belongsToMany(db.role, {
  through: "user_role",
  foreignKey: "user_id",
  otherKey: "role_id"
});

// db.location.belongsTo(db.asset, {
//   foreignKey: "location_id",
//   as: "location"
// });

db.asset.belongsTo(db.location, {
  as: "location",
  foreignKey: "location_id"
})

// db.location.hasMany(db.asset, {
//   as: "asset",
//   foreignKey: "location_id"
// })

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
