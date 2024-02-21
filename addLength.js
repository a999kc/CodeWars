function addLength(str) {
    let result=[]
    str.split(' ').forEach(item=>{
        result.push(`${item}`+' '+`${item.length}`)
    });
    return result;
}
    
console.log(addLength('apple ban'))