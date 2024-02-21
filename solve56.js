function canPermutePalindrome(str) {
    if(str.length===0) return true
    let aloneChars=[]
    for(let item of str) {
        if(str.indexOf(item)===str.lastIndexOf(item)) {
            aloneChars.push(item)
        }
    }
    return aloneChars.length>1;
}

function palindrome(str) {
    return str===str.split('').reverse('').join('')
}

console.log(canPermutePalindrome("aab")); // true
console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("шалаш")); // true
console.log(canPermutePalindrome("потоп")); // true
console.log(canPermutePalindrome("потом")); // true
console.log(canPermutePalindrome("наворован")); // true


console.log(palindrome("наворован"));
console.log(palindrome("потом")); 



