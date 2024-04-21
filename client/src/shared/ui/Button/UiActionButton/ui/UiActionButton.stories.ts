import type { Meta, StoryObj } from '@storybook/vue3'
import UiActionButton from './UiActionButton.vue'

const meta = {
  title: 'Ui-Kit/UiActionButton',
  component: UiActionButton,
  parameters: {
    slots: {
      default: {
        description: 'Button Label',
        template: '{{args.default}}'
      }
    },
    layout: 'centered'
  },

  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'warning', 'error'] },
    type: { control: 'select', options: ['filled', 'text', 'bordered'] }
  },
  args: {
    default: 'click on me'
  },
  tags: ['autodocs']
} satisfies Meta<typeof UiActionButton>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  args: {
    type: 'filled',
    color: 'primary'
  }
}

export const BorderedErrorButton: Story = {
  args: {
    type: 'bordered',
    color: 'error'
  }
}

export const TextSecondaryButton: Story = {
  args: {
    type: 'text',
    color: 'secondary'
  }
}
