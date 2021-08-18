const { verifySignUp } = require("../middleware");
const controller = require("../controllers/asset.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/asset/all",
    controller.getAllAsset
  );

  app.get(
    "/api/asset/:id",
    controller.getAssetById
  );

  app.post(
    "/api/asset/update",
    controller.updateAsset
  );

  app.post(
    "/api/asset/create",
    controller.createAsset
  );


};