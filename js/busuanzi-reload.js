(() => {
  const SCRIPT_ID = 'busuanzi-reloader';
  const BSZ_SRC = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';

  const appendScript = () => {
    if (!document.body) return;
    const prev = document.getElementById(SCRIPT_ID);
    if (prev) prev.remove();

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.dataset.pjax = 'true';
    script.src = `${BSZ_SRC}?_=${Date.now()}`;
    document.body.appendChild(script);
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    appendScript();
  } else {
    document.addEventListener('DOMContentLoaded', appendScript, { once: true });
  }

  document.addEventListener('pjax:complete', appendScript);
})();
