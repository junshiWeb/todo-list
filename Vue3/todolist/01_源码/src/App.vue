<template>
  <!-- vue2需要根标签，vue3不需要 -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>
 
<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
// 定义组件
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue {}
// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
