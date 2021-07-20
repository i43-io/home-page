<template>
  <div class="body-container">
    <n-card title="Teslafi固件数据">
      <teslafi-table />
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from 'naive-ui'
import TeslafiTable from '@/components/TeslafiTable.vue'
</script>