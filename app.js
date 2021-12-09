const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//return index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/mock-data", (req, res) => {
  res.sendFile(__dirname + "/MOCK_DATA.json");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
