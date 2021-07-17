<template>
  <div class="body-container">
    <n-card title="资金" style="margin-bottom: 10px;">
      <account-table />
    </n-card>
    <n-card title="持仓" >
      <position-table />
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from 'naive-ui'

import AccountTable from '@/components/AccountTable.vue'
import PositionTable from '@/components/PositionTable.vue';
</script>