import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: process.env.PAGES_URL ?? "http://localhost:4321/",
    title: "哥斯拉笔记",
    description: "Scudlen 的学习笔记、踩坑记录和技术实验。",
    author: "Scudlen",
    profile: "https://github.com/Scudlen7",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
  },
  home: {
    intro:
      "你好,欢迎来到我的博客!我是Scudlen,一名正在路上的“零栈”开发工程师，喜欢折腾各种新技术。这个博客相当于我的第二大脑: 把学过的东西写清楚,才算真的学会了。\n\n这里有我的学习笔记、踩坑记录和 一些好玩的技术实验。如果某篇文章恰好帮到了你,那真是鄙人的荣幸; 如果发现哪里写错了,欢迎在评论区指正。",
    introEn:
      "Hi, welcome to my blog! I’m Scudlen, a “zero-stack” developer finding my way. I love trying out new technologies. This blog is my second brain. I know I’ve learned something when I can explain it clearly in writing.\n\nHere you’ll find my study notes, mistakes I’ve learned from, and a few experiments I’ve had fun with. If a post helps you, I’m honored. If you spot a mistake, please let me know in the comments.",
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
    showBackButton: false,
    search: "pagefind",
  },
});
