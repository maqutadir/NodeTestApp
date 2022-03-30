const dRegex = (dString) => {
  dString = dString.split(/\(,\)/g);
  console.log("dString is", dString);
  return dString;
};

const ParserFunction = (dArray) => {
  for (let d in dArray) {
    dRegex(d);
  }
};

console.log(dRegex("Test disease: Acne!"));
console.log("Okay that is fine");
const result = dRegex("Abdominoplasty (Tummy Tuck)");

console.log("Result is", result);
module.exports = { dRegex };
