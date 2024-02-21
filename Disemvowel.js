function disemvowel(str) {
    let vowels='aeiouAEIOU'
    return str.split("").filter(item=> !(vowels.includes(item))).join('');
}


console.log(disemvowel("This website is for losers LOL!"))