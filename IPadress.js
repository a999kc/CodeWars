function ipsBetween(start, end){
    let sum;
    end=end.split('.').map(Number)
    start=start.split('.').map(Number)
    

    //return [start.split('.').map(Number),end.split('.').map(Number)]
    end = end.filter(value => start.indexOf(value)==-1)
    return end
}





//console.log(ipsBetween("160.0.0.0", "160.0.0.50"));
console.log(ipsBetween("170.0.0.0", "170.1.0.0"));