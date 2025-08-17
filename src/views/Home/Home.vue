<template>
  <div>
    <HomeChannel :list="list"></HomeChannel>
    <router-link to="/video">点我去视频详情页</router-link>
  </div>
</template>

<script setup>
import HomeChannel from "../../components/home-channel.vue";
import { ref } from "vue";
import axios from "axios";

// 获取首页频道栏数据
const list = ref([]);
axios({
  url: "/navList",
  method: "get",
}).then((res) => {
  console.log("请求channel数据", res.data);
  list.value = res.data.result;
});
</script>

<style>
</style>