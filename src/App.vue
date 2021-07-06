<template>
<n-config-provider :theme="darkTheme">
  <router-view />
  <n-global-style />
</n-config-provider>
</template>

<script setup>
import { NGlobalStyle, NConfigProvider, darkTheme } from 'naive-ui'
</script>