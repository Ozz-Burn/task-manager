import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TaskCard from './TaskCard.vue'

describe('TaskCard', () => {
  it('taskCard rendered with props', () => {
    const taskCard = mount(TaskCard, {
      props: {
        task: {
          id: 1,
          title: 'test task',
          description: 'descriotion',
          status: 'created'
        }
      }
    })

    expect(taskCard.find('h3').text()).toBe('test task')
    expect(taskCard.find('p').text()).toBe('descriotion')
    expect(taskCard.props().task.status).toBe('created')
  })
})
