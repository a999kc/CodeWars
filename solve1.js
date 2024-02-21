function createCounter() {
    let counter = 0;
    return function() {
        return ++counter;
    }
}

const res = createCounter();

console.log(res());
console.log(res());
console.log(res());



/*Счетчик:
Создайте функцию createCounter, которая возвращает другую функцию. 
Внутренняя функция должна инкрементировать счетчик и возвращать его текущее значение. 
Замыкание должно сохранять значение счетчика между вызовами. */