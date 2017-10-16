var app = new Vue({
  el: '#app',
  data: {
    students: JSON.parse(localStorage.getItem('students')) || [{
      id: guid(),
      name: '',
      score: ''
    }]
  },
  methods: {
    calculateGrade(x, y=1.42, z=60) {
      if (Number.parseFloat(x) || x === 0 || x === '0')
        return (Math.pow(Math.max(0, x-z) / (100-z), 1/y) * (100-z) + z).toPrecision(4)
      return ''
    },
    addStudent(){
      this.students.push({
        id: guid(),
        name: '',
        score: ''
      })
    },
    saveStudents(){
      localStorage.setItem('students', JSON.stringify(this.students))
    },
    clearStudents(){
      this.students.splice(0, this.students.length)
      localStorage.removeItem('students')
    }
  }
})

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}
