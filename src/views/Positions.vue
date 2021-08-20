<template>
  <div class="body-container">
    <n-card title="资金" style="margin-bottom: 10px;">
      <template #header-extra>
        <promise-button :action="updateAccount">刷新</promise-button>
      </template>
      <account-table />
    </n-card>
    <n-card title="持仓" >
      <position-table />
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from 'naive-ui'

import { updateAccount } from '@/store/okex'

import AccountTable from '@/components/AccountTable.vue'
import PositionTable from '@/components/PositionTable.vue'
import PromiseButton from '@/components/PromiseButton.vue'
</script>