import type { Meta, StoryObj } from '@storybook/vue3'
import UiLink from './UiLink.vue'

const meta = {
  title: 'Ui-Kit/UiLink',
  component: UiLink,

  parameters: {
    slots: {
      default: {
        description: 'Link label slot',
        template: '{{ args.default }}'
      }
    }
  },

  args: {
    default: 'home'
  }
} satisfies Meta<typeof UiLink>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {}
