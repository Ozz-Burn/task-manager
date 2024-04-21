import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiActionButton from './UiActionButton.vue'

describe('UiActionButton', () => {
  it('rendered with text', () => {
    const button = mount(UiActionButton, {
      slots: {
        default: 'click'
      }
    })

    expect(button.text()).toBe('click')
    expect(button.classes()).contain('filled')
  })

  it('rendered bordered type button', () => {
    const button = mount(UiActionButton, {
      props: {
        type: 'bordered'
      }
    })

    expect(button.classes()).contain('bordered')
  })

  it('rendered text type button', () => {
    const button = mount(UiActionButton, {
      props: {
        type: 'text'
      }
    })

    expect(button.classes()).contain('text')
  })
})
