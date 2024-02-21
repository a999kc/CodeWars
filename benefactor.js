// function newAvg(arr, newavg) {
//     let donate = (arr.length+1)*newavg - arr.reduce((acc,value)=>acc+value,0)
//     if (donate<0) {
//         return "Expected New Average is too low"
//     } else {
//         return donate;
//     }
// }
function newAvg(arr, newavg) {
    let donate = Math.ceil((arr.length+1)*newavg - arr.reduce((acc,value)=>acc+value,0))
    if (donate<0) throw new Error("Invalid donation amount")
    return donate;
}



console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 30))