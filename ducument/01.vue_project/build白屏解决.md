
1.npm run build打包页面空白
我们会发现页面head中引用的js和css文件是出现了路径错误，这里修改如下：

解决位置：config/index.js文件：把assetsPublicPath: '/'改为assetsPublicPath: './'

build: {assetsPublicPath:'./',}

作者：Q_骑猪看夕阳
链接：https://www.jianshu.com/p/7220afab4f73
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
