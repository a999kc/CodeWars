function addN(number) {
    let n1 = number;
    return function(number2) {
        return n1+number2;
    }

}

const result = addN(5);
console.log(result(5));

/*Складывание чисел:
Напишите функцию addN, которая принимает число N и возвращает функцию, 
которая принимает другое число и возвращает сумму N и этого числа.*/