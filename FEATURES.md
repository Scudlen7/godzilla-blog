# 博客功能与写作指南

## 文章管理

| 字段 | 用途 |
| --- | --- |
| title、description、pubDatetime | 必填，分别是标题、摘要和发布时间。日期建议包含时区。 |
| author、timezone | 覆盖站点的默认署名和时区。 |
| modDatetime | 最近修改时间。文章列表优先按此时间倒序。 |
| draft | 设为 true 暂存草稿，开发预览也会隐藏。 |
| featured | 在首页精选区展示。 |
| tags、series | 按标签归类，或把多篇文章组成按发布时间排列的系列。 |
| toc、math、cite、comments | 分别控制目录、数学样式、引用和评论。 |
| ogImage、canonicalURL、hideEditPost | 自定义分享图、指定规范网址，或隐藏编辑入口。 |

定时文章会在生产构建时判断，默认提前十五分钟进入可发布范围；到期后要重新构建。首页、分页列表、标签、系列、归档及全文 RSS 随文章更新。

## 排版

普通文章支持 Markdown、表格、脚注、任务列表、带语言标记的代码块和数学公式。可用 `[[文章文件名]]` 链接其他文章，用 `[[文章文件名#小节|链接文字]]` 指向具体标题。Mermaid 和 Excalidraw 图可在构建时生成。需要自定义插图布局时可在 MDX 中引入主题的 Figure 组件。

## 阅读与搜索

导航可切换简体中文与 English，文章正文保留作者原文。阅读页支持深浅主题、章节目录、上下篇、系列导航、引用、分享链接及选段分享。搜索采用 Pagefind，完整构建后即可预览搜索效果。

## 评论

可在站点配置中设置 `comments: { provider: "utterances", repo: "账号/仓库" }`，并在对应公开仓库启用 Issues、安装 utterances 应用。主题也支持基于 Discussions 的 giscus，需要仓库 ID 和讨论分类等配置。省略评论配置会关闭评论；单篇可在文章头部设置 `comments: false`。
