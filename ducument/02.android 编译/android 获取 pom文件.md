
Android Studio Gradle无法获取pom文件。

allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
    }
}

在Project的build.gradle里的allprojects里添加

maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
1
并点击 Gradle—>设置—>Android Studio，勾选 Enable embedded Maven repository
--------------------- 
作者：小鱼兒少女 
来源：CSDN 
原文：https://blog.csdn.net/arielcoder/article/details/80416402 
版权声明：本文为博主原创文章，转载请附上博文链接！
