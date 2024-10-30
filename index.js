const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hell123o World 1123");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
