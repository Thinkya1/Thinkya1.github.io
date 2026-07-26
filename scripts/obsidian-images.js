/* 让 Obsidian 里写的文章不用改就能发布：
 * 1. Obsidian 双链图片  ![[xxx.png]]        -> ![](/img/covers/xxx.png)
 * 2. 相对路径图片      ![](img/covers/x.png) -> ![](/img/covers/x.png)
 * 图片统一按文件名指向 /img/covers/，与 Obsidian 的附件目录约定一致。 */
'use strict';

hexo.extend.filter.register('before_post_render', function (post) {
  if (!post.content) return post;

  post.content = post.content
    .replace(/!\[\[([^\]|]+?)(?:\|[^\]]*)?\]\]/g, function (_, name) {
      const file = name.trim().split('/').pop();
      return '![' + file + '](/img/covers/' + file + ')';
    })
    .replace(/(!\[[^\]]*\]\()(?!https?:\/\/|data:|\/)([^)\s]+)(\))/g, function (_, pre, path, post_) {
      return pre + '/img/covers/' + decodeURIComponent(path).split('/').pop() + post_;
    });

  return post;
});
