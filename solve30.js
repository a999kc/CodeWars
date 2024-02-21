function sumOfTwoMin(array) {
    return array.sort((a,b) => a - b)[0] + array.sort((a,b) => a - b)[1]
}

console.log(sumOfTwoMin([19, 5, 42, 2, 77]));
