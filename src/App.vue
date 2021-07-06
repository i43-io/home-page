<template>
<n-config-provider :theme="darkTheme">
  <n-layout-header bordered>
    <n-menu
      mode="horizontal"
      :value="route.path"
      :options="navItems"
      :render-label="renderNavItem"
    />
  </n-layout-header>
  <router-view />
  <n-global-style />
</n-config-provider>
</template>

<script setup>
import { h } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { NConfigProvider, NText, NLayoutHeader, NMenu, NGlobalStyle, darkTheme } from 'naive-ui'

const route = useRoute()

const navItems = [{
  key: '/',
  label: '首页'
},{
  key: '/settings',
  label: '设置'
}]

const renderNavItem = (option) => h(
  RouterLink,
  { to: option.key },
  { default: () => option.label }
)
</script>