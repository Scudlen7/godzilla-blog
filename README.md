# 哥斯拉笔记

Scudlen 的个人博客，使用 Astro 和 AstroSage 主题构建。首页默认使用简体中文，导航中的 English 和简体中文链接可以切换当前页面。两套界面共用同一份文章。

## 本地使用

安装 Node.js 24，启用 Corepack，然后在仓库根目录运行：

```sh
pnpm install --frozen-lockfile
pnpm --filter @astro-sage/demo exec astro dev --background
```

开发服务可用同一命令前缀执行 `astro dev status`、`astro dev logs` 或 `astro dev stop` 管理。执行 `pnpm build` 检查类型、构建网站并生成搜索索引，再用 `pnpm preview` 预览成品。

## 写第一篇文章

在 `apps/demo/src/content/posts/` 新建 `hello.md`：

```markdown
---
title: 我的第一篇文章
description: 这篇文章的简短摘要。
pubDatetime: 2026-11-06T10:00:00+08:00
tags: ["随笔"]
---

在这里写正文。
```

文章地址由文件路径生成。配图较多时，可以使用 `hello/index.mdx`，将图片与正文放在同一目录。文章发布后尽量保留文件路径。文章管理和排版选项见 [功能说明](FEATURES.md)。

## 个人资料

站名、署名、时区、评论和社交链接集中在 `apps/demo/sage.config.ts`。中英文关于页分别为 `apps/demo/src/content/pages/about.md` 和 `about-en.md`。翻译词条在 `packages/astro-sage/src/i18n/lang/`。

## 发布到 GitHub Pages

本项目的目标仓库为 [Scudlen7/godzilla-blog](https://github.com/Scudlen7/godzilla-blog)。在目标仓库的 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。将项目推送到 `main` 后，发布工作流读取 Pages 网址，构建并上传 `apps/demo/dist`。仓库子路径根据 Pages 网址自动设置。可以在 Actions 中手动重新发布。

## 来源和许可

主题源自 [AstroSage](https://github.com/chintak/astro-sage)，许可见 [上游主题许可](LICENSE-AstroSage)。
