function createPhoneNumber(numbers){
  let phoneNumber = numbers.join().replace(/,/g,'')

  return `${' ' + '(' + phoneNumber.slice(0,3) + ') ' + phoneNumber.slice(3,6) + '-' + phoneNumber.slice(6,phoneNumber.length)}` ;
  //return ' (' + numbers.splice(0,3) + ') ' + numbers.splice(0,3)  ;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))