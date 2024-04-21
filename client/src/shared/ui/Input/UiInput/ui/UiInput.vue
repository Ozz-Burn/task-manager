<template>
  <label class="relative ui-input border rounded-md px-4 py-2">
    <input class="focus-visible:outline-none peer" type="text" v-model="model" />
    <span
      class="absolute top-1/2 left-4 px-1 -translate-y-1/2 bg-bgcolor peer-focus:-translate-y-[125%] transition-all duration-150"
      :class="{ '-translate-y-[125%]': isActive }"
      >{{ props.label }}</span
    >
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { IProps } from '../model/types'
import { themeColors } from '@/shared/config'
const props = withDefaults(defineProps<IProps>(), {
  color: 'primary'
})

const color = computed<string>(() => themeColors[props.color])

const model = defineModel()

const isActive = computed<boolean>(() => !!model.value)
</script>

<style>
.ui-input {
  border-color: v-bind(color);
}
</style>
