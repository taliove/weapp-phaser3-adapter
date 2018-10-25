import localStorage from '../src/localStorage'

let getStorageSync, setStorageSync, removeStorageSync, getStorageInfoSync, clearStorageSync

beforeEach(() => {
  getStorageSync = setStorageSync = removeStorageSync = getStorageInfoSync = clearStorageSync = jest.fn()

  global.wx = {
    getStorageSync,
    setStorageSync,
    removeStorageSync,
    getStorageInfoSync,
    clearStorageSync
  }
})

describe('localStorage', () => {
  it('call getStorageInfoSync() with length', () => {
    wx.getStorageInfoSync = jest.fn(() => {
      return {
        keys: ['key0', 'key1', 'key2', 'key3', 'key4']
      }
    })

    expect(localStorage.length).toEqual(5)
    expect(wx.getStorageInfoSync).toHaveBeenCalledTimes(1)
  })

  it('call getStorageInfoSync() with key()', () => {
    wx.getStorageInfoSync = jest.fn(() => {
      return {
        keys: ['key0', 'key1', 'key2', 'key3', 'key4']
      }
    })
    expect(localStorage.key(0)).toEqual('key0')
    expect(localStorage.key(3)).toEqual('key3')
    expect(wx.getStorageInfoSync).toHaveBeenCalledTimes(2)
  })

  it('call wx.getStorageSync() with getItem()', () => {
    localStorage.getItem('key')
    expect(getStorageSync).toHaveBeenCalledTimes(1)
    expect(getStorageSync).toHaveBeenCalledWith('key')
  })

  it('call setStorageSync() with setItem()', () => {
    localStorage.setItem('key', 'value')
    expect(setStorageSync).toHaveBeenCalledWith('key', 'value')
  })

  it('call removeStorageSync() with removeItem()', () => {
    localStorage.removeItem('key')
    expect(removeStorageSync).toHaveBeenCalledWith('key')
  })

  it('call clearStorageInfoSync() with clear()', () => {
    localStorage.clear()
    expect(clearStorageSync).toHaveBeenCalledTimes(1)
  })

})
