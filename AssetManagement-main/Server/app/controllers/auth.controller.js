const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  console.log(req.body);

  User.create({
    login: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    active: 1,
    email_address: req.body.email,
    last_mod_by: req.body.last_mod_by
  })
    .then(user => {
      console.log("User created");
      console.log(user);
      console.log("=================================");
      if (req.body.roles) {
        Role.findAll({
          where: {
            role_name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles, {through : {last_mod_by: "system"}}).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1], {through : {last_mod_by: "system"}}).then(() => {
          res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
 };

exports.signin = (req, res) => {
  User.findOne({
    where: {
      login: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].role_name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.login,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email_address,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
