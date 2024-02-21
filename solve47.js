function moveZeros(arr) {
    let arr2=[]
    for( let item of arr) {
        if(item===0) {
            arr2.push(item);
            arr.splice(arr.indexOf(item),1)
        }
    }
    return arr.concat(arr2)
}
let array=[  null, [], null, +0, '6', null, {}, {}, null, '3', null, 4, '9', false, '6', [], [], +0, +0 ]
console.log(moveZeros(array)) //[false, 1, 1, 2,1, 3,'a']


// function moveZeros(arr) {
//     let nonZeros = arr.filter(item => item !== 0);
//     let zeros = arr.filter(item => item === 0);
//     return nonZeros.concat(zeros);
// }