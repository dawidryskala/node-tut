// FS - File Module

const { readFileSync, writeFileSync } = require("fs");

// how we can read from the file system
// we need to provide path to the file
// encoding

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first);
// console.log(second);

// create file or overwrite
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //this mean to append not overwrite
);
