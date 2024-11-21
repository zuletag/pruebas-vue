import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue'

describe('ContactView.vue', () => {
  it('Carga correctamente', () => {
    const wrapper = mount(ContactView)
    expect(wrapper.text()).toContain('Contactanos')
    expect(wrapper.text()).toContain('Sientete libre de contactarnos')
  })
})
