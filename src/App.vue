<template>
  <div id="app">
    <h1>App</h1>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">vCustomer</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">Customers</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
    <router-view />
  </div>
  
</template>
<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>
