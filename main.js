var students = []
let list
$(document).ready(() => {
    list = $('#studentList')
    if (localStorage.getItem('students') !== null){
        students = JSON.parse(localStorage.getItem('students'))
        for (let i = 0; i < students.length; i++)
            addStudent(students[i])
    }

})

function createStudent(){
    let student = {
        id: guid(),
        name: '',
        score: '',
        grade: ''
    }
    students.push(student)
    addStudent(student)
}

function addStudent(student){
    let grade = calculateGrade(student.score)
    let html = `<li studentId='${student.id}'>
        <input class='student-name' type='text' placeholder='Name' value='${student.name}' onkeyup="updateStudent('${student.id}')"></input>
        <input class='student-score' type='text' placeholder='Score' value='${student.score}' onkeyup="updateStudent('${student.id}')"></input>
        <span class='student-grade'>${grade}</span>
    `
    list.append($(html))
}

function saveStudents(){
    localStorage.setItem('students', JSON.stringify(students))
}

function clearStudents(){
    students = []
    localStorage.setItem('students', JSON.stringify(students))
    list.html('')
    console.log(JSON.parse(localStorage.getItem('students')))
}

function updateStudent(id){
    let studentLI = $(`li[studentId=${id}]`)
    let score = studentLI.children('.student-score').val()
    let name = studentLI.children('.student-name').val()

    let student = students.find((s) => s.id == id)
    student.name = name
    student.score = score
    student.grade = calculateGrade(score)
    studentLI.children('.student-grade').text(student.grade)

    students = students.filter((s) => s.id != id)
    students.push(student)
}

function calculateGrade(x, y=1.42, z=60) {
    if (Number.parseFloat(x) || x === 0 || x === '0')
        return (Math.pow(Math.max(0, x-z) / (100-z), 1/y) * (100-z) + z).toPrecision(4)
    return ''
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}
