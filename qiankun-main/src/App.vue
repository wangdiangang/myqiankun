<template>
  <div class="app">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo"></div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="defaultselectedkeys1"
          :style="{ lineHeight: '64px' }"
          @click="clickMenu"
          @select="select"
        >
          <a-menu-item v-for="(item, index) in menuListTop" :key="index">
            <router-link :to="item.router">{{ item.name }}</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <div @click="textcheng">
              测试变化按钮<span @click="wocao">卧槽</span>
              <a-button type="primary"> Primary </a-button>
            </div>
          </a-menu-item>
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
            <a-sub-menu v-for="(item, index) in menuListLeft" :key="index">
              <span slot="title"><a-icon type="user" />{{ item.name }}</span>
              <a-menu-item
                v-for="(ite, i) in item.options"
                :key="'sub' + index + i + ''"
              >
                <router-link :to="ite.router">{{ ite.name }}</router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>

        <a-layout style="padding: 0 12px 12px">
          <div>
            <a-tag
              @click="click(item)"
              closable
              @close="close($event, item)"
              v-for="(item, i) in closeList"
              :key="i.id"
              :color="item.color"
            >
              {{ item.name }}
            </a-tag>
          </div>
          <a-breadcrumb>
            <a-breadcrumb-item>
              这是主应用基座的名字{{ name }} ===={{
                num
              }}</a-breadcrumb-item
            >
          </a-breadcrumb>
          <template v-if="!flag">
            <a-layout-content
              id="vue"
              :style="{
                background: '#fff',
                padding: '12px',
                margin: 0,
                minHeight: '280px',
              }"
            >
            </a-layout-content>
          </template>
          <template v-else>
            <a-layout-content
              id="vue"
              :style="{
                background: '#fff',
                padding: '12px',
                margin: 0,
                minHeight: '280px',
              }"
            >
              这是主应用
              <router-view />
            </a-layout-content>
          </template>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import actions from "./shared";
export default {
  computed: {
    count() {
      return this.$store.state.num;
    },
    defaultselectedkeys1() {
      return this.$store.state.chengeKeys;
    },
    userName() {
      return this.$store.state.user.name;
    },
  },
  name: "App",
  data() {
    return {
      name:'',
      flag: true,
      closeList: [
        { name: "第一个", id: 1, router: "/vue" },
        { name: "第二个", id: 2, router: "/vue2" },
        { name: "第三个", id: 3, router: "/vue3" },
      ],
      menuListTop: [
        { name: "主页面", router: "/" },
        { name: "第1子页面", router: "/vue" },
        { name: "第2二子页面", router: "/vue2" },
        { name: "第3三子页面", router: "/vue3" },
      ],
      menuListLeft: [
        {
          name: "shome1",
          options: [
            { name: "home11111", router: "/vue3" },
            { name: "home22222", router: "/vue2" },
          ],
        },
        {
          name: "hjome2",
          options: [
            { name: "jome11111", router: "/vue3" },
            { name: "home22222", router: "/vue2" },
          ],
        },
        {
          name: "jome3",
          options: [
            { name: "home11111", router: "/vue3" },
            { name: "home22222", router: "/vue2" },
          ],
        },
      ],
      num: 0,
      defaultselectedkeys: ["1"],
      collapsed: false,
    };
  },

  methods: {
    click(item) {
      console.log("123456", item);
      item.color = "red";
      let { id } = item;
      this.closeList.forEach((item) => {
        item.color = item.id == id ? "red" : "";
      });
      this.$router.push(item.router);
    },
    close(e, item) {
      e.preventDefault();
      let { id } = item;
      console.log("关闭", item);
      this.closeList = this.closeList.filter((item) => {
        return item.id != id;
      });
      if (this.$route.path == item.router) {
        this.$router.push("/");
      }
    },
    select({ item, key, keyPath }) {
      console.log("%cthis.$route", "color:red", this.$route);
      this.flag = this.$route.path == "/home";
    },
    clickMenu({ item, key, keyPath }) {
      console.log(
        "%c上层菜单",
        "font-size:30px",
        item,
        this.menuListTop[key].name,
        keyPath
      );
      this.menuListLeft.forEach((item) => {
        item.name = this.menuListTop[key].name.substr(0, 3) + item.name;
      });
    },
    wocao() {
      this.$store.dispatch("GUNDAN", 10);
    },
    textcheng() {
      console.log("%c测试变化", "color:red", this);
      actions.setGlobalState({
        taskList: [1, 2, 34, 5, 6],
        token: "这是新的token",
      });
      console.log("actions", actions);
    },
  },

  mounted() {
    console.log("%cactions", "color:red", actions);
    actions.onGlobalStateChange((state) => {
      console.log("=======主应用onGlobalStateChange=========", state);
      this.num = state.num;
      this.name=state.user.name
    });
    let token = localStorage.getItem("token");
    console.log("token", token);

    // if (token) {
      actions.setGlobalState({ n: "12345678909" });
    // }
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
