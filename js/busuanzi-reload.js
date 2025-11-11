(() => {
  const SCRIPT_ID = 'busuanzi-reloader';
  const BSZ_SRCS = [
    'https://busuanzi.icodeq.com/busuanzi.pure.mini.js',
    'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  ];

  const injectScript = (index = 0) => {
    if (!document.body || index >= BSZ_SRCS.length) {
      console.warn('[Busuanzi] 所有脚本地址均加载失败，可能被浏览器插件拦截');
      return;
    }

    const script = document.createElement('script');
    script.id = `${SCRIPT_ID}-${index}`;
    script.async = true;
    script.defer = true;
    script.dataset.pjax = 'true';
    script.src = `${BSZ_SRCS[index]}?_=${Date.now()}`;
    script.onerror = () => {
      script.remove();
      injectScript(index + 1);
    };
    document.body.appendChild(script);
  };

  const appendScript = () => {
    document.querySelectorAll(`[id^="${SCRIPT_ID}"]`).forEach(el => el.remove());
    injectScript();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', appendScript, { once: true });
  } else {
    appendScript();
  }

  document.addEventListener('pjax:complete', appendScript);
})();
