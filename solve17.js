const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
let fruitObj={};


// Задача 1. Определить сколько раз каждый элемент встречается в массиве.
// Первое решение
// for (let fruit of fruits) {
//         //Если ключ (фрукт) уже существует в объекте, увеличиваем его значение на 1
//     if (fruitObj.hasOwnProperty(fruit)) {
//         fruitObj[fruit]++;
//     } else {
//         // Если ключ (фрукт) еще не существует в объекте, устанавливаем значение равным 1
//         fruitObj[fruit] = 1;
//     }
// }

// console.log(fruitObj)



// Второе решение

for (let fruit of new Set(fruits)) {
    fruitObj[fruit]=0;
}

Object.keys(fruitObj).forEach((key)=>{
    fruitObj[key]+=fruits.filter((value) => key==value).length
});

//console.log(fruits.filter((key)=> key=='kiwi'))

console.log(fruitObj)