// Фильтрация элементов: Напишите функцию, которая принимает массив и возвращает новый массив, 
// содержащий только элементы, удовлетворяющие определенному условию (например, все четные числа).

const evenNumbersFilter = function(array) {
    let newArr=[]
    array.filter(function(item){
        if(item%2==0) {
            newArr.push(item);
        }
    })
    return newArr;
    
}
let digitsList = [84,10,22,27,57,5,83,46,34,4,36];
console.log(evenNumbersFilter(digitsList));