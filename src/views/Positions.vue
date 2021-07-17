<template>
  <div class="body-container">
    <n-card title="资金" style="margin-bottom: 10px;">
      <n-data-table :columns="accountsColumns" :summary="accountsSummary" :data="accounts" :row-class-name="getRowClassName" />
    </n-card>
    <n-card title="持仓" >
      <n-data-table v-for="g in groupedPositions" :key="g.gropId" :row-class-name="getRowClassName" :columns="getPositionColumns(g)" :data="g.positions" />
    </n-card>
  </div>
</template>

<script setup>
import { h, computed } from 'vue'
import { NCard, NDataTable } from 'naive-ui'

import { accounts, positions} from '@/store/okex'

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
    ccy: { value: '总计', colSpan: 5 },
    eqUsd: { value: accounts.reduce((t, acc) => t + acc.eqUsd * 1 , 0).toFixed(4) }
  }
}

const groupedPositions = computed(() => positions.value.reduce((g, p) => {
  const groupId = /[A-Z]+-[A-Z]+/g.exec(p.instId)[0]
  let group = g.find(v => v.groupId === groupId)
  if (!group) {
    g.push({ groupId, positions: [p] })
  } else {
    group.positions.push(p)
  }

  return g
}, []))

function getPositionColumns({ groupId }) {
  return [{
    title: groupId,
    key: 'instId',
    fixed: 'left'
  }, {
    title: '方向',
    key: 'posSide'
  }, {
    title: '持仓量',
    key: 'pos',
    align: 'right'
  }, {
    title: '持仓量(A)',
    key: 'availPos',
    align: 'right'
  }, {
    title: '杠杆',
    key: 'lever',
    align: 'right'
  }, {
    title: '开仓均价',
    key: 'avgPx',
    align: 'right',
    render(row) {
      return h('span', (row.avgPx * 1).toFixed(4))
    }
  }, {
    title: '盈亏',
    key: 'upl',
    align: 'right',
    className: 'upl',
    render(row) {
      return h('span', (row.upl * 1).toFixed(4))
    }
  }, {
    title: '强平价',
    key: 'liqPx',
    align: 'right'
  }]
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