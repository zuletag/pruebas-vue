import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('Carga correctamente', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.text()).toContain('Nosotros')
    expect(wrapper.text()).toContain('Bienvenidos')
  })
})

describe('AboutView.vue', () => {
  it('matches snapshot', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
