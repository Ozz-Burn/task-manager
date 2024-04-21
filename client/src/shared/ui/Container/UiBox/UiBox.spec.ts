import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiBox from './UiBox.vue'

describe('UiBox', () => {
  it('rendered', () => {
    const wrapper = mount(UiBox, {
      slots: {
        default: 'Default slot'
      }
    })
    expect(wrapper.text()).toBe('Default slot')
  })
})
