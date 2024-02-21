function getCount(str) {
    vowels = 'aeiou'
    return str.split('').filter(value => vowels.includes(value)).length
    
    //return 0;
}

console.log(getCount("abracadabra"))