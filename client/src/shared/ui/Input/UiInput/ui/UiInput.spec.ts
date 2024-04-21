import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiInput from './UiInput.vue'

describe('UiInput', () => {
  it('rendered with label and text', async () => {
    const wrapper: any = mount(UiInput, {
      props: {
        label: 'test',
        modelValue: 'test text',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    expect(wrapper.find('span').text()).toBe('test')
    expect(wrapper.props('modelValue')).toBe('test text')
    await wrapper.find('input').setValue('another text')
    expect(wrapper.props('modelValue')).toBe('another text')
  })
})
