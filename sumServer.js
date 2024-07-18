const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.listen(8080);
