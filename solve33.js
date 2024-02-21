function duplicateCount(text){
    text = text.toLowerCase()
    let textObj = {}
    let count = 0;
    for (let item of text) {
        if (!textObj.hasOwnProperty(item)) {
            textObj[item] = 1
        } else {
            textObj[item]++
        }
    }

    // for (let item of Object.keys(textObj)) {
    //     if (textObj[item]>=2) count++;
    // }
    //return count
    Object.keys(textObj).filter(value => textObj[value]>=2 )
    return Object.keys(textObj).filter(value => textObj[value]>=2).length
}

console.log(duplicateCount("aabBcde"));