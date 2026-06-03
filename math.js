function add(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

function greet() {
    console.log("Hello from feature A");
}

module.exports = {
    add,
    sub,
}

// anonymous function - bcz there is no name define of this function - its property
// exports.add = (a, b) => a+b;

// exports.sub = (a, b) => a-b;