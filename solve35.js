function openOrSenior(data){
    return data.map(value => value[0] >=55 && value[1]>7 ? value = "Senior" : value = "Open" );
}

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

console.log(openOrSenior(input))