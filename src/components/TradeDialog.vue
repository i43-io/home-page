<template>
  <el-dialog
    :title="`交易 ${currentTickers && currentTickers[0] && currentTickers[0].instId.indexOf('USDT') > 0 ? 'USDT' : ''} ${currentTickers && currentTickers[0] && currentTickers[0].coin}`"
    v-model="show"
    :before-close="handleClose">
    <div v-if="currentTickers.length === 2 && currentTickers[1].bidPx - currentTickers[0].askPx > 0">
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
        <el-col :span="12"><el-input type="number" v-model="openAmt" placeholder="开仓量" /></el-col>
        <el-col :span="12"><el-button @click="open(openAmt)" :disabled="opening">开仓</el-button></el-col>
      </el-row>
      <br/>
    </div>

    <div v-for="pair in currentPositionPairs" :key="pair[0].instId + pair[1].instId">
      <span>预估强平价: {{(pair[0].liqPx * 1).toFixed(3)}} 保证金率: {{(pair[0].mgnRatio * 1).toFixed(1)}}%</span>
      <br/>
      <el-table :data="pair" :show-summary="true" :summary-method="({ data }) => [
        '',
        (data[0].askPx / data[1].bidPx * 100).toFixed(2) + '%',
        (data[0].avgPx / data[1].avgPx * 100).toFixed(2) + '%',
        '',
        (data[0].upl * 1 + data[1].upl * 1).toFixed(3)
      ]" >
        <el-table-column label="#" prop="dd" />
        <el-table-column label="价格">
          <template #default="scope">
            <span v-if="scope.$index === 0">{{scope.row.askPx}}</span>
            <span v-if="scope.$index === 1">{{scope.row.bidPx}}</span>
          </template>
        </el-table-column>
        <el-table-column label="开仓均价">
          <template #default="scope">
            <span>{{(scope.row.avgPx * 1).toFixed(3)}}</span>
          </template>
        </el-table-column>
        <el-table-column label="持仓" prop="availPos" />
        <el-table-column label="收益">
          <template #default="scope">
            <span :class="{ red: scope.row.upl > 0, green: scope.row.upl < 0 }">{{(scope.row.upl * 1).toFixed(3)}}</span>
          </template>
        </el-table-column>

      </el-table>
      <br />
      <el-row :gutter="16">
        <el-col :span="12"><el-input type="number" v-model="closeAmt" placeholder="平仓量" /></el-col>
        <el-col :span="12"><el-button @click="close(pair[0], pair[1], closeAmt)" :disabled="closing">平仓</el-button></el-col>
      </el-row>
      <br/>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions, useStore } from 'vuex'
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  computed: {
    ...mapState('okex', ['positisions', 'accounts']),
    ...mapGetters('okex', ['currentTickers', 'currentPositionPairs'])
  },
  methods: {
    ...mapActions('okex', ['batchOpen', 'batchClose']),
    async open(amount) {
      this.opening = true
      try {
        await this.batchOpen({ long: this.currentTickers[0].instId, short: this.currentTickers[1].instId, amount })
      } catch (e) {
        window.alert(e)
      }
      this.opening = false
    },
    async close(short, long, amount) {
      this.closing = true
      try {
        await this.batchClose({ short, long, amount })
      } catch (e) {
        window.alert(e)
      }
      this.closing = false
    }
  },
  setup() {
    const store = useStore()

    const show = ref(!!store.state.currentInstId)
    watch(() => store.state.currentInstId, instId => show.value = !!instId)

    return {
      openAmt: ref(0),
      opening: ref(false),
      closeAmt: ref(0),
      closing: ref(false),
      // handleClose: window.console.log,
      show
    }
  }
})
</script>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>