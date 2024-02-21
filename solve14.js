// Поиск свойств: Напишите функцию, которая проверяет, существует ли определенное свойство в объекте.
let person = {
    name: 'danya',
    occupation: 'no-experience',
    sex: 'male'
}

function checkKey(obj,key) {
   if (obj[key]) return true
}



console.log(checkKey(person,'name'));
console.log(checkKey(person,'pol'));