// 定义一个包含图片URL的数组
var imageUrls = [
  "/img/card-announcement-light01.png",
  "/img/card-announcement-light02.png",
  "/img/card-announcement-light03.png",
  "/img/card-announcement-light04.png",
];

function getRandomImage() {
  var index = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[index];
}

// 在页面加载完成后替换图片
window.onload = function() {
  var imgElement = document.getElementById('randomImage');
  if (imgElement) {
    imgElement.src = getRandomImage();
  }
};
// 获取或创建一个HTML元素，并设置其背景图片为随机图片
var element = document.getElementById('card-announcement');
if (element) {
  var randomImageUrl = getRandomImage();
  element.style.backgroundImage = 'url("' + randomImageUrl + '")';
}

document.documentElement.style.setProperty('--zz-card-announcementlight', `url("${getRandomImage()}")`);