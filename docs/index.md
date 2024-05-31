---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: SaleSmartly
  text: 内部一站式导航
  tagline: 基于 VitePress 的前端导航页面模板
  image:
    # 主页右侧logo背景图
    src: /background.svg
    # alt: 茂茂物语
  actions:
    # - text: 茂茂物语
    #   link: https://notes.fe-mm.com
    - text: 在线音乐播放器
      link: https://netease-music.fe-mm.com
      theme: alt
    - text: 快速开始
      link: /nav/
    # - text: 测试页
    #   link: /test
    #   theme: alt
features:
  - icon: 🚀
    title: Ss内部导航
    details: 一站式个人Ss内部导航页面
    link: /nav/
    linkText: 查看更多
  - icon: 🌐
    title: AdsPower - 指纹浏览器
    details: 世界第一的多帐户管理反检测浏览器
    link: https://www.adspower.com/
    linkText: 查看更多
  - icon: 🚀
    title: 内部知识库
    details: 钉钉内部知识库
    link: https://alidocs.dingtalk.com/i/spaces/apjG5kK26OQwKXkE/overview
    linkText: 查看更多
  - icon: 🌐
    title: SaleSmartly - 帮助中心
    details: 帮助中心
    link: https://help.salesmartly.com/
    linkText: 查看更多
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
