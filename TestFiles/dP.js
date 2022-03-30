const express = require("express");

const router = express.Router();
const obj1 = { name: "s", age: 25 };

const dRegex = (dString) => {
  dString = dString.split(/\(,\)/g);
  console.log("dString is", dString);
  return dString;
};

router.get("/", (req, res) => {
  res.send(`Hello there ${JSON.stringify(obj1)}`);
  console.log("You are here to get dP");
});

const ParserFunction = (dArray) => {
  for (let d in dArray) {
    dRegex(d);
  }
};

console.log(dRegex("Test disease: Acne!"));
console.log("Okay that is fine!");
const result = dRegex("Abdominoplasty (Tummy Tuck)");

console.log("Result is", result);

module.exports = router;
