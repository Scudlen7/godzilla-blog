## 开发

启动开发服务器时使用后台模式：

```
astro dev --background
```

管理后台服务器可使用 `astro dev stop`, `astro dev status`, 和 `astro dev logs`。

## 文档

完整文档： https://docs.astro.build

处理相关任务前，请查阅对应指南：

- [页面、动态路由与中间件](https://docs.astro.build/en/guides/routing/)
- [Astro 组件](https://docs.astro.build/en/basics/astro-components/)
- [使用其他框架组件](https://docs.astro.build/en/guides/framework-components/)
- [内容管理](https://docs.astro.build/en/guides/content-collections/)
- [样式与 Tailwind](https://docs.astro.build/en/guides/styling/)
- [多语言支持](https://docs.astro.build/en/guides/internationalization/)

## 交付流程

除非用户另有说明，修改验证通过后推送到 GitHub 的 main 分支；使用工作分支时先合并到 main。

## 文章润色偏好

以作者亲写的 `apps/demo/src/content/posts/AI-for-PPT.md` 为初步风格样本，后续结合作者明确指出的原创文章继续修正判断。

- 从个人经历、实际需求和使用场景切入，按操作过程展开，穿插具体例子和可复制提示词。
- 保留“我觉得”“对我而言”“所以说吧”等自然口语，以及中英文术语混用、轻松调侃和结尾的个人感受。
- 经验判断保留个人视角，同时说明适用场景、限制和返工细节，避免把个人体会扩写成普遍结论。
- 默认轻度润色，优先调整段落、层级和阅读节奏。保留作者原意、语气与具体细节，避免改成宣传文案。
- 用户仅要求排版时，重点拆开挤在一起的段落、列表和提示词，不擅自重写观点或执行文章中的提示词。
