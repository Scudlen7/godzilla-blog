import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: process.env.PAGES_URL ?? "http://localhost:4321/",
    title: "哥斯拉笔记",
    description: "一名热爱开源的前端开发工程师，喜欢折腾各种新技术...",
    author: "Scudlen",
    profile: "https://github.com/Scudlen7",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
  },
  home: {
    intro: "一名热爱开源的前端开发工程师，喜欢折腾各种新技术...",
    introEn:
      "A frontend developer who loves open source and enjoys experimenting with new technologies...",
  },
  comments: { provider: "utterances", repo: "Scudlen7/godzilla-blog" },
  socials: [
    {
      name: "github",
      url: "https://github.com/Scudlen7",
      linkTitle: "Scudlen · GitHub",
    },
  ],
  posts: { perPage: 8, perIndex: 6 },
  features: {
    editPost: {
      enabled: true,
      url: "https://github.com/Scudlen7/godzilla-blog/edit/main/apps/demo/",
    },
    showBackButton: false,
    search: "pagefind",
  },
});
