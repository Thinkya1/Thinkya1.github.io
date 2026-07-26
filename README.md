# 彬子的Blog

基于 [Hexo](https://hexo.io/) + [Volantis](https://volantis.js.org/) 主题的个人博客，部署在 GitHub Pages（[binzi.top](https://binzi.top)）。

本仓库保存的是**博客源码**（Markdown 文章 + 配置），推送到 `main` 分支后由 GitHub Actions 自动构建并发布，无需本地执行 `hexo deploy`。

## 写文章

在 `source/_posts/` 下新建一个 Markdown 文件即可，例如 `source/_posts/我的新文章.md`：

```markdown
---
title: 文章标题
date: 2026-07-27 12:00:00
categories:
  - 分类名
tags:
  - 标签1
  - 标签2
---

正文内容，支持代码块和 $\LaTeX$ 数学公式。
```

文件名会成为文章 URL 的一部分（`/年/月/日/文件名/`）。放进子目录（如 `_posts/算法/xxx.md`）则 URL 中也会带上子目录。

## 本地预览

```bash
npm install        # 首次需要
npx hexo server    # 打开 http://localhost:4000
```

## 发布

```bash
git add .
git commit -m "新增文章"
git push
```

推送后等 GitHub Actions 构建完成（约 1 分钟），站点自动更新。

## 常用配置

- 站点标题、作者等：`_config.yml`
- 主题（导航栏、侧边栏、页脚等）：`_config.volantis.yml`
- 侧边栏博主卡片：`source/_data/widgets.yml`
- 关于页：`source/about/index.md`
