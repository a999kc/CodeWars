

function digPow(n, p){
    let sum=0;
    let numberToArr;
    numberToArr=n.toString().split('').map(Number);
    for (let i=0;i<numberToArr.length;i++) {
        sum+=(numberToArr[i]**p++);
    }
    
    return sum;

}

console.log(digPow(695,2))
console.log((89).toString().split('').map(Number))

