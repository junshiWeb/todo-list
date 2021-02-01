<template>
  <div>我有谁啊</div>
  <h2>{{ number }}</h2>
</template>
 
<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
// 定义组件
import { defineComponent } from "vue";

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class App extends Vue {}
// 暴露出去一个定义好的组件
export default defineComponent({
  name: "App",
  setup() {
    const number = 10;
    return {
      number,
    };
  },
});
</script>


