function persistence(num, counter = 0) {
    let newNumber = 1;
    if (num < 10) return counter;
    while (num) {
        newNumber *= num % 10;
        num = Math.floor(num / 10);
    }
    counter += 1;
    return persistence(newNumber, counter);
}
console.log(persistence(25))
console.log(counter)
