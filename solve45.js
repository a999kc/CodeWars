function likes(names) {
    if (names.length==0) return  'no one likes this'
    else if (names.length==1) return names.join('')+' likes this'
    else if (names.length>1 && names.length<4) return names.splice(0,names.length-1).join(', ')+ ' and '+ names[names.length-1] +' like this'
    else if (names.length>=4) return names.splice(0,2).join(', ')+ ' and '+ names.length +' others like this'
}


console.log(likes(["Max", "John", "Mark","Hui"]))