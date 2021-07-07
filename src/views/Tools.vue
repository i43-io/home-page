<template>
<div class="body-container">
  <n-form inline :model="formValue">
    <n-grid :cols="3" :x-gap="12">
      <n-form-item-gi :span="3" label="text">
        <n-input placeholder="text" v-model:value="formValue.text" />
      </n-form-item-gi>
      <n-form-item-gi label="hash method">
        <n-select :options="hashOptions" v-model:value="formValue.hash" />
      </n-form-item-gi>
      <n-form-item-gi label="format">
        <n-select :options="formatOptions" v-model:value="formValue.format" />
      </n-form-item-gi>
      <n-form-item-gi label="特殊字符">
        <n-select :options="processOptions" v-model:value="formValue.process" />
      </n-form-item-gi>
      <n-form-item-gi label="result" :span="2">
        <n-input placeholder="result" v-model:value="result" />
      </n-form-item-gi>
      <n-form-item-gi label="长度">
        <n-input-number placeholder="长度" v-model:value="formValue.length" />
      </n-form-item-gi>
    </n-grid>
  </n-form>
</div>
</template>

<script setup>
// import hash from 'hash-util'
import { ref, watch } from 'vue'
import { NForm, NGrid, NFormItemGi, NSelect, NInput, NInputNumber } from 'naive-ui'

const hashOptions = [{
  label: 'MD5',
  value: 'MD5'
}, {
  label: 'SHA256',
  value: 'SHA256'
}]

const formatOptions = [{
  label: 'base64',
  value: 'base64'
}, {
  label: 'hex',
  value: 'hex'
}]

const processOptions = [{
  label: '过滤',
  value: 'filter'
}, {
  label: '多轮',
  value: 'multiround'
}]

const result = ref('')
const formValue = ref({
  text: '',
  hash: 'MD5',
  format: 'base64',
  process: 'filter',
  length: 10
})

watch(formValue.value, ({ text, hash, format, process, length }) => {
  result.value = JSON.stringify({ text, hash, format, process, length })
})
</script>