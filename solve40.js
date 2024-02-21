function isPangram(string){
    let obj = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,
    }
    for (let item of string.toLowerCase().replace(/ |\.$|,/g,'')) {
        if (obj.hasOwnProperty(item)) {
            obj[item]++
        }
    }
    return Object.values(obj).join('').includes(0) ? false : true
    //return string.slice(0,string.length-1).toLowerCase().replace(/ /g,'')
    //return string.toLowerCase().replace(/ |\.$|,/g,'')
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))
console.log(isPangram('AbCd,EfGhIjKlM zYxWvUtSrQpOn' ))