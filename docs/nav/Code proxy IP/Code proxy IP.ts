import type { NavLink } from '../../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '接码平台',
    items: [
      {
        icon: 'https://5sim.net//apple-touch-icon.png',
        title: '5SIM',
        desc: '短信激活 | 使用虚拟号码在线接收短信',
        link: 'https://5sim.net/zh',
      },
      {
        icon: 'https://sms-man.com/favicon/favicon-32x32.png',
        title: 'SMS-MAN（独立号码收费）',
        desc: '在社交网络、市场、交易所和在线服务上注册，不会收到垃圾邮件和泄露个人数据。',
        link: 'https://sms-man.com/',
      },
      {
        icon: 'https://www.68sms.com/favicon.ico',
        title: '68SMS全球接码',
        desc: '68sms是一家国际在线接码平台，我们支持各种在线服务的验证码接收，包括但不限于社交媒体、银行、电子邮件等。',
        link: 'https://www.kjdzd.com/sites/2604.html',
      },
      {
        icon: 'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/img/activate_favicon.png',
        title: 'SMS-Activate是在线接受短信的虚拟号码服务 ',
        desc: 'SMS-Activate是在线接受短信的虚拟号码服务',
        link: 'https://sms-activate.org/cn',
      },
      {
        icon: 'https://www.sms4u.vip/portal/static/img/sms4u_favicon.ico',
        title: 'sms4u全球接码平台',
        desc: '在线接码，在线接收短信，虚拟电话号码，短信的虚拟号码，短信验证，短信验证服务，租用电话号码，短信激活',
        link: 'https://www.sms4u.vip/?ref=kjdzd.com',
      },
      {
        icon: 'https://resource.helplook.net/docker_production/4lsamm/icon/icon.png?rand=17935696',
        title: '其他接码平台 ',
        desc: '更多接码平台',
        link: 'https://www.salesmartly.com/blog/docs/code-receiving-platform',
      },

    ],
  },

  {
    title: '代理IP',
    items: [
      {
        icon: 'https://proxy6.net/static/img/favicon300.png',
        title: 'proxies',
        desc: 'Ads指纹浏览器购买IP的',
        link: 'https://proxy6.net/en/',
      },
      {
        icon: 'https://app.ipfoxy.com/favicon.svg',
        title: 'IPFoxy全球代理',
        desc: '提供不限流量的独享静态IP代理',
        link: 'https://www.kjdzd.com/sites/2368.html',
      },
      {
        icon: 'https://proxy-seller.com/local/templates/dvsproxyseller/img/logo-page-reg.png',
        title: 'ProxySeller',
        desc: '购买IP代理的',
        link: 'https://proxy-seller.com/zh/auth/?login=yes&backurl=%2Fzh%2F',
      },
      {
        icon: 'https://panel.proxyline.net/static/panel/img/favicon.png',
        title: 'ProxyLine',
        desc: '购买IP代理的',
        link: 'https://panel.proxyline.net/all/',
      },
      {
        icon: 'https://ip-api.com/favicon.ico',
        title: 'ip-api',
        desc: '搜索任何IP地址/域',
        link: 'https://ip-api.com/',
      },
      {
        icon: 'https://www.iplocation.net/favicon.ico',
        title: 'iplocation',
        desc: '解析ip网络位置',
        link: 'https://www.iplocation.net/',
      },


    ],
  },
]
