const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function Digits(number) {
   return 1 + (number - 1) % 9;
}

rl.on('line',(input) => {
    //let number = input.split('').map(Number);
    console.log(Digits(47))
    rl.close;
})