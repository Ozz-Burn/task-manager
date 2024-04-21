<template>
  <ui-box>
    <header-links :links="links" />
  </ui-box>
</template>

<script lang="ts" setup>
import { UiBox } from '@/shared/ui'
import { HeaderLinks, type IHeaderLink } from '@/features/HeaderLink'

import { routes } from '@/app/providers/router/routes' //TODO Этого тут быть не должно по идее, разобраться как переделать
import { computed } from 'vue'

const links = computed<IHeaderLink[]>(() => routes.map(({ path, name }) => ({ path, name })))
</script>
