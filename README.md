# 微信小游戏 phaser3 适配解决方案


## 使用方法

将文件`weapp-phaser3-adapter.js`拷贝至微信小程序目录，并在入口引用即可。

```javascript
import './js/libs/weapp-phaser3-adapter'
```

## 游戏配置

在初始化`phaser3`实例时，配置建议加上：

```javascript
let config = {};  // your config

if (window.canvas) {
    config.canvas = window.canvas;
}
```

## 资源的加载

在微信端使用时，注意文件的加载。如果资源在远端，则按如下方式指定远端地址：

```javascript
this.load.setBaseURL("http://your.domain.name");
```

@[taliove](http://www.taliove.com) 2018