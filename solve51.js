function firstNonRepeatingLetter(s) {
    let obj ={}
    for ( let item of s.split('')) {
        if (obj.hasOwnProperty(item)) {
            obj[item]+=1
        } else {
            obj[item]=1
        }
    }
    let index = Object.values(obj).indexOf(1)
    return obj;
    //return index === -1 ? "" : Object.keys(obj)[index]
    
}

//console.log(firstNonRepeatingLetter('a'))
console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter('moOnMen'))


// function firstNonRepeatingLetter(s) {
//     var t=s.toLowerCase();
//     for (var x=0;x<t.length;x++)
//       if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
//         return s[x];
//     return "";
//   }