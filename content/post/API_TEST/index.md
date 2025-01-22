---
title: loadrunner
description:
date: 2025-01-14
slug:  API_TEST
categories:
    - 软件测试
---



# 1.LoadRunner的概述

## LoadRunner是什么

### LoadRunner 是一款性能测试工具，主要用于评估系统在高负载条件下的性能表现。

### 它通过模拟大量虚拟用户并发访问系统，帮助测试人员发现并优化性能瓶颈，确保系统的稳定性和可靠性。

## LoadRunner的构成

### LoadRunner 由三个主要组件构成：

- Virtual User Generator (VUG) 用于录制和编辑测试脚本；
- Controller 用于设计测试场景、管理虚拟用户和监控测试过程；
- Analysis 用于分析测试结果并生成报告。

### 这些组件协同工作，使 LoadRunner 能够全面覆盖从脚本创建到结果分析的整个性能测试流程。

# 2.LoadRunner的使用

1. 录制回放

2. 思考时间

    `lr_think_time(7);`

3. 检查点  

   `web_reg_find("Text=个人中心",     LAST);`

   用于验证应用程序在特定操作后的响应是否符合预期。检查点可以帮助你确保应用程序在性能测试过程中不仅能够响应请求，而且响应的内容也是正确的。

4. 关联

   `web_reg_save_param_ex`函数

   关联是指在脚本回放过程中，动态地获取并使用服务器响应中的数据，以替换录制时的静态数据。这些动态数据通常包括会话标识符（如 `JSESSIONID`）、令牌（如 `CSRF Token`）、时间戳、用户生成的数据等。

5. 参数化

   参数化是指在脚本中使用变量来替换静态数据，使脚本能够模拟多个用户使用不同的数据进行操作，从而更真实地反映系统的性能表现。

   ![PixPin_2025-01-16_23-21-24](C:\Users\lican\Pictures\PixPin\Temp\PixPin_2025-01-16_23-21-24.png)

   ![PixPin_2025-01-16_23-22-26](C:\Users\lican\Pictures\PixPin\Temp\PixPin_2025-01-16_23-22-26.png)

   ![PixPin_2025-01-16_23-23-37](C:\Users\lican\Pictures\PixPin\Temp\PixPin_2025-01-16_23-23-37.png)

6. 事务与集合点

   **事务**：事务用于测量特定操作的性能，如登录、提交表单等。通过在脚本中插入事务开始和结束的标记，可以记录这些操作的响应时间。

   **集合点**：集合点用于模拟多个用户同时执行某个操作，以测试系统的并发处理能力。

7. 场景设计与运行

   场景设计是指在 Controller 中设置虚拟用户（VUsers）的数量、启动和停止策略、运行时的监控等，以模拟真实的用户负载。

   ## 设计方案：

   ![PixPin_2025-01-16_20-23-23](C:\Users\lican\Pictures\PixPin\Temp\PixPin_2025-01-16_20-23-23.png)

   - 初始化：

     ![PixPin_2025-01-16_20-20-52](D:\download\PixPin_2025-01-16_20-20-52.png)

     每2秒启动一个用户 共10个用户

   - 持续运行2分钟

   - 新增5个用户 直接启动

   - 持续运行2分钟

   - 停止5个用户 立即

   - 持续运行2分钟

   - 停止所有用户 每隔2秒停止1个用户

   ## 运行时

   ![PixPin_2025-01-16_20-30-15](C:\Users\lican\Pictures\PixPin\Temp\PixPin_2025-01-16_20-30-15.png)

8. 结果分析

   结果分析是指在测试完成后，通过分析生成的报告和图表，评估系统的性能表现，找出性能瓶颈和问题。
   
   ![](D:\download\PixPin_2025-01-17_17-24-47.png)
   
   
