var fs = require("fs");

var http = require("http");

var url = require("url");

const userDir = path.join(__dirname, "users/");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let store = "";

  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on(end, () => {          
    //   create file
    if (req.url === "/users" && req.method === "POST") {
      let username = JSON.parse(store).username;
      fs.open(userDir + username + ".json", "wx", (err, fileName) => {
        if (err) res.end(JSON.stringify(err));
        fs.writeFile(fileName, store, (err) => {
          if (err) res.end(json.stringify(err));
          fs.close(fileNum, (err) => {
            if (err) res.end(json.stringify(err));
            res.end(`${username} successfully created`);
          });
        });
      });
    }
  });

  // Read file
    
   
}
