function toCamelCase(str){
    return str.replace(/[-_](.)/g, function(match, p1) {
        return p1.toUpperCase();
    });
   
}


let str = "the-stealth-warrior";
console.log(toCamelCase(str))