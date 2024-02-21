function getMiddle(s){
  //Code goes here!

  return s.length%2 ? s[Math.round(s.length/2-1)] : s[Math.round(s.length/2-1)] + s[Math.round(s.length/2)]
}

console.log(getMiddle('gando'))