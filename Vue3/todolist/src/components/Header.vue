<template>
  <input
    type="text"
    placeholder="请输入添加的任务，输入enter添加"
    v-model="title"
    @keyup.enter="add()"
  />
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    addTodoList: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const title = ref("");
    const add = () => {
      if (!title.value.trim()) return;
      const todo = {
        id: Date.now(),
        title: title.value,
        isChecked: false,
      };
      props.addTodoList(todo);
      title.value = "";
    };
    return {
      add,
      title,
    };
  },
});
</script>

<style scoped>
input {
  height: 36px;
  border-radius: 5px;
  border: 1px solid #eee;
}
input:focus {
  outline: none;
  border: 1px solid rgb(22, 125, 209);
}
</style>