// function rot13(message){
//     let arr=[];
//     if (/[^a-zA-Z0-9]/.test(message)) return message
//     message.split('').forEach(item=>{
//         if((item.charCodeAt(0)+13)).
//         //arr.push(String.fromCharCode(item.charCodeAt(0)+13))
//     })
//     return arr;
// }


function rot13(message) {
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            // Применяем ROT13 только к буквам
            let base = charCode < 97 ? 65 : 97;
            result += String.fromCharCode((charCode - base + 13) % 26 + base);
        } else {
            // Оставляем не-буквенные символы без изменений
            result += message[i];
        }
    }

    return result;
}

console.log(rot13('test'))