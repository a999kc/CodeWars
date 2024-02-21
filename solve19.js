
//Задача 3. Создать функцию, которая группирует студентов по возрасту.

const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
];

let studentsAgeObj = {};
for (let student of students) {
    studentsAgeObj[student.age] = 0
}

Object.keys(studentsAgeObj).forEach((key) =>{
    //studentsAgeObj[key]+=students.filter((value) => key==value.age).length
    studentsAgeObj[key] = students.filter((value) => key==value.age)
});

//console.log(students.filter((value) => 18==value.age))

console.log(studentsAgeObj)
