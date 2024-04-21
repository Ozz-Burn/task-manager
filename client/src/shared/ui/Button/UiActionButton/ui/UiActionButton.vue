<template>
  <button class="px-3 py-2 rounded-md" :class="type">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { IProps } from '../model/types'
import { themeColors } from '@/shared'

const props = withDefaults(defineProps<IProps>(), {
  type: 'filled',
  color: 'primary'
})

console.log(themeColors)

const color = computed<string>(() => themeColors[props.color])
</script>

<style lang="css">
.filled {
  background-color: v-bind(color);
}
.text {
  color: v-bind(color);
}
.bordered {
  border: 1px solid v-bind(color);
  color: v-bind(color);
}
.icon {
  background-color: v-bind(color);
}
</style>
