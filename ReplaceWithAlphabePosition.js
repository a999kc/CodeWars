function alphabetPosition(text) {
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    let str=[]
    text = text.replace(/[',.]/gi,'').toLowerCase()
    //return textArr[0].split("").reduce((acc,item)=>acc+(alphabet.indexOf(item)+1),0) 
    for(let i=0;i<text.length;i++){
        if(alphabet.includes(text[i])){
            str.push(alphabet.indexOf(text[i])+1)
        }
    }
    return str
    return [text,str]
}



console.log(alphabetPosition("The sunset sets at twelve o' clock."))