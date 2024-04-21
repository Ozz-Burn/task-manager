import type { Meta, StoryObj } from '@storybook/vue3'
import UiBox from './UiBox.vue'

const meta = {
  title: 'Ui-Kit/UiBox',
  component: UiBox,
  parameters: {
    slots: {
      default: {
        description: 'Default slot',
        template: '{{ args.default }}'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    default: 'hello UiBox'
  }
} satisfies Meta<typeof UiBox>

export default meta

type Story = StoryObj<typeof meta>

export const BoxWithContent: Story = {}
