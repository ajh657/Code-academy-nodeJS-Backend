const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var router = express.Router();

//return index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/mock-data", (req, res) => {
  res.sendFile(__dirname + "/MOCK_DATA.json");
});

app.use("/hello", (req, res, next) => {
  console.log("Hello");
  next();
});

app.use("/world", (req, res, next) => {
  console.log("World");
  next();
});

router.get("/mikkihiiri", (req, res) => {
  res.send("router");
});

app.use("/akuankka", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
