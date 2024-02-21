function pigIt(str){
    // newStr = str.split(' ')
    // newStr.map(item => {
    //     return item.slice(1)+item[0]+'ay'
    // })

    newStr = str.split(' ').map(item => {
       return /^[a-zA-Z]+$/.test(item) ? item.slice(1) + item[0] + 'ay' : item;
    });
    return newStr.join(' ');

}

//console.log(pigIt('Pig')) //'Pig latin is cool'
console.log(pigIt('Pig latin is cool')) 