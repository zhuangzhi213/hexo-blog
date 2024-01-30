fetch('https://v1.jinrishici.com/all.json')
    .then(response => response.json())
    .then(data => {
        var poemData = {
            content: data.content,
            origin: data.origin,
            author: data.author // 将API返回的数据赋值给poemData对象
        };

        var ijinseYiYan = [poemData.content + ' \n—— ' + poemData.author  + ' 《' +  poemData.origin + '》'];
        var ijinseYiYan1 = [
            '人生若只如初见，何事秋风悲画扇。\n—— 纳兰容若 《木兰花·拟古决绝词柬友》',
            '长风破浪会有时，直挂云帆济沧海。\n—— 李白 《行路难·其一》',
            '抽刀断水水更流，举杯消愁愁更愁。\n—— 李白 《宣州谢朓楼饯别校书叔云》',
            '燕山雪花大如席，片片吹落轩辕台。\n—— 李白 《北风行》',
            '天生我材必有用，千金散尽还复来。\n—— 李白 《将进酒》',
            '会当凌绝顶，一览众山小。\n—— 杜甫 《望岳》',
            '朱门酒肉臭，路有冻死骨。\n—— 杜甫 《自京赴奉先县咏怀五百字》',
            '烽火连三月，家书抵万金。\n—— 杜甫 《春望》',
            '国破山河在，城春草木深。\n—— 杜甫 《春望》',
            '好雨知时节，当春乃发生。随风潜入夜，润物细无声。\n—— 杜甫 《春夜喜雨》',
            '登高壮观天地间，大江茫茫去不还。\n—— 杜甫 《登高》',
            '安得广厦千万间，大庇天下寒士俱欢颜，风雨不动安如山！ \n—— 杜甫 《茅屋为秋风所破歌》',
            "人生若只如初见，何事秋风悲画扇。\n—— 纳兰性德 《木兰花·拟古决绝词柬友》",
            "一生一代一双人，争教两处销魂。\n—— 纳兰性德 《画堂春·一生一代一双人》",
            "明月多情应笑我，笑我如今，辜负春心，独自闲行独自吟。\n—— 纳兰性德 《采桑子·当时错》",
            "赌书消得泼茶香，当时只道是寻常。\n—— 纳兰性德 《浣溪沙·谁念西风独自凉》",
            "我是人间惆怅客，知君何事泪纵横，断肠声里忆平生。\n—— 纳兰性德 《浣溪沙·残雪凝辉冷画屏》",
            '吴楚东南坼，乾坤日夜浮。\n—— 杜甫 《登岳阳楼》',
            '两个黄鹂鸣翠柳，一行白鹭上青天。\n—— 杜甫 《绝句二首·其一》',
            '花径不曾缘客扫，蓬门今始为君开。\n—— 杜甫 《客至》',
            '两岸猿声啼不住，轻舟已过万重山。\n—— 李白 《早发白帝城》',
            '黄河之水天上来，奔流到海不复回。\n—— 李白 《将进酒》',
            '举头望明月，低头思故乡。\n—— 李白 《静夜思》',
            '人生得意须尽欢，莫使金樽空对月。\n—— 李白 《将进酒》',
            '卷尽残花风未定，休恨，花开元自要春风。\n—— 辛弃疾 《定风波·暮春漫兴》',
            '绕遍回廊还独坐。月笼云暗重门锁。\n—— 苏轼 《蝶恋花·雨霰疏疏经泼火》',
            '松树千年终是朽，槿花一日自为荣。 \n—— 白居易 《放言五首·其五》',
            '鹿车何日驾，归去颍东田。 \n—— 欧阳修 《秋怀》',
            '摘青梅荐酒，甚残寒，犹怯苎萝衣。\n—— 汤恢 《八声甘州·摘青梅荐酒》',
            '垂柳覆金堤，蘼芜叶复齐。\n—— 薛道衡 《昔昔盐》',
            '织女牵牛送夕阳，临看不觉鹊桥长。\n—— 德容 《七夕二首·其二》',
            '独写菖蒲竹叶杯，蓬城芳草踏初回。\n—— 汤显祖 《午日处州禁竞渡》',
            '细数十年事，十处过中秋。\n—— 范成大 《水调歌头·细数十年事》',
            '少小离家老大回，乡音无改鬓毛衰。\n—— 贺知章 《回乡偶书二首·其一》',
            '解鞍欹枕绿杨桥，杜宇一声春晓。\n—— 苏轼 《西江月·顷在黄州》',
            '明月皎皎照我床，星汉西流夜未央。\n—— 曹丕 《燕歌行二首·其一》',
            '雪月最相宜，梅雪都清绝。\n—— 张孝祥 《卜算子·雪月最相宜》',
            '牛困人饥日已高，市南门外泥中歇。\n—— 白居易 《卖炭翁》',
            '造化钟神秀，阴阳割昏晓。\n—— 杜甫 《望岳》',
            '纤云弄巧，飞星传恨，银汉迢迢暗度。\n—— 秦观 《鹊桥仙·纤云弄巧》',
            '羌笛何须怨杨柳，春风不度玉门关。\n—— 王之涣 《凉州词二首·其一》',
            '中山人予之猫，猫善捕鼠及鸡。\n—— 刘基 《乞猫》',
            '三冬暂就儒生学，千耦还从父老耕。\n—— 陆游 《观村童戏溪上》',
            '年离乱后，长大一相逢。\n —— 李益 《喜见外弟又言别》',
            '春来秋去相思在，秋去春来信息稀。\n—— 鱼玄机 《闺怨》',
            '竹叶于人既无分，菊花从此不须开。\n—— 杜甫 《九日五首·其一》',
            '菱叶萦波荷飐风，荷花深处小船通。\n—— 白居易 《采莲曲》',
            '蜡炬风摇帘不下，竹影半墙如画。\n—— 项鸿祚 《清平乐·池上纳凉》',
            '将终夜常开眼，报答平生未展眉。\n—— 元稹 《遣悲怀三首·其三》',
            '无花无酒过清明，兴味萧然似野僧。\n—— 王禹偁 《清明》'
        ]
        var ijinseYiYanBg = [
            'https://tc.pengqi.club/g/2023/12/18/65806a6ec76da.jpg',
            'https://tc.pengqi.club/g/2023/12/19/65806d82689c7.webp',
            'https://tc.pengqi.club/g/2023/12/19/65806d393d727.webp',
            'https://tc.pengqi.club/g/2023/12/18/65806c55b7e24.webp',
            'https://tc.pengqi.club/g/2023/12/19/65806d393d727.webp',
            'https://tc.pengqi.club/g/2023/12/19/65806d82689c7.webp'
        ];

        var ijinseYiMain = document.querySelector('.ijinse-main');
        var ijinseSjMain = ijinseYiMain.parentNode.parentNode;
        var date = new Date();
        var ijinseMonth = date.getMonth() + 1;
        var ijinseDay = date.getDate();

        document.querySelector('.ijinseYear').innerHTML = date.getFullYear() + '年';
        if (ijinseMonth < 10) {
            document.querySelector('.ijinseMonth').innerHTML = '0' + ijinseMonth + '月';
        } else {
            document.querySelector('.ijinseMonth').innerHTML = ijinseMonth + '月';
        }
        if (ijinseDay < 10) {
            document.querySelector('.ijinseDay').innerHTML = '0' + ijinseDay;
        } else {
            document.querySelector('.ijinseDay').innerHTML = ijinseDay;
        }

        ijinseSjMain.style.padding = '0';

        var ijinseYyRanBtn = document.querySelector('#ijinse-qh-btn');
        var ijinseYiYinTextBox = document.querySelector('.ijinse-yiyin');
        var lock = true;

        function ijinseRanYiYin() {
            if (!lock) return;
          var ijinseRan = Math.floor(Math.random() * (ijinseYiYan.length));
          var ijinseRanImg = Math.floor(Math.random() * (ijinseYiYanBg.length));
          var formattedPoem = ijinseYiYan[ijinseRan].replace(/\n/g, '<br>');
          ijinseYiYinTextBox.innerHTML = formattedPoem;
          ijinseYiMain.style.backgroundImage = 'url(' + ijinseYiYanBg[ijinseRanImg] + ')';
            lock = false;
            setTimeout(function () {
                lock = true;
            }, 500);
        };
        ijinseRanYiYin();
        function random() {
            if (!lock) return;
            var ijinseRan = Math.floor(Math.random() * (ijinseYiYan1.length));
            var ijinseRanImg = Math.floor(Math.random() * (ijinseYiYanBg.length));
            // 将诗句中的换行符替换为HTML换行标签，并使用格式化后的诗句内容
            var formattedPoem = ijinseYiYan1[ijinseRan].replace(/\n/g, '<br>');
            ijinseYiYinTextBox.innerHTML = formattedPoem;
            ijinseYiMain.style.backgroundImage = 'url(' + ijinseYiYanBg[ijinseRanImg] + ')';
            lock = false;
            setTimeout(function () {
                lock = true;
            }, 500);
        };
        ijinseYyRanBtn.onclick = function() {
            random();
        }
    })