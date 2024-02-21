function tribonacci(signature,n){
    if (n===0) return []

    for (let i=3;i<n;i++) {
        signature[i]=signature[i-1]+signature[i-2]+signature[i-3];
    }
    return signature
}

let signature = [1,1,1];
let n = 10;

console.log(tribonacci(signature,n))