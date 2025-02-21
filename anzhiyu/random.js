var posts=["/p/roottool/index/","/p/Batch/index/","/p/刷机/adb_fastboot/","/p/HyperOS_UnlockTool/","/p/ycsj/index/","/p/刷机/xiaomi_usb/","/p/软件测试/jmeter/","/p/软件测试/loadrunner/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };