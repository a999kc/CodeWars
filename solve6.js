// Подсчет суммы элементов: Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов в массиве.

function countSum(arr) {
    const result = arr.reduce((total,element) => total + element,0);
    return result;
}
const arr = [1,2,3];

const res = countSum(arr);
console.log(res);