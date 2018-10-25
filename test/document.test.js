import { loadEnv } from './vm'
import document from '../src/document'

describe('document', () => {
  it('document prperties', () => {
    expect(document).toMatchObject({
      readyState: expect.any(String),
      visibilityState: expect.any(String),
      hidden: expect.any(Boolean),
      documentElement: expect.any(Object),
      location: expect.any(Object)
    })
  })

  it('addEventListener', () => {
    document.addEventListener('touchstart', () => {
    })
  })
})
