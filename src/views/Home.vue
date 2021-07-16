<template>
  <div class="body-container">
    <n-card title="密码计算器">
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
            <n-input placeholder="result" v-model:value="result" @focus="copyToClipboard" readonly ref="resultInput" />
          </n-form-item-gi>
          <n-form-item-gi label="长度">
            <n-input-number placeholder="长度" v-model:value="formValue.length" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </n-card>
  </div>
  </template>
  
  <script setup>
  import hashUtil from 'hash-util'
  import { ref, watch } from 'vue'
  import { NCard, NForm, NGrid, NFormItemGi, NSelect, NInput, NInputNumber } from 'naive-ui'
  
  function copyToClipboard() {
    if (result.value) {
      const input = resultInput.value.$el.querySelector('input')
      input.select()
      document.execCommand('copy')
    }
  }
  
  function toOptions(arr) {
    return arr.map(v => ({ label: v, value: v }))
  }
  
  const hashOptions = toOptions(['md5', 'sha256'])
  const formatOptions = toOptions(['base64', 'hex'])
  const processOptions = [{
    label: '过滤',
    value: 'filter'
  }, {
    label: '多轮',
    value: 'multiround'
  }, {
    label: '不处理',
    value: 'none'
  }]
  
  const resultInput = ref(null)
  const result = ref('')
  const formValue = ref({
    text: '',
    hash: 'md5',
    format: 'base64',
    process: 'none',
    length: 10
  })
  
  watch(formValue.value, ({ text, hash: hash, format, process, length }) => {
    let hashed = hashUtil[hash](text, format).substr(0, length)
    for (let cnt = 0; !/^[0-9A-Za-z]+$/.test(hashed) && cnt < 32; cnt++) {
      if (process === 'multiround') hashed = hashUtil[hash](hashed, format).substr(0, length)
      else if (process === 'filter') hashed = hashed.replace(/[+/=]/g, '').substr(0, length)
      else break;
    }
    result.value = hashed
  })
  </script>