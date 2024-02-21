
let directionsObj = {
    n: 0,
    e: 0,
    s: 0,
    w: 0,
}

// function isValidWalk(walk) {
//     const directionsObj = {
//         n: 0,
//         e: 0,
//         s: 0,
//         w: 0,
//     };

//     for (let value of walk) {
//         if (directionsObj.hasOwnProperty(value)) {
//             directionsObj[value]++;
//         }
//     }

//     return directionsObj.n === directionsObj.s && directionsObj.w === directionsObj.e && walk.length === 10;
// }

function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length!=10) {
        return false
    } else {
        for (let value of walk) {
            if (directionsObj.hasOwnProperty(value)) {
                directionsObj[value]+=1
            }
        }
    }

    if(directionsObj.n == directionsObj.s && directionsObj.w == directionsObj.e) {
        return true
    } else {
        return false;
    }
    
}

let walkArray = ['n','s','n','s','n','s','n','s','n','s'];
let walkArray2 = ['w','e','w','e','w','e','w','e','w','e','w','e']
let walkArray3 = ['w'];
let walkArray4 = ['n','n','n','s','n','s','n','s','n','s'];
console.log(isValidWalk(walkArray4));