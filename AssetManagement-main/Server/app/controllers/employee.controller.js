const db = require("../models");
const config = require("../config/auth.config");
const Employee = db.employee;
const Location = db.location;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { employee } = require("../models");
//const { json } = require("sequelize/types");

exports.getAllEmployee = (req, res) => {

    Employee.findAll({
        attributes: ["employee_id", "first_name", "last_name", "status", "job_title", "email_address", "phone"],
        // not sure about lines 17 - 21
        include: [{
            model: Location,
            as: 'location',
            attributes: [["name", "location_name"], ["description", "location_desc"]]
        }]
    })
        .then(employees => {
            return res.status(200).send({ status: 'success', data: employees });
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send(
                {
                    status: 'error',
                    data: [],
                    message: "Server error accessing asset data. Please contact support if you continue to get this error"
                });
        });
}

exports.getEmployeeById = (req, res) => {

    Employee.findOne({
        where: {
            employee_id: req.params.id
        }
    })
        .then(employee => {
            if (employee) {

                return res.status(200).send({ status: 'success', data: employee });
            }

            return res.status(404).send({ status: 'error', data: {}, message: "asset not found" });

        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send({
                status: 'error',
                message: 'Server error accessing asset data. Please contact support if you continue to get this error'
            });
        });
}

exports.updateEmployee = (req, res) => {

    Employee.findOne({
        where: { employee_id: req.body.employee_id }
    })
        .then(record => {
            if (!record) {
                return res.status(404).send({ status: "error", message: "No record found." })
            }

            var values = { ...req.body };
            delete values.employee_id;
            console.log("updating values " + JSON.stringify(values));
            record.update(values)
                .then(updatedRecord => {
                    console.log("Successfully updated the record.." + JSON.stringify(updatedRecord));
                    return res.status(200).send({ status: "success", message: "Record successfully updated." })
                })
        })
        .catch(error => {
            return res.status(500).send({
                status: 'error',
                message: 'Server error updating asset data. Please contact support if you continue to get this error'
            });
        });
}

exports.createEmployee = (req, res) => {

    Employee.create({
        first_name: req.body.name,
        last_name: req.body.description,
        middle_name: req.body.category,
        status: req.body.status_code,
        serial_number: req.body.serial_number,
        job_title: req.body.asset_tag,
        email_address: req.body.location_id,
        phone: req.body.model,
        municipality_id: req.body.municipality_id,
        last_mod_by: req.body.last_mod_by
        
    })
    .then(record => {
        console.log("Employee successfully created. " + JSON.stringify(record));
        res.status(200).send({ record });
    })
    .catch(err => {
        console.log(JSON.stringify(err));
        res.status(500).send({ message: err.message });
      });
}