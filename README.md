## Usage

#### 初始化项目

    cd /cube-ui-app-demo
    npm install

    cd /cube-ui-app-demo/vue_project
    npm install
    npm run dev 
    npm run build 


#### 开发流程

1.在vue_project目录里进行vue项目开发
    
     cd /cube-ui-app-demo/vue_project

     #开发调试网页时使用,修改vue工程并保存后,浏览器会自动刷新即时显示网页
     npm run dev 

2.在vue_project目录里,通过 npm run build 命令生成 phonegap 需要的app网站代码
(npm run build 生成的网页代码在这 cube-ui-app-demo/www )
    
     cd /cube-ui-app-demo/vue_project
     npm run build


3.再之后就是 phonegap 相关操作了。将 /cube-ui-app-demo/www 网页代码生成为各平台项目工程,存储在/cube-ui-app-demo/platforms 里

     cd /cube-ui-app-demo

     cordova platform add browser
     cordova run browser

     #生成 android 工程
     cordova platform add android
     cordova build android


#### 其他

项目开发过程中,笔记放在这里

    cd /cube-ui-app-demo/document

cube-ui 网址
https://didi.github.io/cube-ui/#/zh-CN

