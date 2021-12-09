const express = require("express");
const locations = require("./routes/locations");
const others = require("./routes/other");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/mock-data", (req, res) => {
  res.sendFile(__dirname + "/MOCK_DATA.json");
});

app.use("/locations", locations);
app.use("/", others);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
