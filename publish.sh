#!/bin/bash
# 一键发布：把新写的文章提交并推送，线上自动构建更新
set -e
cd "$(dirname "$0")"

if [ -z "$(git status --porcelain)" ]; then
  echo "没有改动，无需发布"
  exit 0
fi

git add -A
git status --short
msg="${1:-更新文章 $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$msg"
git push
echo ""
echo "✅ 已推送，约 1 分钟后 https://binzi.top 自动更新"
