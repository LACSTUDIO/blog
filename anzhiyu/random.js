var posts=["/p/ycsj/index/","/p/Batch/index/","/p/HyperOS_UnlockTool/index/","/p/roottool/index/","/p/软件测试/jmeter/","/p/软件测试/loadrunner/","/p/刷机/xiaomi_usb/","/p/刷机/adb_fastboot/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };