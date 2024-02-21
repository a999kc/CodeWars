let a=1;
let b=25;

function BetweenAB(a,b) {
    return a+Math.random()*(Math.max(a,b)-Math.min(a,b))
}

console.log(BetweenAB(a,b))