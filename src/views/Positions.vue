<template>
  <div class="body-container">
    <n-card title="资金">
      <n-data-table :columns="accountsColumns" :summary="accountsSummary" :data="accounts" scroll-x></n-data-table>
    </n-card>
    <br/>
    <n-card title="持仓">

    </n-card>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { NCard, NDataTable } from 'naive-ui'

import { accounts } from '@/store/okex'

const accountsColumns = [{
  title: 'CCY',
  key: 'ccy',
  fixed: 'left'
}, {
  title: '权益',
  key: 'eq',
  render(row) {
    return h('span', (row.eq * 1).toFixed(4))
  }
}, {
  title: '收益',
  key: 'upl',
  render(row) {
    return h('span', (row.upl * 1).toFixed(4))
  }
}, {
  title: '可用',
  key: 'availEq'
}, {
  title: '使用率',
  key: 'availEq',
  render(row) {
    return h('span', ((1 - row.availEq / row.eq) * 100).toFixed(2) + '%')
  }
}, {
  title: '$',
  key: 'eqUsd',
  render(row) {
    return h('span', (row.eqUsd * 1).toFixed(4))
  }
}]

function accountsSummary(accounts) {
  return {
    ccy: { value: '总计', colSpan: 5 },
    eqUsd: { value: accounts.reduce((t, acc) => t + acc.eqUsd * 1 , 0).toFixed(4) }
  }
}
</script>