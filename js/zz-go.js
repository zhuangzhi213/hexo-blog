document.addEventListener('DOMContentLoaded', function () {
  // 获取页面上所有的 a 标签
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // 检查链接是否为非 xxx.love 域名的链接
    const targetOrigin = new URL(link.href).hostname;
    if (!targetOrigin.endsWith('zhuangzhi.love')) {
      // 修改链接点击事件，跳转到 go.html 中转页并传递目标网址作为参数
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetUrl = this.href;
        window.location.href = '/go.html?url=' + encodeURIComponent(targetUrl);
      });

      // 给非 xxx.love 域名的链接添加特定样式以便区分
      link.classList.add('external');
    }
  });
});