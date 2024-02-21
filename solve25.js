//Реализовать методы,которые d процессе выполнения строки дали бы 4

class Number {

    static value;
    constructor (value=0) {
        this.value = value

    }

    plus(r) {
        this.value += r;
        return this
    }

    minus(r) {
        this.value -= r;
        return this
    }

    get() {
        console.log(value)
    }
}

const FirstValue = new Number(2);
//const SecondValue = new Number(3);
FirstValue.plus(3).minus(1)
console.log(FirstValue.value)