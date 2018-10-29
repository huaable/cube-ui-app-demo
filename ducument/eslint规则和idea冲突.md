使用vue创建工程时，在vue页面里，用到script时，idea默认会缩进两个空格，而eslint校验时期望，script下的首行不要缩进。 
因此会提示如下报错：

expected indentation of 0 spaces but found 2 . 
1
解决办法： 
1、不校验缩进，在rule里增加如下规则：

'rules': {
    'indent': 'off'
  }
--------------------- 
作者：周二也被占用 
来源：CSDN 
原文：https://blog.csdn.net/u011350541/article/details/81049761 
版权声明：本文为博主原创文章，转载请附上博文链接！


config/index.js

修改

    useEslint: false,
