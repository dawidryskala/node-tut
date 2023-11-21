// just 'os' without ./ because it it built in module !!!
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// get the last element from path filePath
const base = path.basename(filePath);
console.log(base);

// return absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
console.log(__dirname);
