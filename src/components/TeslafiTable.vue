<template>
<n-data-table
  v-if="data && data.latestUpdates"
  :columns="columns"
  :data="data.latestUpdates.versions"
  :scroll-x="getScrollX()"
/>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { NDataTable } from 'naive-ui'

const props = defineProps({ data: Object })

function getScrollX() {
  return window.innerWidth < 720 ? 720 : ''
}

const columns = computed(() => props.data && props.data.latestUpdates &&
  props.data.latestUpdates.head.map((title, key) => ({ title, key, fixed: key === 0 ? 'left' : undefined, align: 'center' })))
</script>