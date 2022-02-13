<template>
<n-data-table
  v-if="teslafi && teslafi.latestUpdates"
  :columns="columns"
  :data="teslafi.latestUpdates.versions"
  :scroll-x="getScrollX()"
/>
</template>

<script setup>
import { computed, h } from 'vue'
import { NDataTable } from 'naive-ui'

import { teslafi } from '@/store/teslafi'
import TeslafiVersionDetails from './TeslafiVersionDetails.vue'

function getScrollX() {
  return window.innerWidth < 720 ? 760 : ''
}

const columns = computed(() =>
  teslafi.value && teslafi.value.latestUpdates &&
  teslafi.value.latestUpdates.head.map((title, key) =>
    key !== 1 ?
    { title: title || '⇩', key, align: 'center' } :
    {
      title, key, fixed: 'left', align: 'center',
      render(row) {
        return h(TeslafiVersionDetails, { version: row[1] })
      }
    }
  )
)
</script>