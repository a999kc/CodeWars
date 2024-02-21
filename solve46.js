function findOutlier(integers){
    return integers.filter(item => item%2).length>1 ? integers.filter(item => item%2==0)[0] : integers.filter(item => item%2)[0]
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))