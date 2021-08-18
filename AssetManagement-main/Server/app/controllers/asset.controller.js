const db = require("../models");
const config = require("../config/auth.config");
const Asset = db.asset;
const Location = db.location;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
//const { json } = require("sequelize/types");

exports.getAllAsset = (req, res) => {

    Asset.findAll({
        attributes: ["asset_id", "name", "description", "category", "status_code", "serial_number", "asset_tag"],
        //include: ['location']
        include: [{
            model: Location,
            as: 'location',
            attributes: [["name", "location_name"], ["description", "location_desc"]]
        }]
    })
        .then(assets => {
            return res.status(200).send({ status: 'success', data: assets });
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

exports.getAssetById = (req, res) => {

    Asset.findOne({
        where: {
            asset_id: req.params.id
        }
    })
        .then(asset => {
            if (asset) {

                return res.status(200).send({ status: 'success', data: asset });
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

exports.updateAsset = (req, res) => {

    Asset.findOne({
        where: { asset_id: req.body.asset_id }
    })
        .then(record => {
            if (!record) {
                return res.status(404).send({ status: "error", message: "No record found." })
            }

            var values = { ...req.body };
            delete values.asset_id;
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

exports.createAsset = (req, res) => {

    Asset.create({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        status_code: req.body.status_code,
        serial_number: req.body.serial_number,
        asset_tag: req.body.asset_tag,
        location_id: req.body.location_id,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        acquired_date: req.body.acquired_date,
        retired_date: req.body.retired_date,
        purchase_price: req.body.purchase_price,
        last_mod_by: req.body.last_mod_by
    })
    .then(record => {
        console.log("Asset successfully created. " + JSON.stringify(record));
        res.status(200).send({ record });
    })
    .catch(err => {
        console.log(JSON.stringify(err));
        res.status(500).send({ message: err.message });
      });
}