var posts=["/p/HyperOS_UnlockTool/","/p/roottool/index/","/p/Batch/index/","/p/ycsj/index/","/p/软件测试/loadrunner/","/p/软件测试/jmeter/","/p/刷机/adb_fastboot/","/p/刷机/xiaomi_usb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };