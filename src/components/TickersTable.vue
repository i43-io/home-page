<template>
  <el-table
    style="margin-top: 10px;"
    class="ticker-table"
    :data="data"
    :row-class-name="({ rowIndex }) => ({ futures: rowIndex > 0 })"
  >
    <el-table-column
      prop="dd"
      :label="data[0].coin"
    />
    <!-- <el-table-column label="PX">
      <template #default="scope"><i :class="{ red: scope.row.last > data[0].last, green: scope.row.last < data[0].last }">{{scope.row.last}}</i></template>
    </el-table-column> -->
    <el-table-column label="ASK">
      <template #default="scope"><i :class="{ red: scope.row.askPx < data[0].bidPx, green: scope.row.askPx > data[0].bidPx }">{{scope.row.askPx}}</i></template>
    </el-table-column>
    <el-table-column label="BID">
      <template #default="scope"><i :class="{ red: scope.row.bidPx > data[0].askPx, green: scope.row.bidPx < data[0].askPx }">{{scope.row.bidPx}}</i></template>
    </el-table-column>
    <!-- <el-table-column label="DIFF">
      <template #default="scope"><i :class="{ red: scope.row.diff > 0, green: scope.row.diff < 0 }">{{scope.row.diff && scope.row.diff.toFixed(3)}}</i></template>
    </el-table-column> -->
    <el-table-column label="%">
      <template #default="scope"><i :class="{ red: scope.row.diff > 0, green: scope.row.diff < 0 }">{{scope.row.diffRate && (scope.row.diffRate * 100).toFixed(2) + '%'}}</i></template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: Object
  }
})
</script>

<style scoped>
.futures .red {
  color: red;
}

.futures .green {
  color: green;
}
</style>