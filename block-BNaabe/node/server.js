var path = require("path");

let qr = require("querystring");

var relativeIndexPath = "./index.html";

var absolutePath = __dirname;

let indexPath = path.join(__dirname, "./index.html");

let appPath = path.join(__dirname, "./app.js");

console.log(relativePath, absolutePath);

/****************************************/

var http = require("http");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });
  req.on("end", () => {
    if ((req.method = "POST" && req.url === "/")) {
      var parseData = JSON.parse(store);
      res.statusCode = 201;
      res.end(parseData);
    }
  });
}
server.listen(3000, function () {
  console.log("server start at port 3000");
});

/*****************************/

function handleRequest(req, res) {
  let store = "";
  let contentType = req.headers["content-type"];
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.method === "POST" && contentType === "application/json") {
      var parseData = JSON.parse(store);
      res.end(store);
    } else if (
      req.method === "POST" &&
      contentType === "application/x-www-form-urlencoded"
    ) {
      var parseData = qr.parse(store);
      console.log(parseData);
      res.end(JSON.stringify(parseData));
    }
  });
}

server.listen(7500, () => {
  console.log("listening port 7500");
});

/***********************************/

function handleRequest(req, res) {
  let store = "";
  let contentType = req.headers["content-type"];
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.method === "POST" && contentType === "application/json") {
      res.setHeader("Content-Type", "text/html");
      var parseData = JSON.parse(store);
      res.end(`<h1> ${parseData["name"]} </h1> 
             <h2> ${parseData["email"]}
        `);
    } else if (
      req.method === "POST" &&
      contentType === "application/x-www-form-urlencoded"
    ) {
      res.setHeader("Content-Type", "text/html");
      var parseData = qr.parse(store);
      res.end(`<h1> ${parseData["name"]} </h1> 
             <h2> ${parseData["email"]}
        `);
    }
  });
}

server.listen(8500, () => {
  console.log("listening port 8500");
});
