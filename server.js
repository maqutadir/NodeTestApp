const express = require("express");
const dP = require("./TestFiles/dP");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "jade");
app.use("/dP", dP);

//create a server object
app
  .listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  })
  .on("error", function (error) {
    throw error;
  });
