---
title: Contribution guidelines
---

Welcome to Godzilla Notes! I welcome technical articles, troubleshooting notes, and personal essays. Send me a Markdown draft for review. Once I merge it into `main`, GitHub Actions builds the site and publishes it to GitHub Pages.

## Submit a pull request

1. Fork the [blog repository](https://github.com/Scudlen7/godzilla-blog) and create a branch for your draft.
2. Add a Markdown file under `apps/demo/src/content/posts/`. Use a short name with lowercase letters and hyphens. For example, `my-first-post.md` becomes `/godzilla-blog/posts/my-first-post/`.
3. Copy the template below into the file. Replace the title, summary, byline, and publication date with your own, then write your article.
4. Commit the draft and images together and open a pull request against the original repository’s `main` branch. After review and merge, you can [follow the deployment](https://github.com/Scudlen7/godzilla-blog/actions/workflows/pages.yml).

## Article template

```markdown
---
title: "My first Astro experiment"
description: "How I tested a static blog build and fixed the problem I ran into."
author: "Your byline"
pubDatetime: 2026-11-06T10:00:00+08:00
tags: ["Technical notes", "Astro"]
draft: false
---

Start writing here.
```

The title, description, and `pubDatetime` are required. Include your preferred `author` so your article carries your byline. The default is Scudlen. Use `tags` to group articles by topic. Set `draft: true` while a piece is in progress and switch it to `false` when it is ready to publish.

## Include images

For `my-first-post.md`, place images in `apps/demo/src/content/posts/pictures/my-first-post/` and reference them relative to the article:

```markdown
![Terminal output after the build](./pictures/my-first-post/build-result.png)
```

## What I look for

- Give readers something they can use: a reproducible experiment, a fix for a problem, or a clearly explained idea.
- Submit original work or work you have permission to republish. For reprints, credit the author, link to the source, and include the permission details.
- Anonymize other people’s information in the text, screenshots, and logs. Submissions should follow applicable laws and stay free of unrelated promotions.

## Submit by email

If you prefer email, send the Markdown file, original images, and your preferred byline. For reprints, include the source and permission details. I’ll help prepare the article for publication. [2744363348@qq.com](mailto:2744363348@qq.com)
