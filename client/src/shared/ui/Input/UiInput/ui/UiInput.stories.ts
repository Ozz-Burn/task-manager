import type { Meta, StoryObj } from '@storybook/vue3'
import UiInput from './UiInput.vue'

const meta = {
  title: 'Ui-Kit/UiInput',
  component: UiInput,

  parameters: {
    layout: 'centered'
  },

  argTypes: {
    label: {
      description: 'Input Label',
      control: 'text'
    },
    color: {
      description: 'подсветка инпута при валидации',
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'error']
    },
    modelValue: {
      control: 'text'
    }
  },

  args: {
    modelValue: ''
  },

  tags: ['autodocs']
} satisfies Meta<typeof UiInput>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {}

export const InputWithLabel: Story = {
  args: {
    label: 'ФИО'
  }
}

export const InputWithValue: Story = {
  args: {
    label: 'ФИО',
    modelValue: 'Иван Иванович Иванов'
  }
}

export const InputWithColor: Story = {
  args: {
    color: 'error'
  }
}
