function incrementString (string) {
    return string.split('').filter(item => !isNaN(item)).join("");
}


console.log(incrementString("foobar000"))

console.log(incrementString("foo91bar002"))