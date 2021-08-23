<template>
  <n-button :loading="loading" :disabled="loading" @click="onClick()">
    <slot />
  </n-button>  
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { NButton } from 'naive-ui'

const props = defineProps({ action: Function, init: Boolean })

const loading = ref(false)
async function onClick() {
  try {
    loading.value = true
    await props.action()
  } catch(e) {
    alert(e)
  } finally {
    loading.value = false
  }
}

if (props.init) onClick()
</script>