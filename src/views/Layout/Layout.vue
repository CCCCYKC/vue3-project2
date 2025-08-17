<template>
  <div>
    <!-- 顶部搜索栏--搜索、登录头像 -->
    <div class="header">
      <div class="item logo">
        <i class="iconfont Navbar_logo"></i>
      </div>
      <div class="item search">
        <input v-model="searchInput" placeholder="请输入搜索内容" />
        <span class="iconfont ic_search_tab"></span>
      </div>
      <div class="item avator">
        <img src="../../assets/images/login.png" alt="未登录头像" />
      </div>
      <div class="item btn">
        <el-button color="#fb7299" class="down-btn">下载 App</el-button>
      </div>
    </div>
    <!-- 页面 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// 初始化输入框的绑定值
let searchInput = ref('')
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  .item {
    margin: 1vh 1vw;
  }
  .logo {
    color: #fb7299;
    i{
      font-size: 7.46667vw;
    }
  }
  .search {
    display: flex;
    align-items: center;
    input {
      width: 35vw;
      margin: 0 1vw;
      padding: 0.8vh 2vw;
      border: #f1f2f3 0.5vw solid;
      border-radius: 4vw;
    }
    span {
      width: 5vw;
      font-size: 5vw;
      color: #cdcdce;
    }
  }
  .avator {
    img {
      width: 10vw;
      height: 10vw;
    }
  }
  .btn {
    .down-btn {
      padding: 1vh 3vw;
      color: #fff;
    }
  }
}
</style>