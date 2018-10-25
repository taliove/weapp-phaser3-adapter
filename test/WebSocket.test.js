import WebSocket from '../src/WebSocket'

let connectSocket, onOpen, onClose, onMessage, onError

beforeEach(() => {
  onOpen = jest.fn()
  onClose = jest.fn()
  onMessage = jest.fn()
  onError = jest.fn()
  connectSocket = jest.fn(() => {
    return {
      onOpen,
      onClose,
      onMessage,
      onError
    }
  })

  global.wx = {
    connectSocket
  }
})

describe('WebSocket', () => {
  it('constructor check invalid url', () => {
    expect(() => {
      const ws = new WebSocket()
    }).toThrow()

    expect(() => {
      const ws = new WebSocket('http://foo.bar')
    }).toThrow()
  })

  it('contructor basic', () => {
    const url = 'wss://foo.bar'
    const ws = new WebSocket(url)

    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onMessage).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(connectSocket).toBeCalledWith({
      url,
      protocols: []
    })
  })
})
