<template>
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
import { defineComponent } from 'vue';
import { mapState, mapGetters } from 'vuex'

export default defineComponent({
  computed: {
    ...mapGetters('okex', ['positions']),
    ...mapState('okex', ['accounts'])
  },
  setup() {
    return {};
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
