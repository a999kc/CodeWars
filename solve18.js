const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
//Задача 2. Создать массив который содержит только уникальные значения исходного массива.
//Первый способ
//let FruitSet = new Set(fruits);


//Второй способ

let FruitSet = Array.from(new Set(fruits));
console.log(FruitSet)