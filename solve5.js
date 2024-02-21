function createPerson() {
    let name = 'danya';

    return {
        setName: function(m_name) {
           name = m_name;
        },
        getName: function() {
            return name;
        }
    };
}

const person = createPerson();

console.log(person.getName()); // Выведет "danya"
person.setName('John');
console.log(person.getName()); // Выведет "John"
//Приватные переменные: // Создайте объект Person с методами setName и getName, 
// которые позволяют устанавливать и получать имя человека. 
// Используйте замыкание, чтобы сделать имя человека приватной переменной.



