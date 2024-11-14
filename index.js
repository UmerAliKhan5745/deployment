const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "the name is umer ali khan",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
