function scramble(str1, str2) {
    str2=str2.split('')
    str1=str1.split('')
    for(let item of str2) {
        if(!str1.includes(item)) {
            return false;
        } else if (str1.includes(item)) {
            //delete str1[str1.indexOf(item)]

            str1.splice(str1.indexOf(item),1)
        }
    }
    return true;
}

console.log(scramble('rkqodlw','world'))
// console.log(scramble('cedewaraaossoqqyt', 'codewars'))
// console.log(scramble('katas','steak'))
// console.log(scramble('scriptjavx',        'javascript'))