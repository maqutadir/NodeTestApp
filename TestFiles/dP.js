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

console.log(dRegex("This is a test disease: Acne"));
const result = dRegex("Abdominoplasty (Tummy Tuck)");

console.log("Result is", result);
module.exports = { dRegex };
