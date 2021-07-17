<template>
  <n-data-table :columns="accountsColumns" :summary="accountsSummary" :data="accounts" :row-class-name="getRowClassName" :scroll-x="getScrollX()" />
</template>

<script setup>
import { h } from 'vue'
import { NDataTable } from 'naive-ui'
import { accounts } from '@/store/okex'

function getScrollX() {
  return window.innerWidth < 600 ? 600 : ''
}

function getRowClassName(row) {
  return row.upl > 0 ? 'red' : row.upl < 0 ? 'green' : ''
}

const accountsColumns = [{
  title: 'CCY',
  key: 'ccy',
  fixed: 'left'
}, {
  title: '权益',
  key: 'eq',
  align: 'right',
  render(row) {
    return h('span', (row.eq * 1).toFixed(4))
  }
}, {
  title: '收益',
  key: 'upl',
  align: 'right',
  className: 'upl',
  render(row) {
    return h('span', (row.upl * 1).toFixed(4))
  }
}, {
  title: '可用',
  key: 'availEq',
  align: 'right',
  render(row) {
    return h('span', (row.availEq * 1).toFixed(4))
  }
}, {
  title: '使用率',
  key: 'availEq',
  align: 'right',
  render(row) {
    return h('span', ((1 - row.availEq / row.eq) * 100).toFixed(2) + '%')
  }
}, {
  title: '$',
  key: 'eqUsd',
  align: 'right',
  render(row) {
    return h('span', (row.eqUsd * 1).toFixed(4))
  }
}]

function accountsSummary(accounts) {
  return {
    ccy: { value: '总计' },
    eq: { value: accounts.reduce((t, acc) => t + acc.eqUsd * 1 , 0).toFixed(4), colSpan: 5 }
  }
}
</script>

<style scoped>
::v-deep(.red .upl) {
  color: red;
}

::v-deep(.green .upl) {
  color: green;
}
</style>