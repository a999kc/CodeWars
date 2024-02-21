function squareDigits(num){
    return +num.toString().split('').map(item=>+item).map(item=>item**2).join('')
}

console.log(squareDigits(3212))