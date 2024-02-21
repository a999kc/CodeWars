// Для заданного целочисленного массива nums 
// возвращайте true, если какое-либо значение встречается в массиве не менее двух раз, 
// и возвращайте false, когда все элементы различны.
let array = [1,1,1,3,3,4,3,2,4,2];
let setArr = new Set(array);
let obj = new Object()
setArr.forEach(value => {
    obj[value]=0;
})
for( let value of array) {
    if(setArr.has(value)) obj[value]+=1;
}

if (Object.values(obj).length == Object.values(obj).reduce((partialSum, a) => partialSum + a, 0)) {
    console.log(true)
} else {
    console.log(false) 
}

console.log(array, setArr, obj)
