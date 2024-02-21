// function countDevelopers(list) {
//     let count=0;
//     for (let item of list) {
//         if (item.language==="JavaScript" && item.continent==="Europe") {
//             count++
//         }
//     }
//     return count;
// }

function countDevelopers(list) {
    return list.reduce((acc, value) => {
        if (value.language === "JavaScript" && value.continent === "Europe") {
            return acc + 1;
        }
        return acc;
    }, 0); 
}


const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];


console.log(countDevelopers(list1))
console.log(countDevelopers(list2))