var posts=["blog/zz-2.html","blog/zz-1.html","blog/zz-4.html","blog/zz-5.html","blog/zz-3.html","blog/zz-6.html","blog/zz-7.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Butterfly","link":"https://butterfly.js.org/","avatar":"https://z1.ax1x.com/2023/10/24/piEvH0A.jpg","descr":"今日事，今日毕"},{"name":"Next","link":"https://theme-next.js.org/","avatar":"https://theme-next.js.org/images/logo.svg","descr":"一款简约且非常好看的主题"},{"name":"Fluid","link":"https://hexo.fluid-dev.com/","avatar":"https://hexo.fluid-dev.com/img/avatar.png","descr":"一款Material Design风格的Hexo主题"},{"name":"anzhiyu","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"琅環书生","link":"https://www.zhuangzhi.love","avatar":"https://z1.ax1x.com/2023/10/20/piFQxN8.jpg","descr":"无远弗届，皆有可能","siteshot":"https://z1.ax1x.com/2023/10/24/piEv3Qg.jpg","color":"vip","tag":"本人站点"},{"name":"Jerry","link":"https://butterfly.js.org/categories/Docs%E6%96%87%E6%AA%94/","avatar":"https://z1.ax1x.com/2023/10/24/piEvH0A.jpg","descr":"butterfly官方安装文档","siteshot":"https://z1.ax1x.com/2023/10/20/piFQ5tO.jpg","color":"speed","tag":"安装文档"},{"name":"安知鱼","link":"https://docs.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"安知鱼主题官方部署文档","siteshot":"https://z1.ax1x.com/2023/10/20/piFQgXR.jpg","color":"vip","tag":"主题美化"},{"name":"张洪Heo","link":"https://butterfly.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp","siteshot":"https://z1.ax1x.com/2023/10/20/piFQRn1.jpg","descr":"Butterfly主题美化教程","color":"speed","tag":"技术文档"},{"name":"琅環书生","link":"https://www.zhuangzhi.love","avatar":"https://z1.ax1x.com/2023/10/20/piFQxN8.jpg","descr":"无远弗届，皆有可能","recommend":true,"color":"vip","tag":"博主"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true,"tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp","descr":"分享设计与科技生活","tag":"技术"},{"name":"夜雨柠檬","link":"https://blog.yeyulemon.top/","avatar":"https://imgbed.yeyulemon.top/uploads/652404e068dd8.png","descr":"生于忧患，死于安乐。","tag":"技术"},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://img01.anheyu.com/useruploads/222/2023/10/16/652cbfc482491.jpg","descr":"Dare && Do","tag":"技术"},{"name":"煮雪话河山","link":"https://blog.cent1pedee.top/","avatar":"https://img.cent1pedee.top/img/wechat.jpg","descr":"如月之恒，如日之升。","tag":"技术"},{"name":"星河城野","link":"https://zlblog.cf","avatar":"https://thirdqq.qlogo.cn/g?b=sdk&k=yqjbmdENrko19T7mjIc3vg&s=640&t=1655292317","descr":"低调存在，无人问津，专注无用，深度浅薄。","tag":"技术"},{"name":"Shine","link":"https://blog.shineyu.cn/","avatar":"https://blog.shineyu.cn/img/shineyu_avatar.webp","descr":"热爱生活点滴，分享时刻精彩。","tag":"技术"},{"name":"爱吃肉的猫","link":"https://meuicat.com/","avatar":"https://z1.ax1x.com/2023/05/26/p9qChjI.jpg","descr":"有肉有猫有生活","tag":"技术"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","tag":"技术"},{"name":"小植同学","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","descr":"锦鲤相随，好运常伴","tag":"技术"},{"name":"小旦","link":"https://satera.cn","avatar":"https://satera.cn/img/logo.png","descr":"SNTube Studio","tag":"技术"},{"name":"Black Flies","link":"https://www.yyyzyyyz.cn/","avatar":"https://npm.elemecdn.com/imgscdn/img/202111191951780.JPG","descr":"When nothing goes right,just go left.","tag":"技术"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！","tag":"技术"},{"name":"iMaeGoo","link":"https://www.imaegoo.com","avatar":"https://www.imaegoo.com/images/avatar.jpg","descr":"虹墨空间站","tag":"技术"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/head.webp","descr":"漫天倾尘,风中轻笑","tag":"技术"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","tag":"技术"},{"name":"Leet","link":"https://skyline523.github.io/","avatar":"https://avatars.githubusercontent.com/u/76251617?v=4","descr":"我会找到办法的，我总有办法","tag":"技术"},{"name":"呆鱼","link":"https://daiyu.fun/","avatar":"https://daiyu.fun/img/avatar.png","descr":"Hello World！","tag":"技术"},{"name":"qxdn","link":"https://qianxu.run","avatar":"https://qianxu.run/images/avatar.jpg","descr":"蓬生麻中，不扶自直","tag":"技术"},{"name":"Naokuo","link":"https://www.naokuo.top","avatar":"https://cdn.cbd.int/naokuo-blog/img/avatar-512x512.png","descr":"请给我来亿碗三鲜面","tag":"技术"},{"name":"Qing","link":"https://blog.wuyuxi.cn/","avatar":"https://z1.ax1x.com/2023/11/01/piKATSO.png","descr":"你侬我侬，忒煞情多","color":"speed","tag":"生活"},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://img02.anheyu.com/adminuploads/1/2023/07/04/64a3710cd824a.webp","descr":"热爱你来过的每度温度","color":"speed","tag":"生活"},{"name":"CHYT","link":"https://www.chyt.top/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=3223610600&s=100","descr":"生活万物，唯爱小婷","color":"speed","tag":"生活"},{"name":"小鹿的个人网站","link":"https://siena.zone/?entry_type=blog","avatar":"https://siena.zone/favicon_compressed.png","descr":"跳吧，在无比宏大的星系！","color":"speed","tag":"生活"},{"name":"小林笔记","link":"https://m.senlinm.cn","avatar":"https://m.senlinm.cn/logo.png","descr":"轻生活，秒上签","color":"speed","tag":"生活"},{"name":"好软猫","link":"https://www.haoruanmao.com/","avatar":"https://www.haoruanmao.com/wp-content/themes/CoreNext/static/img/hrm-logo.png","descr":"专注好软件与资源分享的猫","color":"#00d6b9","tag":"软件"},{"name":"不是知音","link":"https://www.zhiyin.run/","avatar":"https://www.zhiyin.run/www/wwwroot/zhiyin.run/meitiku/2024/01/cropped-20240126052149061187.webp","descr":"分享经验和实用技巧","color":"#00d6b9","tag":"软件"}];
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