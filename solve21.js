//Задача 5. Получить единый массив из любимых пицц каждого друга
const friends = [
    { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
    { name: 'mike', pizzas: ['salami', 'margarita'] },
    { name: 'stas', pizzas: ['meat'] },
    { name: 'anna', pizzas: ['fish'] }
];

let result = [];
for (let friend of friends) {
    result.push(friend.pizzas.join(', '))
}
console.log(result)


