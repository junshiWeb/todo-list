<template>
  <todo-list />
</template>

<script lang='ts'>
    import { defineComponent, reactive } from "vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "name",
  components: {
    TodoList,
  },
});
</script>

<style lang='less'>
</style>