import type { Meta, StoryObj } from '@storybook/vue3'
import TheHeader from './TheHeader.vue'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Widgets/TheHeader',
  component: TheHeader,

  parameters: {
    layout: 'fullscreen'
  },

  tags: ['autodocs']
} satisfies Meta<typeof TheHeader>

export default meta

type Story = StoryObj<typeof meta>

export const SiteHeader: Story = {}

SiteHeader.decorators = [vueRouter()]
