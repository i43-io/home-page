<template>
<a :style="{ color: themeVars.primaryColor }">{{version}}</a>
</template>

<script setup>
import { defineProps } from 'vue'
import { useThemeVars } from 'naive-ui'

const props = defineProps({ version: String })
const themeVars = useThemeVars()

console.log(props.version)
</script>