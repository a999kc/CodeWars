function compressString(str) {
    if (str.length === 0) {
        return str;
    }
    let charCount={}
    for(let item of str) {
        if(charCount.hasOwnProperty(item)) {
            charCount[item]++
        } else {
            charCount[item]=1
        }
    }

    return Object.entries(charCount).toString().replace(/,/g,'')
}


console.log(compressString("aaabbbccc")); // "a3b3c3"