var posts=["/p/Batch/index/","/p/HyperOS_UnlockTool/index/","/p/刷机/adb_fastboot/","/p/ycsj/index/","/p/roottool/index/","/p/刷机/xiaomi_usb/","/p/软件测试/jmeter/","/p/软件测试/loadrunner/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };