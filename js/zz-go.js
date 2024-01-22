// 选择所有目标为新窗口的链接
var links = document.querySelectorAll('a[target="_blank"]');

// 对每个链接添加点击事件监听器
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // 阻止原始链接的默认行为
    event.preventDefault();

    // 打开确认页面，并将原链接作为参数传递
    var originalURL = this.href;
    window.open('go.html?redirectTo=' + encodeURIComponent(originalURL), '_blank');

    // 如果go.html页面完成确认后会执行实际的跳转逻辑
  });
});
document.addEventListener('DOMContentLoaded', function () {
    // 获取URL参数
    var urlParams = new URLSearchParams(window.location.search);
    var redirectTo = decodeURIComponent(urlParams.get('redirectTo'));

    // 显示目标URL
    document.getElementById('target-url').innerText = redirectTo;

    function confirmRedirect() {
        window.open(redirectTo, '_blank');
    }
});