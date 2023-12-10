export default {
  title: "smart-old", // 博客的标题
  description: "智慧养老app介绍", // 博客的介绍
  base: "/smart-old/", // 根路径,如果想用github.io访问这个必填，需和github仓库名字一致 【https://vitejs.cn/vitepress/guide/deploy.html#github-pages-%E5%92%8C-travis-ci】
  lastUpdated: true, // 开启最后更新时间
  themeConfig: {
    logo: "/images/logo.png", // 页面上显示的logo
    algolia: {
      apiKey: 'your_api_key', // 这里是algolia的key和indexName，请自行前往申请
      indexName: 'index_name'
    },
    nav: [
      // 页面右上角的导航
      { text: "⬇️立即下载", link: "https://share.weiyun.com/6ybgtv8Y" },
      // { text: "blog2", link: "/blogs/blog2/" },
      {
        text: "其他",
        items: [
          // 可以配置成下拉
          { text: "Changelog", link: "/others/changelog" },
          { text: "Contribution", link: "/others/contribution" },
        ],
      },
    ],
    sidebar: [
      // 侧边栏，可以分组
      // 当用户在 `blogs` 目录页面下将会展示这个侧边栏
      // {
      //   text: "下载",
      //   link: "/blogs/download/",
      // },
      {
        text: "app介绍",
        collapsed: false,
        items: [
          {
            text: "app介绍",
            link: "/blogs/introduction/",
          },
          {
            text: "登录注册",
            link: "/blogs/introduction/login",
          },
          {
            text: "首页",
            link: "/blogs/introduction/main",
          },
          {
            text: "文章",
            link: "/blogs/introduction/article",
          },
          {
            text: "视频",
            link: "/blogs/introduction/video",
          },
          {
            text: "天气",
            link: "/blogs/introduction/weather",
          },
          {
            text: "聊天机器人",
            link: "/blogs/introduction/chatBot",
          },
          {
            text: "机构管理",
            link: "/blogs/introduction/org",
          },
          {
            text: "好友聊天",
            link: "/blogs/introduction/message",
          },
          {
            text: "用户信息",
            link: "/blogs/introduction/user",
          },
        ],
      },
    ],
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present smart-old'
    },
    lastUpdatedText: "最近更新时间",
    // 编辑连接
    editLink: {
      pattern: "https://github.com/xzy0625/smart-old/tree/master/docs/:path", // 这里换成自己的github连接
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/xzy0625/smart-old" }], // 可以连接到 github
  },
};
