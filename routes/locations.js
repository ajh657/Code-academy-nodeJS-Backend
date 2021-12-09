var express = require("express");
var router = express.Router();
var locations = [];

router.get("/location/:id", function (req, res) {
  var id = req.params.id;
  res.send("You requested the location with id: " + id);
});

router.post("/location", function (req, res) {
  var location = req.body;
  locations.push(location);
  res.send(location);
});

router.delete("/location/:id", function (req, res) {
  var id = req.params.id;
  locations = locations.filter(function (location) {
    return location.id !== id;
  });
  res.send("Location with id " + id + " deleted");
});

module.exports = router;
