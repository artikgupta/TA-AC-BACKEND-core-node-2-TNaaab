var path = require("path");

var relativePath = "./index.html";
var absolutePath = __dirname;

let indexPath = path.join(__dirname, "./index.html");

console.log(relativePath, absolutePath);
