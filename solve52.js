function dirReduc(arr){
    // let flag=true;
    // let i=0;
    // while(flag) {
    //     if((arr[i]=="NORTH" && arr[i+1]=="SOUTH") || (arr[i]=="SOUTH" && arr[i+1]=="NORTH")) {
    //         arr.splice(i,i+2)
    //     } else if ((arr[i]=="EAST" && arr[i+1]=="WEST") || (arr[i]=="WEST" && arr[i+1]=="EAST")) {
    //         arr.splice(i,i+2)
    //     }
    //     i++;

        
    // }
    while(arr.length>1) {
        for (let i=0;i<arr.length;i++) {
            if((arr[i]=="NORTH" && arr[i+1]=="SOUTH") || (arr[i]=="SOUTH" && arr[i+1]=="NORTH")) {
                arr.splice(i,2)
            } else if ((arr[i]=="EAST" && arr[i+1]=="WEST") || (arr[i]=="WEST" && arr[i+1]=="EAST")) {
                arr.splice(i,2)
            }
        }
    }
    return arr;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST",]))