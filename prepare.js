const fs = require("fs");
// const vocabulary = require("./finalVocabulary.json");
const vocabulary = require("./prepareJson.json");

// console.log(vocabulary.length);
// extract uniqueArray
const uniqueArray = vocabulary.reduce((accumulator, current) => {
  if (
    !accumulator.find((item) => item.sentence_hindi === current.sentence_hindi)
  ) {
    accumulator.push(current);
  }
  return accumulator;
}, []);

console.log(uniqueArray.length);

const jsonString = JSON.stringify(uniqueArray, null, 2); // Convert array to JSON string

fs.writeFile("finalVocabulary.json", jsonString, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
