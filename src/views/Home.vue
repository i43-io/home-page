<template>
  <br />
  <el-row>
    <el-col :xs="6" :sm="3">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{typeItems[type]}}：<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(c, idx) in typeItems" :key="c" @click="type = idx">{{c}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
    <el-col :xs="6" :sm="3">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{sortByItems[sortBy].text}}排序：<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(c, idx) in sortByItems" :key="c.text" @click="sortBy = idx">{{c.text}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
  <el-row :gutter="16">
    <el-col :xs="24" :sm="12" :lg="8" v-for="(tickers, coin) in getTickers()" :key="coin">
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
  computed: {
    ...mapState('okex', ['usdTickers', 'usdtTickers'])
  },
  methods: {
    getTickers() {
      const tickers = this.type === 0 ? this.usdTickers : this.usdtTickers
      const idx = this.sortByItems[this.sortBy].idx
      return Object.values(tickers).sort((a: any, b: any) => b[idx].diffRate - a[idx].diffRate)
    }
  },
  data() {
    return {
      type: 0,
      typeItems: ['USD', 'USDT'],
      sortBy: 0,
      sortByItems: [
        { idx: 1, text: '当周' },
        { idx: 2, text: '次周' }
      ]
    }
  }
});
</script>
