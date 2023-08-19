const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Assalam u Alaikum!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
