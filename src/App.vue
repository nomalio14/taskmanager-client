<template>
  <div id="app">
    <nav
      class="navbar has-background-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand"></div>
      <div class="columns navbar-search">
        <div class="column is-2">
          <a class="navbar-item" href="https://bulma.io">
            <span class="title  has-text-white"> vui.me </span>
          </a>
        </div>
        <div class="column is-offset-1 is-half">
          <div class="field navbar-item">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input
                    v-model="newTodo.title"
                    class="input"
                    type="text"
                    placeholder="Make dinner..."
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1">
          <div class="field navbar-item">
            <a @click="openModal" class="button is-link">Create</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': isActive }">
      <div @click="closeModal" class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Crate a new todo!</p>
          <button @click="closeModal" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="e.g. Make Dinner..."
                v-model="newTodo.title"
              />
            </div>
          </div>
          <b-field label="Due date">
            <b-datepicker
              placeholder="Click to select..."
              icon="calendar-today"
              v-model="newTodo.dueDate"
            >
            </b-datepicker>
          </b-field>

          <div class="field">
            <label class="label">Assignee</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="e.g. Mr.Matsui"
                v-model="newTodo.assignee"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Note</label>
            <div class="control">
              <textarea v-model="newTodo.note" class="textarea" placeholder="e.g. Hello world"></textarea>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="addTodo" class="button is-link">Save</button>
          <button @click="closeModal();clearNewTodo()" class="button">Delete</button>
        </footer>
      </div>
    </div>
    <div class="container">
      <div v-for="todo in todos" class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ todo.todo }}</strong> <small>@{{todo.assignee}}</small>
                <small>at {{todo.createdAt}}</small>
                <br />
                {{ todo.note }}
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <button
                    :class="{
                      'is-grey': todo.done,
                      'is-link': !todo.done
                    }"
                    @click="doneTodo(todo)"
                    class="button"
                  >
                    Done
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
    <!-- <router-view class="container"></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActive: false,
      newTodo: {
        title: '',
        dueDate:  new Date(),
        assignee: '',
        note: ''
      },
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.isActive = true
      this.todos.push({
        ...this.newTodo,
        createdAt: new Date(),
        done: false
      });
      this.newTodo.title = "";
      this.isActive = false;
    },
    doneTodo(todo) {
      console.log(todo);
      todo.done = true;
    },
    clearNewTodo() {
      this.newTodo = {}
    },
    closeModal() {
      this.isActive = false
    },
    openModal() {
      this.isActive = true 
    }

  }
};
</script>

<style>
a.navbar-item:hover {
  background-color: #8a4d76;
}
.navbar-search {
  width: 100%;
}
.container {
  margin-top: 10px;
}
.modal-card-body {
  min-height: 500px;
}
</style>
