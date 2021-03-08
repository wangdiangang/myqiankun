<template>
  <div class="app">
    这是最外边的名字{{userName}}
    <span><router-link to="/">点击跳转到父页面</router-link></span>
    <span><router-link to="/vue">点击跳转到子页面</router-link></span>
    <span><router-link to="/vue2">点击跳转到二子页面</router-link></span>
    <span><router-link to="/vue3">点击跳转到三三三子页面</router-link></span>

    <router-view />
    <div id="vue"></div>
    <!-- 重点2：子应用容器 id -->
  </div>
</template>

<script>
// import store from "./store"
export default {
  name: "App",
  data() {
    return {
      userName: this.$store.state.user.name,
    };
  },
  mounted() {
    console.log("this.$store", this.$store);
  },
};
</script>


<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app span {
  width: 100px;
  margin: 20px;
}
#vue {
  width: 800px;
  height: 800px;
  border: 1px solid red;
}
</style>
