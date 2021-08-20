<template>
  <div class="body-container">
    <n-card title="Teslafi固件数据">
      <template #header-extra>
        <promise-button :action="updateData">刷新</promise-button>
      </template>
      <teslafi-table />
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from 'naive-ui'

import { updateData } from '@/store/teslafi'

import TeslafiTable from '@/components/TeslafiTable.vue'
import PromiseButton from '@/components/PromiseButton.vue'
</script>