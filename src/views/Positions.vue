<template>
  <el-button style="margin-top: 10px;" :loading="loading" @click="updateAccount">更新</el-button>
  <el-table
    style="margin-top: 10px;"
    :data="[...Object.values(accounts.details || {}), { ccy: '总计', disEq: accounts.totalEq }]"
  >
    <el-table-column
      prop="ccy"
      label="$"
    />

    <el-table-column
      prop="eq"
      :formatter="(a, b, v) => v && (v * 1).toFixed(4)"
      label="权益"
    />

    <el-table-column
      prop="upl"
      :formatter="(a, b, v) => v && (v * 1).toFixed(4)"
      label="收益"
    />

    <el-table-column
      prop="availEq"
      :formatter="(a, b, v) => v && (v * 1).toFixed(4)"
      label="可用"
    />

    <el-table-column
      :formatter="row => row.availEq && (100 - row.availEq / row.eq * 100).toFixed(2) + '%'"
      label="使用率"
    />

    <el-table-column
      prop="disEq"
      :formatter="(a, b, v) => v && (v * 1).toFixed(4)"
      label="$"
    />
  </el-table>

  <el-table
    style="margin-top: 10px;"
    v-for="(pos, group) in positions"
    :key="group"
    :data="pos"
    :cell-class-name="({row, column}) => column.className && (row.upl > 0 ? 'red' : row.upl < 0 ? 'green' : '')"
  >
    <el-table-column
      prop="instId"
      :label="group"
      :formatter="row => row.instId.replace(group + '-', '')"
    />

    <el-table-column
      prop="posSide"
      label="方向"
    />

    <el-table-column
      prop="availPos"
      label="持仓量"
    />

    <el-table-column
      prop="lever"
      label="杠杆"
    />

    <el-table-column
      prop="avgPx"
      label="开仓均价"
      :formatter="row => (row.avgPx * 1).toFixed(4)"
    />

    <el-table-column
      prop="upl"
      class-name="upl"
      label="盈亏"
      :formatter="row => (row.upl * 1).toFixed(4)"
    />

    <el-table-column
      prop="liqPx"
      label="强平价"
    />
  </el-table>
</template>

<script lang="ts">
import store from '@/store'
import { defineComponent, ref } from 'vue'
import { mapState, mapGetters } from 'vuex'

export default defineComponent({
  computed: {
    ...mapGetters('okex', ['positions']),
    ...mapState('okex', ['accounts'])
  },
  setup() {
    const loading = ref(false)

    const updateAccount = async () => {
      loading.value = true
      await store.dispatch('okex/updateAccount').catch(console.error)
      loading.value = false
    }

    return { loading, updateAccount }
  }
})
</script>

<style scoped>
:deep(.green) {
  color: green;
}

:deep(.red) {
  color: red;
}
</style>
