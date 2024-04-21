import type { Meta, StoryObj } from '@storybook/vue3'
import HeaderLinks from './HeaderLinks.vue'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Features/HeaderLinks',
  component: HeaderLinks,

  args: {
    links: [
      {
        path: '/',
        name: 'Главная'
      },
      {
        path: '/about',
        name: 'О Компании'
      }
    ]
  },

  tags: ['autodocs']
} satisfies Meta<typeof HeaderLinks>

export default meta

type Story = StoryObj<typeof meta>

export const LinksList: Story = {}

LinksList.decorators = [vueRouter()]

