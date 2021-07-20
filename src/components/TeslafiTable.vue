<template>
<n-data-table
  v-if="teslafi && teslafi.latestUpdates"
  :columns="columns"
  :data="teslafi.latestUpdates.versions"
  :scroll-x="getScrollX()"
/>
</template>

<script setup>
import { computed } from 'vue'
import { NDataTable } from 'naive-ui'

import { teslafi } from '@/store/teslafi'

function getScrollX() {
  return window.innerWidth < 720 ? 720 : ''
}

const columns = computed(() => teslafi.value && teslafi.value.latestUpdates &&
  teslafi.value.latestUpdates.head.map((title, key) => ({ title, key, fixed: key === 0 ? 'left' : undefined, align: 'center' })))
</script>