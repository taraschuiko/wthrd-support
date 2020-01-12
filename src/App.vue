<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Museo Sans";
  src: url("./assets/fonts/museosans-500.woff2") format("woff2"),
    url("./assets/fonts/museosans-500.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Museo Sans";
  src: url("./assets/fonts/museosans-700.woff2") format("woff2"),
    url("./assets/fonts/museosans-700.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background: #f4f6f8;
}

#app {
  font-family: "Museo Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 568px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
