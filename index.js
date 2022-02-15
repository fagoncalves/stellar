const app = require("express")();
const port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

app.get("", (req, res) => {
  res.send("Hello World!");
})

app.post("/push", function(req, res) {
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`WEBSITE is up at port ${port}`);
})
