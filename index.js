// 1)
let student={
    name:'Artem',
    grade:"5"
}
student=JSON.stringify(student)
let newStudent=JSON.parse(student)
console.log(typeof(newStudent))

// 2)
let book={
    '1':'something'
}
book=JSON.stringify(book)
let parsedBook=JSON.parse(book)
console.log(typeof(parsedBook))

// 3)
let employees=['john','Doe']
employees=JSON.stringify(employees)
let newEmployees=JSON.parse(employees)
console.log(typeof(newEmployees))