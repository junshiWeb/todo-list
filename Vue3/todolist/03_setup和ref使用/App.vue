<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">增加</button>
</template>
 
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  // vue2.0的实现
  // data() {
  //   return {
  //     count: 10,
  //   };
  // },
  // methods: {
  //   updateCount() {
  //     this.count++;
  //   },
  // },
  // vue3实现
  setup() {
    // 数据不是响应式数据
    // let count = 10;
    // ref是一个函数，定义一个响应式数据,只能用const定义
    const count = ref(10);
    function updateCount() {
      count.value++;
    }
    return {
      count,
      updateCount,
    };
  },
});
</script>


