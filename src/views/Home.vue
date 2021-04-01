<template>

  <el-row :gutter="16">
    <el-col :xs="24" :sm="12" :lg="8" v-for="(tickers, coin) in usdtTickers" :key="coin">
      <tickers-table :data="tickers" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex'

import TickersTable from '@/components/TickersTable.vue'

export default defineComponent({
  name: 'Home',
  components: { TickersTable },
  computed: { ...mapState('okex', ['usdTickers', 'usdtTickers']) }
});
</script>
