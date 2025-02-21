var posts=["/p/roottool/index/","/p/hyperos_unlocktool/","/p/ycsj/index/","/p/Batch/index/","/p/刷机/xiaomi_usb/","/p/软件测试/jmeter/","/p/软件测试/loadrunner/","/p/刷机/adb_fastboot/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };