const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);
// Combines 2 files and creates a new file if it is not already created
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result ${first}, ${second}`,
    { flag: "a" } // This appends to the end of the file
);
console.log("Done with this task");
console.log("Starting the next one");
