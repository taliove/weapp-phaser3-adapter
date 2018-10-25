import { loadEnv } from './vm'
import HTMLElement from '../src/HTMLElement'

describe('HTMLElement', () => {
  it('return clientHeight', () => {
    const div = new HTMLElement('div')
    div.style.fontSize = '14px'
    expect(div.clientHeight).toEqual(14)
  })

  it('return clientWidth', () => {
    const div = new HTMLElement('div')
    div.style.fontSize = '14px'
    expect(div.clientWidth).toEqual(0)

    div.innerHTML = 'hello'
    expect(div.clientWidth).toEqual(70)
  })
})
