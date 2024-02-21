function generateHashtag (str) {
    if (/^\s*$/.test(str)) return false;
    let newStr = str.trim().split(' ').map(element => {
        if (element && element.length > 0) {
            return element[0].toUpperCase() + element.slice(1);
        } else {
            return '';  
        }
    });
    return ('#'+newStr.join('')).length>140 || newStr.length === 0 ? false : '#'+newStr.join('');
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("       Hello world"))
//console.log(generateHashtag("                                                      "))
console.log(generateHashtag(""))
console.log(generateHashtag("A"))
console.log(generateHashtag("a"*138))

//  // Проверяем, состоит ли строка только из пробелов
//  if (/^\s*$/.test(str)) {
//     return false;
// }

// newStr = str.trim().split(' ').map(element => {
//     if (element && element.length > 0) {
//         return element[0].toUpperCase() + element.slice(1);
//     } else {
//         return '';  // или другое значение по умолчанию
//     }
// });

// const hashtag = '#' + newStr.join('');

// return (hashtag.length > 140 || newStr.length === 0) ? false : hashtag;