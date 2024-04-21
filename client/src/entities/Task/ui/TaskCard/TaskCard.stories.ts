import type { Meta, StoryObj } from '@storybook/vue3'
import TaskCard from './TaskCard.vue'

const meta = {
  title: 'Entities/TaskCard',
  component: TaskCard,

  // разобраться со сложными пропсами
  //   argTypes: {
  //     task: {
  //       control: {
  //         type: 'object',
  //         id: 1,
  //         title: {
  //           control: 'text',
  //           description: 'Название задачи'
  //         },
  //         description: {
  //           control: 'text',
  //           description: 'Описание задачи'
  //         },
  //         status: {
  //           control: 'text',
  //           description: 'Статус задачи'
  //         }
  //       }
  //     }
  //   },

  args: {
    task: {
      id: 1,
      title: 'task 1',
      description:
        'lLorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eveniet possimus distinctio libero consequuntur voluptatum, sit doloribus ratione, perspiciatis temporibus molestias officiis illo quo at voluptatem? Adipisci necessitatibus consequuntur debitis!',
      status: 'created'
    }
  },

  tags: ['autodocs']
} satisfies Meta<typeof TaskCard>

export default meta

type Story = StoryObj<typeof meta>

export const SimpleTaskCard: Story = {}
