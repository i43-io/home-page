<template>
<n-popconfirm :show-icon="false">
  <template #trigger>
    <a :style="{ color: themeVars.primaryColor }">{{version}}</a>
  </template>
  <div v-if="versionDetail.length > 0">
    <table>
      <tbody>
        <tr v-for="detail of versionDetail" :key="detail.name">
          <td class="name">{{detail.name}}:</td>
          <td class="value">{{detail.total}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <template #action>
    <a
      :style="{ color: themeVars.primaryColor }"
      :href="url"
      target="_blank"
    >Release notes</a>
  </template>
</n-popconfirm>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useThemeVars, NPopconfirm } from 'naive-ui'

import { teslafi } from '@/store/teslafi'

const props = defineProps({ version: String })
const themeVars = useThemeVars()

const url = `https://www.notateslaapp.com/software-updates/version/${props.version}/release-notes`
const versionDetail = computed(() => {
  if (teslafi.value) {
    const index = teslafi.value.vehicleVersion.categories.findIndex(v => v === props.version)
    if (index >= 0) {
      const ret = teslafi.value.vehicleVersion.series.map(({ name, data}) => ({ name, total: data[index] }))
      ret.push({ name: 'Total', total: ret.reduce((m, d) => m + d.total, 0) })
      return ret
    }
  }

  return []
})
</script>

<style scoped>
a {
  cursor: pointer;
}

.name {
  text-align: right;
}

.value {
  text-align: left;
}
</style>