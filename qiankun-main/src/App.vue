<template>
  <div class="app">
    <!-- 这是最外边的名字{{ userName }}{{ count }} -->
    <!-- <button @click="jia">加10</button> -->
    <!-- <a-button type="primary" @click="jia"> 加10 </a-button> -->
    <!-- <span><router-link to="/">点击跳转到父页面</router-link></span>
    <span><router-link to="/vue">点击跳转到子页面</router-link></span>
    <span><router-link to="/vue2">点击跳转到二子页面</router-link></span>
    <span><router-link to="/vue3">点击跳转到三三三子页面</router-link></span> -->
    <!-- <router-view /> -->
    <!-- <div id="vue"></div> -->
    <!-- 重点2：子应用容器 id -->
    <!-- <div id='vue2'></div> -->
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo"></div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="defaultselectedkeys1"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="0">
            <router-link to="/">点击跳转到父页面</router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <router-link to="/vue">点击跳转到子页面</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/vue2">点击跳转到二子页面</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/vue3">点击跳转到三三三子页面</router-link>
          </a-menu-item>
          <a-menu-item key="4"> <div @click="textcheng">测试变化按钮<span @click="wocao">卧槽</span></div> </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider
          width="200"
          style="background: #fff"
          :trigger="null"
          collapsible
        >
          <a-menu
            mode="inline"
            :default-selected-keys="defaultselectedkeys"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />subnav 1</span>
              <a-menu-item key="1">
                <router-link to="/vue3">点击跳转到三三三子页面</router-link>
              </a-menu-item>
              <a-menu-item key="2"> option2 </a-menu-item>
              <a-menu-item key="3"> option3 </a-menu-item>
              <a-menu-item key="4"> option4 </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />subnav 2</span>
              <a-menu-item key="5">
                <router-link to="/vue2">点击跳转到二子页面</router-link>
              </a-menu-item>
              <a-menu-item key="6"> option6 </a-menu-item>
              <a-menu-item key="7"> option7 </a-menu-item>
              <a-menu-item key="8"> option8 </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />subnav 3</span>
              <a-menu-item key="9"> option9 </a-menu-item>
              <a-menu-item key="10"> option10 </a-menu-item>
              <a-menu-item key="11"> option11 </a-menu-item>
              <a-menu-item key="12"> option12 </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
            <a-breadcrumb-item>
              这是主应用基座的名字{{ userName }} ===={{num}}</a-breadcrumb-item
            >
          </a-breadcrumb>
          <a-layout-content
            id="vue"
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '280px',
            }"
          >
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
    <div id="vue2"></div>
  </div>
</template>

<script>
// import store from "./store"
import actions from "./shared";
export default {
  computed: {
    count() {
      return this.$store.state.num;
    },
    defaultselectedkeys1() {
      return this.$store.state.chengeKeys;
    },
    userName(){
    return this.$store.state.user.name
    }
  },
  name: "App",
  data() {
    return {
      num:0,
      defaultselectedkeys: ["1"],
      collapsed: false,
      // userName: this.$store.state.user.name,
    };
  },

  methods: {
    wocao(){
      this.$store.dispatch('GUNDAN',10)
    },
    textcheng(){
      console.log('%c测试变化','color:red',this);
      actions.setGlobalState({taskList:[1,2,34,5,6],token:'这是新的token'})
      console.log('actions',actions);
    },
    // jia() {
    //   this.$store.dispatch("CHANGENUM", 100);
    // },
  },

  mounted() {
    console.log('%cactions','color:red',actions);
      actions.onGlobalStateChange(state=>{
      console.log('================',state);
      this.num=state.num
    })

     
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
  /* margin-top: 60px; */
}
.app span {
  width: 100px;
  margin: 20px;
}
#vue {
  /* width: calc(100% - 200px); */
  height: calc(100vh);
  border: 1px solid red;
  overflow: scroll;
}
#vue2 {
  margin: 20px;
  width: 800px;
  height: 800px;
  border: 1px solid yellow;
}
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
