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
import { h, ref, provide, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { NConfigProvider, NLayoutHeader, NMenu, NGlobalStyle, darkTheme } from 'naive-ui'

import config from '@/store/config'

const route = useRoute()
provide('config', config)

const navItems = computed(() =>[{
  key: '/',
  label: '工具'
}, {
  key: '/positions',
  label: '持仓',
  required: () => config.value.saved
}, {
  key: '/settings',
  label: '设置'
}].filter(i => !i.required || i.required()))

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