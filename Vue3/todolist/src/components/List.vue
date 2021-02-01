<template>
  <div class="container">
    <item
      v-for="(items, index) in todos"
      :key="index"
      :items="items"
      :delNow="delNow"
      :checkTodoList="checkTodoList"
      :index="index"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Item from "./Item.vue";

export default defineComponent({
  name: "List",
  props: {
    todos: {
      type: Array,
      required: true,
    },
    checkTodoList: {
      type: Function,
      required: true,
    },
    delNow: {
      type: Function,
      required: true,
    },
  },
  components: {
    Item,
  },
});
</script>

<style>
.container {
  margin: 10px 0;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
</style>