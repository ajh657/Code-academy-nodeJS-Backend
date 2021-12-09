var express = require("express");
var router = express.Router();

router.use("/hello", (req, res, next) => {
  console.log("Hello");
  next();
});

router.use("/world", (req, res, next) => {
  console.log("World");
  next();
});

router.get("/mikkihiiri", (req, res) => {
  res.send("router");
});

router.use("/akuankka", router);

module.exports = router;
