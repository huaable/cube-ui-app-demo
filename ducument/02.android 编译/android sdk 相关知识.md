### android sdk 相关支持
    sdk http proxy 镜像地址
    mirrors.neusoft.edu.cn:80
    
    镜像相关的地址XML文件：具体名字打开镜像网站去看目录列表。
        http://mirrors.neusoft.edu.cn/android/repository/addon.xml 
        http://mirrors.neusoft.edu.cn/android/repository/sys-img/android/sys-img.xml 

    
Android Studio sdk管理器中 点击 show Packpage Details 显示sdk组件
等待网络更新列表,点击下载需要用的组件 

也可以自己到镜像站直接下载放到 sdk 目录里对应位置 
    
        http://mirrors.neusoft.edu.cn/android/repository/

下载资源放到哪个位置，可以到这里看说明，也可以上网搜索提问。

 
    下载
    http://mirrors.neusoft.edu.cn/android/repository/sys-img/android/x86_64-23_r10.zip
    http://mirrors.neusoft.edu.cn/android/repository/sys-img/android/x86-23_r10.zip
     解压放到这里(mac os演示，仅做参考，放到自己的sdk目录里)
    /Users/xiaohua/Library/Android/sdk/system-images/android-23/android/

    下载
    http://mirrors.neusoft.edu.cn/android/repository/platform-23_r03.zip
     解压放到这里(mac os演示，仅做参考，放到自己的sdk目录里)
    /Users/xiaohua/Library/Android/sdk/platforms/
    
    
    下载  
    打开网址
    http://mirrors.neusoft.edu.cn/android/repository
    根据文件后缀名，下载适合自己电脑操作系统对应的工具
    tools 
    build-tools
    platform-tools
    
    例如 mac ox 下载
    http://mirrors.neusoft.edu.cn/android/repository/tools_r25.2.5-macosx.zip
    http://mirrors.neusoft.edu.cn/android/repository/build-tools_r27.0.3-macosx.zip
    http://mirrors.neusoft.edu.cn/android/repository/platform-tools_r23.1_rc1-macosx.zip
    解压放到这里(mac os演示，具体按照自己的sdk目录进行)
    /Users/xiaohua/Library/Android/sdk/
    

我的sdk 目录下有这些文件夹。
我下载了 tools build-tools platforms system-images 目录的需要的相关文件
    
    sdk/extras
    sdk/build-tools	
    sdk/licenses	
    sdk/add-ons
    sdk/platforms
    sdk/system-images
    sdk/tools

最后

    cordova build android 
    
可能过程中会提示你(具体按照报错信息修改。重新build)

sdk/platforms 里的文件名要修改成 android-23 形式

sdk/system-images/android-23/android 的文件名要修改成 default 

其他sdk参考资料

http://www.androiddevtools.cn/#

