function passwordGen(){
    let password = ''
    const passwordLength = Math.round(Math.random() * 14) + 6;
    for (let i = 0; i < passwordLength;i++) {

        const randomSet = Math.floor(Math.random() * 3);

        if (randomSet === 0) {
            password += String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
        } else if (randomSet === 1) {
            password += String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
        } else {
            password += String.fromCharCode(Math.round(Math.random() * (57 - 48) + 48));
        }
    }
    return password
}

console.log(passwordGen())
console.log(Math.round(Math.random()*3))