const { verifySignUp } = require("../middleware");
const controller = require("../controllers/employee.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/employee/all",
    controller.getAllEmployee
  );

  app.get(
    "/api/employee/:id",
    controller.getEmployeeById
  );

  app.post(
    "/api/employee/update",
    controller.updateEmployee
  );

  app.post(
    "/api/employee/create",
    controller.createEmployee
  );


};