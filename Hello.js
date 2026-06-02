const math = require('./math')

console.log("Math value is", math.add(2,4))
console.log("Math value is", math.sub(2,4))

// or
const {add, sub} = require('./math')
console.log("Math value is", add(2,4))