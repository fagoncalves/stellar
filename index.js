const app = require("express")();
const port = process.env.PORT || 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());

app.get("", (req, res) => {
  res.send("Hello World!");
})

app.post("/push", function(req, res) {
  res.send(req.body['id']);
})

app.listen(port, () => {
  console.log(`WEBSITE is up at port ${port}`);
})
