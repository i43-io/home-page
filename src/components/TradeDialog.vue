<template>
  <el-dialog
    title="交易"
    v-model="currentInstId"
    :before-close="handleClose">

    <div v-if="currentTickers.length > 0 && currentTickers[1].bidPx - currentTickers[0].askPx > 0">
      <el-table :data="currentTickers">
        <el-table-column label="#" prop="dd" />
        <el-table-column label="价格">
          <template #default="scope">
            <span v-if="scope.$index === 0">{{scope.row.askPx}}</span>
            <span v-if="scope.$index === 1" class="red">{{scope.row.bidPx}}</span>
          </template>
        </el-table-column>
        <el-table-column label="%">
          <template #default="scope">
            <i v-if="scope.$index === 1" class="red">{{((currentTickers[0].diffRate || currentTickers[1].diffRate) * 100).toFixed(2)}}%</i>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <el-row :gutter="16">
        <el-col :span="12"><el-input type="number" placeholder="开仓量" /></el-col>
        <el-col :span="12"><el-button>开仓</el-button></el-col>
      </el-row>
      <br/>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { mapState, mapGetters, useStore } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    ...mapState('okex', ['positisions', 'accounts']),
    ...mapGetters('okex', ['currentTickers'])
  },
  setup() {
    const store = useStore()

    return {
      handleClose: window.console.log,
      currentInstId: store.state.currentInstId
    }
  }
})
</script>

<style scoped>
.red {
  color: red;
}
</style>