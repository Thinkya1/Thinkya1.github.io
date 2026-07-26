/* 文章里的数学公式在构建时由 markdown-it-katex 渲染成 HTML，
 * 这里全局注入 KaTeX 的样式表让公式正常显示。 */
'use strict';

hexo.extend.injector.register(
  'head_end',
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">',
  'default'
);
