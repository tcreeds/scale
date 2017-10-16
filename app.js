Vue.component('student-item', {
  props: ['id', 'name', 'score', 'grade'],
  template: `<li>
      <input class='student-name' type='text' placeholder='Name' v-model='name'></input>
      <input class='student-score' type='text' placeholder='Score' v-model='score'></input>
      <span class='student-grade'>{{grade}}</span>
      </li>`
})

var app = new Vue({
  el: '#app',
  data: {
    students: [{
      id: '1234',
      name: 'Test Name',
      score: 75,
      grade: 80
    }]
  }
})
