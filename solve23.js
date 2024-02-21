const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line',(input) => {
    let array = input.split(' ').map(Number);
    
    let newArray=(array.filter(value => value%2==0).map(value => Math.sqrt(value))).reduce((acc, currentValue) => acc + currentValue, 0);
    //console.log(array.filter(value => value%2==0).map(value = Math.sqrt(value)))
    //console.log(array.filter(value => value%2==0))
    //console.log(array);
    console.log(newArray)
    rl.close;
})