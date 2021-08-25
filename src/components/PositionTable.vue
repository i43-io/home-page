<template>
  <n-data-table v-for="g in groupedPositions" :key="g.gropId" :row-class-name="getRowClassName" :columns="getPositionColumns(g)" :data="g.positions" :scroll-x="getScrollX()" />
</template>

<script setup>
import { h, computed } from 'vue'
import { NDataTable } from 'naive-ui'
import { positions } from '@/store/okex'

function getScrollX() {
  return window.innerWidth < 720 ? 720 : ''
}

function getRowClassName(row) {
  return row.upl > 0 ? 'red' : row.upl < 0 ? 'green' : ''
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
    align: 'right',
    render(row) {
      return h('span', (row.liqPx * 1).toFixed(4))
    }
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