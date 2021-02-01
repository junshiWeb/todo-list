<template>
  <label
    for=""
    class="item"
    :class="{ active: isActive }"
    @mouseenter="mouseChange(true)"
    @mouseleave="mouseChange(false)"
  >
    <input
      type="checkbox"
      :checked="items.isChecked"
      @click="checkChange(items.id)"
    />
    {{ items.title }}
    <button @click="delTarget()" v-if="isActive">删除</button>
  </label>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Item",
  props: {
    index: {
      type: Number,
      required: true,
    },
    items: {
      type: Object,
      require: true,
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
  setup(props) {
    const isActive = ref(false);
    // 选中当前item
    const checkChange = () => {
      props.checkTodoList(props.index);
    };
    // 鼠标移动事件
    const mouseChange = (flag: boolean) => {
      // console.log(flag);
      flag ? (isActive.value = true) : (isActive.value = false);
    };
    // 删除当前item
    const delTarget = () => {
      console.log(props.index);

      props.delNow(props.index);
    };
    return {
      isActive,
      checkChange,
      mouseChange,
      delTarget,
    };
  },
});
</script>

<style scoped>
.item {
  height: 32px;
  line-height: 32px;
  border: 1px solid #eee;
}
.active {
  background: pink;
  color: #fff;
}
</style>