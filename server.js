const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//create a server object
app
  .listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  })
  .on("error", function (error) {
    throw error;
  });
