import EventTarget from '../src/EventTarget'

describe('EventTarget', () => {
  it('addEventListener', () => {
    const target = new EventTarget()

    const listener = jest.fn()
    target.addEventListener('foo', listener)
    target.dispatchEvent({ type: 'foo' })
    expect(listener).toHaveBeenCalledTimes(1)
  })

  it('removeEventListener', () => {
    const target = new EventTarget()

    const listener = jest.fn()
    target.addEventListener('foo', listener)
    target.removeEventListener('foo', listener)
    target.dispatchEvent({ type: 'foo' })
    expect(listener).toHaveBeenCalledTimes(0)
  })
})
