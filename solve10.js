// Сортировка массива: Напишите функцию для сортировки массива чисел в порядке возрастания или убывания.
const sortFunction = function(array) {
    const res = array.sort((a, b) => a - b)
    console.log(res);
}

const arrayNotSorted = [1, 2, 3, 2, 4, 3, 5, 6, 7, 5];

console.log(sortFunction(arrayNotSorted));