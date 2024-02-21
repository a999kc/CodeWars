function zeros (n) {
    let res = BigInt(1);
    for(let i=1;i<=n;i++) {
        res *= BigInt(i);
    }
    let count=0;
    while(res % BigInt(10) === BigInt(0)) {
        count++
        res /= BigInt(10);
    }
    return [res,count];
}



console.log(zeros(0)) //0
console.log(zeros(5)) //3
console.log(zeros(12)) //3
console.log(zeros(30)) //3