export function adLoader(src: string) {
  return `window.addEventListener('ads-ready', function () {
  var script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = ${JSON.stringify(src)};
  document.head.appendChild(script);
}, { once: true });`;
}
