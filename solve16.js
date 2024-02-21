// const readline = require('readline');
// let a=3;
// let b=4;
// function Increment(a,b) {
//     return a+b
// }
// console.log(Increment(a,b))


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line',(input) => {
    let [a,b] = input.split(' ').map(Number);
    console.log(a+b)
    rl.close();
});