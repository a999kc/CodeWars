// function high(x){
//     let alphabet='abcdefghijklmopqrstuvwxyz'
//     let xToArr=x.split(' ')
//     xToArr=xToArr.map(item =>item.split(''))
//     for(let i=0;i<xToArr.length;i++) {
//         xToArr[i]=xToArr[i].map(item=>alphabet.indexOf(item)+1)
//         let sum=xToArr[i].reduce((acc,value)=>acc+value,0)
//         xToArr[i]=sum;
//     }
//     //return //x.split('').indexOf(xToArr.sort((a,b)=>b-a)[0])
//     return x.split(' ')[xToArr.indexOf(Math.max(...xToArr))]
// }

function high(x){
    let alphabet='abcdefghijklmopqrstuvwxyz'
    let xToArr=x.split(' ')
    xToArr = xToArr.map(elem => {
        return elem.split('').map(item => alphabet.indexOf(item) + 1).reduce((acc, val) => acc + val, 0);
    });
    return x.split(' ')[xToArr.indexOf(Math.max(...xToArr))]
}



console.log(high('man i need a taxi up to ubud'))
console.log(high('take me to semynak'))
console.log(high('what time are we climbing up the volcano'))
