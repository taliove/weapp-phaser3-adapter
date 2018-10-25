function loadEnv() {
  Object.assign(global, {
    requestAnimationFrame: jest.fn(),
    cancelAnimationFrame: jest.fn(),
    XMLHttpRequest: jest.fn(), // TODO 待替换成小程序封装的 XMLHttpRequest 后移除此全局变量
    WebSocket: jest.fn(), // TODO 待替换成小程序封装的 WebSocket 后移除此全局变量
    wx: require('./mock/wx_mock')
  })
  jest.resetModules()
}

loadEnv()

export {
  loadEnv
}
