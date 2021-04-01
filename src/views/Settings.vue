<template>
  <br/>
  <el-row :gutter="16">
    <el-col :xs="24" :md="6"><el-input v-model="apiKey" placeholder="apiKey" /></el-col>
    <el-col :xs="24" :md="6"><el-input v-model="apiSecret" placeholder="apiSecret" /></el-col>
    <el-col :xs="24" :md="6"><el-input v-model="passphrase" placeholder="passphrase" show-password /></el-col>
    <el-col :xs="24" :md="6"><el-button @click="save()">保存</el-button></el-col>
  </el-row>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const { apiKey, apiSecret, passphrase } = store.state.okex.api
    return reactive({
      apiKey, apiSecret, passphrase,
      async save() {
        const { apiKey, apiSecret, passphrase } = this
        if (apiKey && apiSecret && passphrase) await store.dispatch('okex/updateApiOpt', { apiKey, apiSecret, passphrase })
      }
    })
  }
})
</script>
