function objObserve(obj) {
    return Object.keys(obj);
}



let person = {
    name: 'danya',
    occupation: 'no-experience',
    sex: 'male'
}

console.log(objObserve(person));
