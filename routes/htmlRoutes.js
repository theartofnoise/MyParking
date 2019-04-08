var db = require("../models");
var verify = require("../public/js/verification");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/reports", function(req, res) {
    res.render("reports");
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.parkingNew
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(dbExample) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
