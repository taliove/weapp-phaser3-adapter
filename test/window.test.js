import { loadEnv } from './vm'
import * as window from '../src/window'

describe('window', () => {
  it('window properties', () => {
    expect(window).toMatchObject({
      WebSocket: expect.any(Function),
      document: expect.any(Object),
      devicePixelRatio: expect.any(Number),
      innerWidth: expect.any(Number),
      innerHeight: expect.any(Number),
      navigator: expect.any(Object),
      Image: expect.any(Function),
      Audio: expect.any(Function),
      //XMLHttpRequest: expect.any(Function),
      localStorage: expect.any(Object),
      location: expect.any(Object)
    })
  })
})
