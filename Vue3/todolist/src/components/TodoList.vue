<template>
  <h2>TodoList</h2>
  <div class="todolist">
    <todo-header :addTodoList="addTodoList" />
    <list
      :todos="state.todos"
      :delNow="delNow"
      :checkTodoList="checkTodoList"
    />
    <todo-footer
      :todos="state.todos"
      :delChange="delChange"
      :checkAll="checkAll"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, watch } from "vue";
import TodoHeader from "./Header.vue";
import List from "./List.vue";
import TodoFooter from "./Footer.vue";
import { Todo } from "../types/todo";
import { saveTodos, readTodos } from "../utils/localStrageUtils";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoHeader,
    List,
    TodoFooter,
  },
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 1000);
    });
    // 添加todo数据
    const addTodoList = (todo) => {
      state.todos.unshift(todo);
    };
    // 删除当前数据
    const delNow = (index: number) => {
      state.todos.splice(index, 1);
    };
    // 删除选中数据
    const delChange = () => {
      console.log("--");
      state.todos = state.todos.filter((item) => !item.isChecked);
    };
    // 选中数据
    const checkTodoList = (index) => {
      state.todos.map((item, i) => {
        if (index === i) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });
    };
    // 全选,反选数据
    const checkAll = (isChecked) => {
      state.todos.forEach((item) => {
        item.isChecked = isChecked;
      });
    };
    watch(() => state.todos, saveTodos, { deep: true });

    return {
      state,
      addTodoList,
      delNow,
      delChange,
      checkTodoList,
      checkAll,
    };
  },
});
</script>

<style >
.todolist {
  width: 400px;
  margin: auto;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
</style>