var posts=["/p/HyperOS_UnlockTool/index/","/p/Batch/index/","/p/软件测试/jmeter/","/p/roottool/index/","/p/刷机/adb_fastboot/","/p/软件测试/loadrunner/","/p/ycsj/index/","/p/刷机/xiaomi_usb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };