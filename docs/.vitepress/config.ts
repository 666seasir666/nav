import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

import MiniSearch from 'minisearch';

// 定义 MiniSearch 实例
const search = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title'],
});

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  // 网站标题
  title: '内部导航',
  // 网站描述
  description: 'SaleSmartly技术支持内部导航网站，由VitePress搭建，并使用Vue3作为开发框架。',
  head,

  // 表示是否更新成功
lastUpdated: true,
  // 表示是否清理URL
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    // 是否开启国际化路由（生产环境关闭）
    i18nRouting: false,

    //  logo地址
    logo: '/logo.png',

    // 导航配置
    nav,
    // 侧边栏配置
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }],

    footer: {
      // message: '底部页脚说明',
      copyright: 'Copyright © 2024-present SeasirHyde',
    },

    // 声明一个lastUpdated变量，它是一个对象，包含文本（text）和格式选项（formatOptions）
    lastUpdated: {
      // 文本是中文，表示最后更新于
      text: '最后更新于',
      // 格式选项包含日期样式（dateStyle）和时间样式（timeStyle）
      formatOptions: {
        // 日期样式为短格式
        dateStyle: 'short',
        // 时间样式为中格式
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      // 访问量统计
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    comment: {
      repo: 'maomao1996/vitepress-nav-template',
      repoId: 'R_kgDOJC09Jg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJC09Js4Cekn0',
    },

    // 设置搜索框的样式
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            extractField: (entry, fieldName) => {
              return entry[fieldName];
            },
            tokenize: (str) => {
              return str.toLowerCase().split(/\s+/);
            },
            processTerm: (term) => {
              return term.toLowerCase();
            },
          },
          searchOptions: {
            fuzzy: 0.2, // 模糊匹配程度
            prefix: true, // 是否支持前缀匹配
            boost: { // 字段权重
              title: 4,
              content: 2
            }
          }
        }
      }
    }
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
