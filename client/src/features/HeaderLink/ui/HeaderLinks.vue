<template>
  <router-link class="px-3" v-for="(link, index) of props.links" :to="link.path" :key="index">
    <ui-link>{{ link.name }}</ui-link>
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { UiLink } from '@/shared/ui'
import type { IProps } from '../model/types'

const props = defineProps<IProps>()
</script>

<style>
.router-link-active > a {
  border-bottom: 1px solid theme('colors.primary');
}
</style>
