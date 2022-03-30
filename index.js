var http = require("http");
const parser = require("./TestFiles/dP");

const result = parser.dRegex("Hello I will be coming");
console.log("Result is", result);

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Yes it is working fine");
    console.log("The Result is:", result);
    res.end(); //end the response
  })
  .listen(4000);
