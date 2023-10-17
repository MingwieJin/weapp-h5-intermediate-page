# weapp-H5-intermediate-page

用于外部系统跳转微信小程序的h5中间页, 可灵活配置跳转目标

微信环境： 开放标签直接跳转目标小程序
非微信环境： urlscheme打开中转小程序，然后再靠小程序内跳转目标小程序（针对没有云环境的客户小程序，如果客户有云环境可以直接跳转）

### dev

开发文档请参考文档
[官方文档](https://developers.weixin.qq.com/minigame/dev/wxcloud/guide/staticstorage/jump-miniprogram.html)

[静态网站 H5 跳小程序指北](https://www.jianshu.com/p/56a241023ba3)


修改页面在index.html 修改完后上传使用微信开发者工具-云开发-更多-静态网站-上传文件-选择index.html

修改云函数是修改cloudfunctions/public下的index.js，修改完后上传使用微信开发者工具,右键public文件夹-上传并部署：云环境安装依赖（不上传 node_modules）


### 使用

参数配置

https://你的云环境.tcloudbaseapp.com/?path=中转小程序路径&appId=目标小程序id&appPath=目标小程序路径&productName=目标小程序名称&gh=目标小程序原始id

index.html 和 cloudfunctions/public/index.js 中 // <!-- replace --> 需要替换