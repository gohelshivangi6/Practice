const fs = require("fs");
console.log("hi");

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");

function test() {
    console.log("Calculating price");
    console.log("just a test");
    return price;
}

const price = 100;
console.log(test());

// Sync... Blocking...
// fs.writeFileSync("test.txt", 'Hey There');

// Async... Non-Blocking....
// fs.writeFile("test.txt", "Hello world Async", (err) => {});

// const result = fs.readFileSync('contact.txt', "utf-8");
// console.log(result);

// callback function needed in Async read & write
// fs.readFile("contact.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log("Error", err)
//     } else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("test.txt", 'Hey There\n');
// fs.appendFileSync("test.txt", `${Date.now()} Hey There\n`);

// copy file
// fs.cpSync('test.txt', 'copy.txt');

// delete file
// fs.unlinkSync('copy.txt')

// console.log(fs.statSync('test.txt'))

// console.log(fs.statSync('test.txt').isFile())
// fs.mkdirSync('my-docs')
fs.mkdirSync('my-docs/a/b', {recursive: true})