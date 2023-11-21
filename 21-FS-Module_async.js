// FS - File Module async

const { readFile, writeFile } = require("fs");

// callback essentially what it means is that we run
// run that callback when we are done. So when
// whatever funcitonaluty we're doing is complete
// theen we run that callback just like we normally would do

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);

  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
  // we don't get normal text if we do not provide encoding utf-8
  //<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 72 69 73 74 20 66 69 6c 65>
});

console.log("start new task");
