<template>
  <label for="">
    <input type="checkbox" v-model="isChangeAll" />
    <span>选中{{ count }}/合计{{ todos.length }}</span>
    <button @click="delChange">清空所有选中</button>
  </label>
</template>

<script lang='ts'>
import { defineComponent, computed, onMounted } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    delChange: {
      type: Function,
      required: true,
    },
    checkAll: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    console.log(props);

    const count = computed(() => {
      return props.todos.reduce(
        (pre, todo, index) => pre + (todo.isChecked ? 1 : 0),
        0
      );
    });

    const isChangeAll = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value;
      },
      set(val) {
        props.checkAll(val);
      },
    });

    return {
      count,
      isChangeAll,
    };
  },
});
</script>

<style>
button {
  float: right;
}
</style>