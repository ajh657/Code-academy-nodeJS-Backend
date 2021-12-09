var express = require("express");
var router = express.Router();
var locations = [];

router.get("/location/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var id = req.params.id;
  var location = locations.find(function (location) {
    return location.id === id;
  });
  if (location != undefined) {
    res.json(location);
  } else {
    res.sendStatus(404);
  }
});

router.post("/location", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var location = req.body;
  locations.push(location);
  res.status(201).send("Location created");
});

router.delete("/location/:id", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var id = req.params.id;
  locations = locations.filter(function (location) {
    return location.id !== id;
  });
  res.send("Location with id " + id + " deleted");
});

module.exports = router;
