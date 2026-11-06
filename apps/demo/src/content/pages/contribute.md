---
title: 投稿指南
---

欢迎来「哥斯拉笔记」发文章。技术分享、踩坑记录、杂谈随笔都欢迎。你用 Markdown 写稿，我来审稿；稿件合并到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。

## 通过 Pull Request 投稿

1. Fork [博客仓库](https://github.com/Scudlen7/godzilla-blog)，在自己的分支上写稿。
2. 在 `apps/demo/src/content/posts/` 下新建 Markdown 文件。建议用小写英文和短横线命名，例如 `my-first-post.md` 发布后的站内路径是 `/godzilla-blog/posts/my-first-post/`。
3. 把下面的模板复制到文件开头，换成你的标题、摘要、署名和实际发布日期，再写正文。
4. 将文章和配图一起提交，向原仓库的 `main` 分支发起 Pull Request。审核合并后，可以在[发布记录](https://github.com/Scudlen7/godzilla-blog/actions/workflows/pages.yml)查看上线进度。

## 文章模板

```markdown
---
title: "我的第一个 Astro 小实验"
description: "记录一次静态博客实验的步骤、结果和踩过的坑。"
author: "你的署名"
pubDatetime: 2026-11-06T10:00:00+08:00
tags: ["技术分享", "Astro"]
draft: false
---

正文从这里开始……
```

标题、摘要和 `pubDatetime` 是必填项。投稿时请写上 `author`，否则系统会使用本站默认署名 Scudlen。文章通过 `tags` 归类，写随笔时可以把标签换成“杂谈随笔”。还在修改的稿件可以设为 `draft: true`，准备发布时再改回 `false`。

## 配图怎么放

以 `my-first-post.md` 为例，可以把配图放在 `apps/demo/src/content/posts/pictures/my-first-post/`，然后在正文中用相对路径引用：

```markdown
![构建完成后的终端输出](./pictures/my-first-post/build-result.png)
```

## 审稿时我会看什么

- 文章能给读者带来什么？一个可以复现的小实验、一次踩坑的解决过程，或一个说得清楚的观点，都值得分享。
- 请提交原创或已获转载授权的内容。转载时注明原作者、出处和授权情况。
- 正文、截图和日志如涉及他人信息，请先匿名化。稿件应遵守法律法规，请勿夹带与主题无关的推广。

## 通过邮件投稿

如果不熟悉 Git，也欢迎直接发邮件。请附上 Markdown 文稿和原始配图，说明希望使用的署名；如为转载，也请附上出处和授权说明。我会帮你整理发布。[2744363348@qq.com](mailto:2744363348@qq.com)
