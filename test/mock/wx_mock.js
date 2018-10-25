import Audio from './Audio_mock'
import Image from './Image_mock'
import Canvas from './Canvas_mock'

const wx = {
  getSystemInfoSync() {
    return {
      screenWidth: 300,
      screenHeight: 600,
      devicePixelRatio: 2
    }
  },
  createCanvas() {
    return new Canvas()
  },
  createImage() {
    return new Image()
  },
  createAudio() {
    return new Audio()
  },
  createInnerAudioContext() {
    return new Audio()
  },
  onTouchStart(callback) {
  },
  offTouchStart() {
  },
  onTouchMove(callback) {
  },
  offTouchMove() {
  },
  onTouchEnd(callback) {
  },
  offTouchEnd() {
  },
  onTouchCancel(callback) {
  },
  offTouchCancel() {
  },
  getStorageInfoSync() {
    return {
      keys: []
    }
  },
  getPerformance() {
    return {
    }
  }
}

module.exports = wx
