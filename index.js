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



// 1)
let obj={
    "1":'same',
    '2':'some'
}
function countProperties(obj){
    let newObj=Object.values(obj)
    return newObj.length
}
console.log(countProperties(obj))

// 2)
let obj1={
    Tom:5000,
    Sam:6000,
    Timmy:4000
}
function getMaxSalary(salaries){

}


// 3)
let obj2={
    "1":50,
    '2':500
}
function averageValues(obj2){
    let objLength=Object.keys(obj2)
    let objValues=Object.values(obj2)
    let sum=0
    for(let i of objValues){
        sum+=i
    }
    return sum/objLength.length
}
console.log(averageValues(obj2))