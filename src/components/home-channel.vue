<template>
  <div class="channel">
    <el-tabs v-model="activeName" class="demo-tabs" stretch>
      <el-tab-pane
        v-for="item in props.list"
        :key="item.id"
        :label="item.text"
        :name="item.id"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  list: Array,
});

const activeName = ref(0);

// const handleClick = (tab, event) => {
//   console.log(tab, event);
// };
</script>

<style>
.channel {
  margin: 0 2vw;
}
/* 标签栏下的灰线去除 */
.el-tabs__nav-wrap:after {
  background-color: #fff;
}
/* 设置active栏的颜色 */
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: #fb7299;
}
.el-tabs__active-bar {
  background-color: #fb7299;
}
/* 去除左右两边的按钮 */
/* .el-tabs__nav-prev,
.el-tabs__nav-next {
  display: none;
} */
</style>