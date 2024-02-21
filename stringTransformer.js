function stringTransformer(str) {
    str = str.split('').map(item => {
        if(item===item.toLowerCase()) {
            return item.toUpperCase()
        } else if(item===item.toUpperCase()) {
            return item.toLowerCase()
        }
    })
    return str.join('').split(' ').reverse().join(' ')
}


console.log(stringTransformer("Example Input"))