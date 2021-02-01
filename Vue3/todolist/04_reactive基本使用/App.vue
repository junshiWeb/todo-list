<template>
  <h2>reactive的使用</h2>
  {{ user }}
  <h2>姓名:{{ user.name }}</h2>
  <h2>年龄:{{ user.age }}</h2>
  <h2>性别:{{ user.gender }}</h2>
  <h2>对象:{{ user.wife }}</h2>
  <button @click="updateUser">修改数据</button>
</template>
 
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // const obj: any = {
    const obj = {
      name: "xiaoming",
      age: 20,
      wife: {
        name: "xiaoxiao",
        age: 17,
        wife: "xiaoming",
      },
    };
    const user = reactive<any>(obj);
    console.log(user);

    const updateUser = () => {
      console.log("--");
      // obj.name = "xixi";
      // user.name = "mingming";
      // obj.gender = "nan";
      // user.gender = "nan";
      // user.gender = "nan";
      // delete obj.age;
      delete user.age;
    };
    return {
      user,
      updateUser,
    };
  },
});
</script>


