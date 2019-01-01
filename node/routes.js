var app = require("../main.js");
var db  = app.db;
var io  = app.io;
var fs  = require("fs"); // File system library

app.post("/add-person", function(req, res){
  AppendToFile("data/people.csv", req.body);
  var people = CsvToObject("data/people.csv");
  res.json(people);
});

app.get("/", async function(req, res){
  var string = "A string from the server.";

  res.render("index.ejs");
});

app.get("/about", function(req, res){
  var people = CsvToObject("data/people.csv");
  res.render("about.ejs", {people: people});
});

app.use(function (req, res){
  res.render("404.ejs");
});

//////////////////////////////////////////////////////////////////////

var server = require("dgram").createSocket("udp4").bind(9000);

server.on("message", (message) => {
  var data = JSON.parse(message.toString("utf-8"));
  io.emit("testing", data);
  console.log(`${data.name}: ${data.msg}`);

  var packet = JSON.stringify(data);
  var message = Buffer.from(packet);
  server.send(message, 0, message.length, 9001, "localhost");
  server.send(message, 0, message.length, 9002, "localhost");
});

server.on("listening", () => {
  console.log(`Listening on port ${server.address().port}`);
});
