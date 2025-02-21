var posts=["/p/HyperOS_UnlockTool/index/","/p/roottool/index/","/p/Batch/index/","/p/ycsj/index/","/p/刷机/adb_fastboot/","/p/软件测试/jmeter/","/p/刷机/xiaomi_usb/","/p/软件测试/loadrunner/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };