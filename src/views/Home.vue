<template>
  <div class="body-container">
    <n-card title="Teslafi固件数据">
      <teslafi-table :data="teslafi" />
    </n-card>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { NCard } from 'naive-ui'
import TeslafiTable from '@/components/TeslafiTable.vue'

const teslafi = ref()
async function updateData() {
  const { data } = await axios.get('https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod/teslafi')
  teslafi.value = data
}
updateData()
</script>