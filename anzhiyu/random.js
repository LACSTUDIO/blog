var posts=["/p/Batch/index/","/p/hyperos_unlocktool/","/p/ycsj/index/","/p/软件测试/jmeter/","/p/刷机/xiaomi_usb/","/p/刷机/adb_fastboot/","/p/roottool/index/","/p/软件测试/loadrunner/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };