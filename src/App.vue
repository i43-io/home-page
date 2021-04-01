<template>
  <el-menu
    mode="horizontal"
    :default-active="$route.matched.length > 0 && $route.matched[0].path"
    :router=true
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/settings">设置</el-menu-item>
  </el-menu>
  <router-view />
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>
