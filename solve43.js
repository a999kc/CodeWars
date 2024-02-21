function findOdd(A) {
    let arr=[]
    A.forEach(value => {
       let count=0;
       for(let item of A) {
        if (item==value) count++
       }

       if (count%2!=0) arr.push(value)
    })
    return arr[0];
}


console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);