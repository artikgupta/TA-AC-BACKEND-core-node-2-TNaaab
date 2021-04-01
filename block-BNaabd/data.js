var http = require("http");

var qs = require("querystring")

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var dataFormat = req.headers["content-type"]
    var store = "";
    req.on("data", (chunk) = {
        store = store + chunk
    })

    req.on("end", () =>{
        if (dataFormat === "application/json") {
     var ParsedData = JSON.parse(store)
        res.end(store)    
        }
        if (dataFormat === "application/x-www-form-urlencoded") {
            var ParsedData = qs.parse(store)
            res.end(JSON.stringify(ParsedData))
        }
    })
}

server.listen(7000, () => {
    console.log("servr is listening on port 7000  ")
})
