const { asset_category } = require("../models");
const db = require("../models");
const AssetCategory = db.asset_category;
const AssetStatus = db.asset_status;
const Location = db.location;

exports.getMasterData = (req, res) => {

    const masterData = {};

    Location.findAll({
        attributes: ["location_id", "name"],
    })
    .then(location => {
        masterData.location = location;

        AssetCategory.findAll({
            attributes: ["code", "description"]
        })
        .then(assetCategory =>{
            masterData.assetCategory = assetCategory;

            AssetStatus.findAll({
                attributes: ["code", "description"]
            })
            .then(assetStatus => {
                masterData.assetStatus = assetStatus;
                return res.status(200).send(masterData);
            })
        })
    })
    .catch(error => {
        console.log(err.message);
        res.status(500).send(
            {
                status: 'error',
                message: "Server error accessing asset data. Please contact support if you continue to get this error"
            });
    })
}