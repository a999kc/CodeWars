// Поиск наибольшего числа: Напишите функцию, которая находит наибольшее число в массиве чисел.

const result = function(array) {
    let max=array[0];
    for(let i = 0;i< array.length; i++) {
        if (array[i]>max) {
            max= array[i];
        }
    }
    console.log(max)
}


let digitsList = [84,10,22,27,57,5,83,46,34,4,36];

result(digitsList);