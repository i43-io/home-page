<template>
  <tickers-table v-for="(tickers, coin) in usdtTickers" :key="coin" :data="tickers" />
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
