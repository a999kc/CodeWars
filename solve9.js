// Поиск дубликатов: Напишите функцию, которая находит все дубликаты в массиве и возвращает их в новом массиве.

function findDuplicates(array){
    const result = array.filter((item,index) => array.indexOf(item) !== index);
    return result;

}

const arrayWithDuplicates = [1, 2, 3, 2, 4, 3, 5, 6, 7, 5];

console.log(findDuplicates(arrayWithDuplicates))
