const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        todoList: [
            {
                text: 'fare questo',
                done: false
            },
            {
                text: 'fare quest\'altro',
                done: false
            },
            {
                text: 'fare altro ancora',
                done: true
            },
            {
                text: 'fare un\'altra cosa',
                done: false
            },
        ],
        newTodo: '',
        currentTodoIndex: null,
      }
    },
    methods: {
        addTodo() {
            this.todoList.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo = ''
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1)
        }
    }
  }).mount('#app')