function digitalRoot(n) {
    let sum=0;
    if (n<10) return n;
    while(n) {
        sum+=n%10;
        n=Math.floor(n/10)
    } 
    return digitalRoot(sum)
}


console.log(digitalRoot(5143))
console.log(digitalRoot(61))
console.log(digitalRoot(15))
console.log(digitalRoot(1))
console.log(digitalRoot(123))