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
        ]
      }
    }
  }).mount('#app')