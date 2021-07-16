<template>
  <div class="body-container">
    <n-card title="API">
      <n-form :rules="rules" :model="config" ref="formRef">
        <n-grid cols="4 m:3 s:3 xs:1" responsive="screen" x-gap="12">
          <n-form-item-gi label="api key" path="okex.apiKey">
            <n-input placeholder="api key" v-model:value="config.okex.apiKey" />
          </n-form-item-gi>
          <n-form-item-gi label="api secret" path="okex.apiSecret">
            <n-input type="password" :show-password-toggle="true" placeholder="api secret" v-model:value="config.okex.apiSecret" />
          </n-form-item-gi>
          <n-form-item-gi label="passphrase" path="okex.passphrase">
            <n-input type="password" :show-password-toggle="true" placeholder="passphrase" v-model:value="config.okex.passphrase" />
          </n-form-item-gi>
          <n-form-item-gi>
            <n-button type="primary" @click="saveConfig">保存</n-button>
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </n-card>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { NCard, NForm, NGrid, NFormItemGi, NInput, NButton } from 'naive-ui'

const rules = {
  okex: {
    apiKey: { required: true, message: '请输入api key', trigger: 'blur' },
    apiSecret: { required: true, message: '请输入api secret', trigger: 'blur' },
    passphrase: { required: true, message: '请输入passphrase', trigger: 'blur' }
  }
}

const formRef = ref(null)
const config = inject('config', { okex: { apiKey: '', apiSecret: '', passphrase: '' }, saved: false })
function saveConfig() {
  formRef.value.validate(err => {
    if (!err) {
      config.value.saved = true
      localStorage['i43-config'] = JSON.stringify(config.value)
    }
  })
}
</script>
