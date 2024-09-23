import type { NavLink } from '../../.vitepress/theme/types'

// line官方图标
const icon_Line_Url = 'https://vos.line-scdn.net/lbstw-static/assets/frontend/touch_icon.png';

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '远程软件',
    items: [
      {
        icon: 'https://sunlogin.oray.com/favicon.ico',
        title: '向日葵远程软件',
        desc: '用于远程国内的客户',
        link: 'https://sunlogin.oray.com/download',
      },
      {
        icon: 'https://img1.baidu.com/it/u=3876590970,3744482185&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
        title: 'Todesk',
        desc: '用于远程国内的客户',
        link: 'https://www.todesk.com/download.html',
      },
      {
        icon: 'https://anydesk.com.cn/_static/img/favicon/favicon-32x32.png',
        title: 'AnyDesk',
        desc: '用于远程海外的客户',
        link: 'https://anydesk.com/en',
      },
      {
        icon: 'https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png',
        title: 'Teamviewer',
        desc: '用于远程海外的客户',
        link: 'https://www.teamviewer.com/apac/download/windows/',
      },
    ]
  },

  {
    title: '截图工具',
    items: [
      {
        icon: 'https://pixpinapp.com/favicon.ico',
        title: 'PixPin（强烈推荐！）',
        desc: '功能强大使用简单的截图/贴图工具，帮助你提高效率',
        link: 'https://pixpinapp.com/',
      },
      {
        icon: 'https://zh.snipaste.com/favicon.ico',
        title: 'PixPin（强烈推荐！）',
        desc: 'Snipaste 是一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上！',
        link: 'https://zh.snipaste.com/download.html',
      },
    ],
  },

  {
    title: '在线工具',
    items: [
      {
        icon: 'https://www.bejson.com/static/bejson/img/logo.png',
        title: '在线短地址转换工具',
        desc: '转换短链接的',
        link: 'https://www.bejson.com/convert/shorturl/#google_vignette',
      },
      {
        icon: '/',
        title: '短网址生成器 | LinkShortener',
        desc: '转换短链接的',
        link: 'https://my5353.com/',
      },
      {
        icon: 'https://www.67tool.com//favicon.ico',
        title: '即时工具',
        desc: '即时工具-致力打造即用即走型在线工具箱',
        link: 'https://www.67tool.com/',
      },
      {
        icon: 'https://static.convertio.co/favicon.ico',
        title: 'Convertio — 文件转换器',
        desc: 'Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。',
        link: 'https://convertio.co/zh/',
      },
    ],
  },

  {
    title: '开发工具',
    items: [
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://www.jsont.run/favicon.ico',
        title: 'JSON格式化验证和编辑 - JSONT',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.jsont.run/',
      },
      {
        icon: 'https://css.bqrdh.com/favicon.ico',
        title: '响应式效果检测',
        desc: '检查网站是否有适配移动端页面布局',
        link: 'https://css.bqrdh.com/responsive-testing',
      },
      {
        icon: 'https://vscode.dev/static/stable/favicon.ico',
        title: 'vscode在线版',
        desc: 'vscode官方提供在线Web版vscode代码编写网站',
        link: 'https://vscode.dev/',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
    ]
  },

  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://openai.com/favicon.ico',
        title: 'Pricing | OpenAI',
        desc: 'OpenAI官方价格',
        link: 'https://openai.com/api/pricing/',
      },
    ],
  },

  {
    title: '邮件相关',
    items: [
      {
        icon: 'https://i.52112.com/icon/jpg/256/20210201/109466/4372976.jpg',
        title: '个人邮箱 - 来发信',
        desc: '常见个人邮箱登录方式教程',
        link: 'https://www.laifa.xin/category/yx/gryx/',
      },
      {
        icon: 'https://i.postimg.cc/hv2hwd83/331a5669-90e6-4b76-b2f8-ce0397879a4a-1.jpg',
        title: '企业邮箱 - 来发信',
        desc: '常见企业邮箱登录方式教程',
        link: 'https://www.laifa.xin/category/yx/qyyx/',
      },
      {
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png',
        title: '临时邮箱',
        desc: '12款常用的临时邮箱汇总',
        link: 'https://zhuanlan.zhihu.com/p/690640067',
      },
      {
        icon: 'https://inboxes.com/images/favicon.png',
        title: 'Inboxes - Disposable Temporary email',
        desc: '临时邮箱-可以用来接收fb后台邮箱辅助验证码的',
        link: 'https://inboxes.com/',
      },
      {
        icon: 'https://fviainboxes.com/favicon.ico',
        title: 'Fviainboxes',
        desc: '临时邮箱-可以用来接收fb后台邮箱辅助验证码的',
        link: 'https://fviainboxes.com/',
      },
      {
        icon: 'https://www.moakt.com/favicon.ico',
        title: 'moakt',
        desc: '临时邮箱-可以用来接收fb后台邮箱辅助验证码的',
        link: 'https://www.moakt.com/en',
      },
      {
        icon: 'https://generator.email/favicon.ico',
        title: 'generator',
        desc: '临时邮箱-可以用来接收fb后台邮箱辅助验证码的',
        link: 'https://generator.email',
      },
      {
        icon: 'https://www.1secmail.com/img/favicon.ico',
        title: '1secmail',
        desc: '临时邮箱-可以用来接收fb后台邮箱辅助验证码的',
        link: 'https://www.1secmail.com/',
      }
    ],
  },
]
