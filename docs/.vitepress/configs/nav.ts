import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  //导航栏下拉菜单 
  {
    text: '家', items: [
      { text: '首页', link: '/' },
      { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/docs/zh/index.md' },
      { text: '关于我们', link: 'https://github.com/666seasir666' },
      { text: 'DEMO网站', link: 'https://soybean-admin.netlify.app/' },
    ]
  },
  {
    text: '跨境导航', items: [
      { text: '跨境导航', link: 'https://www.partnershare.cn/' },
      { text: '跨境都知道导航', link: 'https://www.kjdzd.com' },
      { text: 'M123跨境导航工具', link: 'https://www.m123.com/' },
    ]
  },
  {
    text: '前端', items: [
      { text: 'FrontEndNav', link: 'https://nav.web-hub.cn/' },
      { text: '茂茂前端导航', link: 'https://notes.fe-mm.com/nav' },
      { text: '前端助手', link: 'https://web-abin.github.io/abinWeb/tools' },
    ]
  },
  {
    text: '友链', items: [
      { text: 'SaleSmartly - 全渠道客户沟通平台', link: 'https://salesmartly.com/' },
      { text: 'AdsPower - 指纹浏览器', link: 'https://www.adspower.com/' },
      { text: 'HelpLook - 网站帮助中心', link: 'https://www.helplook.net/' },
      { text: 'IPFoxy - 全球静态独享 IP代理', link: 'https://www.ipfoxy.com/' },
    ]
  }
]
