<template>
  <ui-box>
    <h3>{{ props.task.title }}</h3>
    <p>
      {{ props.task.description }}
    </p>
  </ui-box>
</template>

<script lang="ts" setup>
import { UiBox } from '@/shared/ui/Container/UiBox'
import type { IProps } from '../../model/types'

const props = defineProps<IProps>()
</script>
