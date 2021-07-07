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
import { h, ref, provide } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { NConfigProvider, NLayoutHeader, NMenu, NGlobalStyle, darkTheme } from 'naive-ui'

const route = useRoute()
const config = ref(localStorage['i43-config'] && JSON.parse(localStorage['i43-config']) || {
  okex: { apiKey: '', apiSecret: '', passphrase: '' },
  saved: false 
})
provide('config', config)

const navItems = [{
  key: '/',
  label: '首页'
}, {
  key: '/tools',
  label: '工具'
}, {
  key: '/settings',
  label: '设置'
}]

const renderNavItem = (option) => h(
  RouterLink,
  { to: option.key },
  { default: () => option.label }
)
</script>

<style lang="scss">
.body-container {
  padding: 10px 20px;
}
</style>