new Vue({
  el: '#app',
  data: {
    newItem: '',
    tasks: [
            {name: 'Pure Php CRUD', completed: true, editMode: false},
            {name: 'Vue Todo', completed: false, editMode: false},
            {name: 'Laravel Middleware', completed: false, editMode: false},
        ],
    temp: '',
  },
  computed: {
    remaining() {
      return this.tasks.filter(task => !task.completed).length;
    }
  },
  methods: {
    addItem() {
      let item = {
        name: this.newItem,
        completed: false,
        editMode: false,
      }
      this.tasks = [...this.tasks, item];
      this.newItem = '';
    },
    deleteItem(index) {
      this.tasks.splice(index, 1)
    },
    editTask(task) {
      task.editMode = true;
      this.temp = task.name;
    },
    editDone(task) {
      if (!task.name) {
        task.name = this.temp;
      }
      task.editMode = false;
    },
    clearComplete() {
      this.tasks = this.tasks.filter(task => !task.completed);
    },
    allDelete() {
      this.tasks = [];
    }
  }
});