function delayFunction(func,delay) {
    return function() {
        return setTimeout(func,delay)
    }
   
}

/*Задержка функции:
Создайте функцию delayFunction, которая принимает функцию и задерживает ее выполнение на определенное количество миллисекунд, 
используя setTimeout. 
Замыкание должно быть использовано для сохранения переданных аргументов и контекста функции. */