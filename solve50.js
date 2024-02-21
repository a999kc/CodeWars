function cakes(recipe, available) {
    let a=[];
    for(let item of Object.keys(recipe)) {
        if (available.hasOwnProperty(item)) {
            a.push(Math.floor(available[item]/recipe[item]))
        } else {
            return 0;
        }
    }
    //return Object.keys(recipe)[0]
    return a.sort((a,b)=> a-b)[0];
    //return a;
}
//console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))