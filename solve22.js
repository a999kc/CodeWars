//Записать строку (символы строки) в обратном порядке

const myStr = 'pizza';
let newStr = []
for (let letter of myStr) {
    newStr.unshift(letter)
}

console.log(newStr.join(''))