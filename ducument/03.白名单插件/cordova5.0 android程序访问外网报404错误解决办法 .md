    
    cd /cube-ui/app-demo
    cordova plugin add cordova-plugin-whitelist
    


白名单插件的使用方法
https://github.com/apache/cordova-plugin-whitelist

CSP 策略指令
https://developer.mozilla.org/zh-CN/docs/Web/Security/CSP/CSP_policy_directives

---

### cordova5.0 android程序访问外网报404错误解决办法

 
    在5.0以前，使用ajax jsonp跨域都没有遇到问题，但是5.0以后使用以前的代码就会报错。
    比如：

     $.ajax({
                type : "post",
                async : false,
                url : "http://192.168.1.99:8897/Home/Index/getToken",
                data: userInfo,
                cache : false, //默认值true
                dataType : "jsonp",
                jsonp: "jsoncallback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                success : function(data){
                    console.log("token获取成功 下一步开始自动连接:"+data.token);
                    RCPC_connect(data.token);
                },
                error:function(e){
                   var err= JSON.stringify(e);
                    alert("连接PHP服务器出现错误： "+ err);
                }
            });

    无论是在手机端还是在PC端调试，都会报错误：status：404
    调试发现是因为白名单没有设置好，才想到cordova5.0以后默认添加一个白名单插件（cordova-plugin-whitelist），一直没有研究过。

    解决办法 1（失败）：
    在网上找，发现有人遇到过类似问题。
    http://stackoverflow.com/questions/30060534/ajax-requests-fail-after-upgrading-to-cordova-5-0-cordova-android4-0

    于是在配置文件中添加：

    <allow-navigation href="*" />
    
    发现问题不能解决。

    解决办法 2：
    参考：https://github.com/apache/cordova-plugin-whitelist

    于是仔细查看了白名单插件的使用方法，发现可能是规则没有设置好。于是修改：

    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: 192.168.1.79:8897 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">

    后来发现以上只在google浏览器调试通过，手机端依然问题如故，于是再次修改：

    <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: 192.168.1.79:8897 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">

    问题解决。
    ---------------------
    作者：Unicorn_up
    来源：CSDN
    原文：https://blog.csdn.net/unicorn_up/article/details/47783767
    版权声明：本文为博主原创文章，转载请附上博文链接！