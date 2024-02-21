function spinWords(string){
    let newString = string.split(' ')
    
    newString = newString.map(value => {
        if (value.length>=5) {
            return value = value.split('').reverse().join('');
        } else {
            return value
        }
    })
    return newString.join(' ')
}


console.log(spinWords("Hey fellow warriors"))