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
import { NDataTable, useThemeVars } from 'naive-ui'

import { teslafi } from '@/store/teslafi'

const themeVars = useThemeVars()
themeVars.value // weired

function getScrollX() {
  return window.innerWidth < 720 ? 720 : ''
}

const columns = computed(() =>
  teslafi.value && teslafi.value.latestUpdates &&
  teslafi.value.latestUpdates.head.map((title, key) =>
    key !== 0 ?
    { title, key, align: 'center' } :
    {
      title, key, fixed: 'left', align: 'center',
      render(row) {
        return h(
          'A',
          {
            target: '_blank',
            href: `https://www.notateslaapp.com/software-updates/version/2021.24.3/release-notes`
          },
          { default: () => row[0] }
        )
      }
    }
  )
)
</script>

<style scoped>
::v-deep a {
  color: v-bind(themeVars.primaryColor);
}
</style>