import XMLHttpRequest from '../src/XMLHttpRequest'

let request
const testURL = 'http://qq.com'
const testMethod = 'GET'
const defaultRequsetArguments = {
  data: expect.any(String),
  header: expect.any(Object),
  method: expect.any(String),
  url: expect.any(String),
  success: expect.any(Function),
  fail: expect.any(Function),
  responseType: expect.any(String)
}

beforeEach(() => {
  request = jest.fn()

  global.wx = {
    request
  }
})


describe('XMLHttpRequest', () => {
  it('constructor return default properties', () => {
    const xhr = new XMLHttpRequest()
    expect(xhr.onreadystatechange).toBeNull()
    expect(xhr.readyState).toEqual(0)
    expect(xhr.response).toBeNull()
    expect(xhr.responseType).toEqual('')
    expect(xhr.responseXML).toBeNull()
    expect(xhr.status).toEqual(0)
    expect(xhr.statusText).toEqual('')
    expect(xhr.upload).toEqual(expect.any(Object))
    expect(xhr.withCredentials).toEqual(false)
    expect(request).toHaveBeenCalledTimes(0)
  })

  it('open() set "method" and "url"', () => {
    const xhr = new XMLHttpRequest()
    xhr.open(testMethod, testURL)
    xhr.send()
    expect(request).toHaveBeenCalledWith(Object.assign({}, defaultRequsetArguments, {
      method: testMethod,
      url: testURL
    }))
  })

  it('setRequestHeader() set header', () => {
    const xhr = new XMLHttpRequest()
    xhr.setRequestHeader('foo', 'bar')
    xhr.open(testMethod, testURL)
    xhr.send()
    expect(request).toHaveBeenCalledWith(Object.assign({}, defaultRequsetArguments, {
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认加上的 header
        foo: 'bar'
      }
    }))
  })

  it('send() with POST data', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', testURL)
    xhr.send('hello, world')
    expect(request).toHaveBeenCalledWith(Object.assign({}, defaultRequsetArguments, {
      method: 'POST',
      data: 'hello, world'
    }))
  })

  it('getResponseHeader() and getAllResponseHeaders()', (done) => {
    wx.request = jest.fn((args) => {
      args.success({
        header: {
          header1: 'value1',
          header2: 'value2'
        }
      })
    })

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
        expect(xhr.getAllResponseHeaders()).toEqual('header1: value1\nheader2: value2')
        expect(xhr.getResponseHeader('header1')).toEqual('value1')
        expect(xhr.getResponseHeader('header2')).toEqual('value2')
        done()
      }
    }
    xhr.open(testMethod, testURL)
    xhr.send()
  })

  it('get response', (done) => {
    wx.request = jest.fn((args) => {
      args.success({
        data: 'hello, world',
        statusCode: 200
      })
    })

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        expect(xhr.status).toEqual(200)
        expect(xhr.response).toEqual('hello, world')
        expect(xhr.responseText).toEqual('hello, world')
        done()
      }
    }
    xhr.open(testMethod, testURL)
    xhr.send()
  })

})
