<template>
  <div id="app">
    <nav
      class="navbar has-background-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
      </div>
      <div class="columns navbar-search">
        <div class="column is-2">       
           <a class="navbar-item" href="https://bulma.io">
            <span class="title  has-text-white"> Vui.me </span>
           </a>
        </div>
        <div class="column is-offset-1 is-half">
          <div class="field navbar-item">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Name" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1">
          <div class="field navbar-item">
            <a class="button is-link">Add</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
 a.navbar-item:hover{
   background-color: #8A4D76;
 }
.navbar-search {
  width: 100%;
}
</style>
