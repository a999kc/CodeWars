
// Требуется написать функцию, которая отвечает следующим требованиям:

// Функция принимает 2 аргумента - массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из 1-го аргумента равна числу, которое приходит 2-м аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

function SumInArray(array,summ) {
    for (let i=0;i<myNumbers.length-1;i++) {
        for (let j=i+1;j<myNumbers.length;j++) {
            firstNumber=myNumbers[i]
            if (firstNumber+myNumbers[j]==summ) {
                return [firstNumber,myNumbers[j]];
            } else {
                continue;
            }
        }

    }
}

console.log(SumInArray(myNumbers,sum))