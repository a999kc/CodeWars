function nextBigger(n){
    let nToArr = n.toString().split('')
    if (nToArr.length===1) return -1
    
    let nSet = new Set(nToArr)
    if (nSet.size===1) return -1

    if (n===+nToArr.sort((a,b)=>b-a).join('')) {
        return -1
    } 
    
    let nToArr2 = n.toString().split('')

    for(let i=nToArr2.length-1;i>0;i--){
        if(nToArr2[i-1]<nToArr2[i]) {
            let temp = nToArr2[i]
            nToArr2[i] = nToArr2[i-1]
            nToArr2[i-1] = temp;
            break;
        }

    }
    return +nToArr2.join('');
}


console.log(nextBigger(111))
console.log(nextBigger(1));
console.log(nextBigger(531));

console.log(nextBigger(432));

console.log(nextBigger(423));

console.log(nextBigger(7681));
console.log(nextBigger(2017));


