var http = require("http");
const parser = require("./TestFiles/dP");

const result = parser.dRegex("Hello I will be coming");
console.log("Result is", result);

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World   1!");
    console.log("This is", this);
    console.log("Result", result + "Hello");
    res.write("Result is", result + "Hello"); //write a response to the client
    res.write("This object is", http);
    res.end(); //end the response
  })
  .listen(5000);
