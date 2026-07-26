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

## 用 Obsidian 写作（推荐）

1. 打开 Obsidian → 「打开另一个仓库」→「打开本地仓库文件夹」→ 选择本仓库的 `source/` 目录（配置已预置好：新笔记建在 `_posts/`，粘贴的图片自动存到 `img/covers/`）。
2. 设置 → 核心插件 → 启用「模板」，写新文章时用命令面板插入 `新文章模板`（自动带上标题、日期的 front-matter）。
3. （可选，图形化发布）设置 → 第三方插件 → 浏览 → 安装「**Git**」（Obsidian Git）。之后在 Obsidian 里 `Ctrl/Cmd+P` → `Git: Commit-and-sync` 一键发布，也可以设置定时自动备份推送。

Obsidian 里粘贴图片生成的链接（`![[xxx.png]]` 或相对路径）构建时会自动转换成正确的 `/img/covers/` 路径，不用手动改。

> 注意：git 仓库根目录在 `source/` 的上一级。如果 Obsidian Git 插件提示找不到仓库，在插件设置里把「Custom base path (Git repository path)」设为 `..`；仍不行就用下面的命令行 `./publish.sh`，或者装个 [GitHub Desktop](https://desktop.github.com/)（图形界面，点一下 Commit → Push 即发布）。

## 命令行发布

```bash
./publish.sh              # 一键提交并推送（自动生成提交信息）
./publish.sh "写了篇新文章"  # 或自定义提交信息
```

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
