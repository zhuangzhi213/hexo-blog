var posts=["2023/09/09/hello-world/","2023/09/22/欢迎来参加我们的婚礼/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Butterfly","link":"https://butterfly.js.org/","avatar":"https://z1.ax1x.com/2023/10/24/piEvH0A.jpg","descr":"今日事，今日毕"},{"name":"Next","link":"https://theme-next.js.org/","avatar":"https://theme-next.js.org/images/logo.svg","descr":"一款简约且非常好看的主题"},{"name":"Fluid","link":"https://hexo.fluid-dev.com/","avatar":"https://hexo.fluid-dev.com/img/avatar.png","descr":"一款Material Design风格的Hexo主题"},{"name":"anzhiyu","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"琅環书生","link":"https://www.zhuangzhi.love","avatar":"https://z1.ax1x.com/2023/10/20/piFQxN8.jpg","descr":"无远弗届，皆有可能","siteshot":"https://z1.ax1x.com/2023/10/24/piEv3Qg.jpg","color":"vip","tag":"本人站点"},{"name":"Jerry","link":"https://butterfly.js.org/categories/Docs%E6%96%87%E6%AA%94/","avatar":"https://z1.ax1x.com/2023/10/24/piEvH0A.jpg","descr":"butterfly官方安装文档","siteshot":"https://z1.ax1x.com/2023/10/20/piFQ5tO.jpg","color":"speed","tag":"安装文档"},{"name":"安知鱼","link":"https://docs.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"安知鱼主题官方部署文档","siteshot":"https://z1.ax1x.com/2023/10/20/piFQgXR.jpg","color":"vip","tag":"主题美化"},{"name":"张洪Heo","link":"https://butterfly.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp","siteshot":"https://z1.ax1x.com/2023/10/20/piFQRn1.jpg","descr":"Butterfly主题美化教程","color":"speed","tag":"技术文档"},{"name":"琅環书生","link":"https://www.zhuangzhi.love","avatar":"https://z1.ax1x.com/2023/10/20/piFQxN8.jpg","descr":"无远弗届，皆有可能","recommend":true},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp","descr":"分享设计与科技生活"},{"name":"Qing","link":"https://blog.wuyuxi.cn/","avatar":"https://blog.wuyuxi.cn/img/avatar.png","descr":"你侬我侬，忒煞情多"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };