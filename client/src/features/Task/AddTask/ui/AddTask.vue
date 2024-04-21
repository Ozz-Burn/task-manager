<template>
  <ui-action-button @click="addNewTask">Создать</ui-action-button>
</template>

<script lang="ts" setup>
import { UiActionButton } from '@/shared/ui/Button/UiActionButton'
import type { IProps } from '../model/types'
import { useAddTask } from '../model/task'

const taskAction = useAddTask()

const props = defineProps<IProps>()

const addNewTask = () => {
  taskAction.addTask(props.task)
}
</script>
