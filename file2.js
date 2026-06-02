const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)

// Blocking....
// console.log("1")
// const result = fs.readFileSync('contact.txt', 'utf-8');
// console.log(result)
// console.log("2")
console.log("hi");
// Non-Blocking....
// console.log("1")
// fs.readFileSync('contact.txt', 'utf-8', (err, result) => {
//     console.log(result)
// });
// console.log("2")

// Default Thread Pool size = 4
// Max? - 8core cpu - 8