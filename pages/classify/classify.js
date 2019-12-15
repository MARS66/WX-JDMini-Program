// pages/classify/classify.js
// let smallTitle=[{title:"热门推荐"},{title:"手机数码"},{title:"家电用器"},{title:"电脑办公"},{title:"美妆护肤"},{title:"个护清洁"},{title:"汽车生活"},{title:"京东超市"},{title:"男装"},{title:"女装"},{title:"图书音像"},{title:"箱包手袋"},{title:"礼品鲜花"},{title:"拍卖"},{title:"艺术邮币"},{title:"二手商品"},{title:"海囤全球"}]
// let smallPart = [{
//   title: "热门推荐",
//   item: [{
//     image: "https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
//     name: "手机"
//   },
//   {
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png",
//     name: "耳机"
//   },
//   {
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
//     name: "华为"
//   },
//   {
//     image: "https://img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png",
//     name: "电饭煲"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png",
//     name: "电磁炉"
//   },
//   {
//     image: "https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png",
//     name: "路由器"
//   },
//   {
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png",
//     name: "口红"
//   },
//   {
//     image: "https://img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png",
//     name: "吹风机"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png",
//     name: "洗衣液"
//   }]
// },
// {
//   title: "手机数码",
//   item: [{
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png",
//     name: "小米"
//   },
//   {
//     image: "https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg",
//     name: "华为"
//   },
//   {
//     image: "https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg",
//     name: "荣耀"
//   },
//   {
//     image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg",
//     name: "iPhone"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png",
//     name: "vivo"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png",
//     name: "oppo"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg",
//     name: "一加"
//   },
//   {
//     image: "https://img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg",
//     name: "锤子"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png",
//     name: "三星"
//   }]
// },
// {
//   title: "家用电器",
//   item: [{
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg",
//     name: "电饭煲"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg",
//     name: "电磁炉"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t13267/86/981023661/1871/6fae5f11/5a17f203N50016f64.jpg",
//     name: "微波炉"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t11503/25/2307123595/2987/a79ac767/5a17f1e3Nf7957b34.jpg",
//     name: "电饼铛"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg",
//     name: "豆浆机"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11284/298/2465125571/2619/ffe2cde5/5a17f237Nb9978251.jpg",
//     name: "料理机"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t12094/76/967581282/2377/4611685d/5a17f1f1N9c125c81.jpg",
//     name: "电烤箱"
//   },
//   {
//     image: "https://img12.360buyimg.com/focus/s140x140_jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg",
//     name: "面包机"
//   },
//   {
//     image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13009/346/964112809/2968/91b03a47/5a17f1aeNf7647558.jpg",
//     name: "电炖锅"
//   }]
// },
// {
//   title: "电脑办公",
//   item: [{
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png",
//     name: "轻薄本"
//   },
//   {
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png",
//     name: "游戏本"
//   },
//   {
//     image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13492/261/938265048/5840/b5e4bdb6/5a17ba61N61a74bc3.jpg",
//     name: "投影机"
//   },
//   {
//     image: "https://img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg",
//     name: "笔记本"
//   },
//   {
//     image: "https://img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg",
//     name: "一体机"
//   },
//   {
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg",
//     name: "台式机"
//   },
//   {
//     image: "https://img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg",
//     name: "游戏本"
//   },
//   {
//     image: "https://img10.360buyimg.com/focus/s140x140_jfs/t13378/75/927818435/4870/595967f9/5a16a5b5N4075325c.jpg",
//     name: "鼠标垫"
//   },
//   {
//     image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg",
//     name: "手写板"
//   }]
// },
//   {
//     title: "美妆护肤",
//     item: [{
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t19453/253/2549990863/33320/e0515773/5afd3d5cN85837566.jpg",
//       name: "小美盒"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t20929/77/121480668/32196/9a7ba672/5afd3d35N2a6ee1be.jpg",
//       name: "敏感肌"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t19189/251/2505274305/20543/3440faf0/5afd3cf3N79f5cd53.jpg",
//       name: "润唇膏"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t20302/318/128789688/54498/ee1af3a1/5afd3c8fNc3b46f7b.jpg",
//       name: "去黑头"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t18178/66/2529806258/29049/33a9cb41/5afd3c78Nc97eeb61.jpg",
//       name: "爽肤水"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t20692/251/127894832/28255/9c74e1cd/5afd3c1eN4eb4f341.jpg",
//       name: "粉底液"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t21628/195/131387297/32697/2075f60f/5afd3c24N07e86c2e.jpg",
//       name: "隔离霜"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t18229/23/2519017882/29961/378194c7/5afd3c0fNf14f2ed1.jpg",
//       name: "CC霜"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t17572/289/2550922072/37963/90595742/5afd3c00N411493d5.jpg",
//       name: "睫毛膏"
//     }]
//   },
//   {
//     title: "个护清洁",
//     item: [{
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t21343/109/200166835/32189/655b48ef/5b03c73fN69e0c2b7.jpg",
//       name: "个护馆"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg",
//       name: "清洁馆"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t17062/178/2600012755/33321/1ad5ca0b/5afd571fN18ed0cd5.jpg",
//       name: "本色纸"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t22123/187/137040009/6892/6b0cbf68/5afd572dN7ed9c341.jpg",
//       name: "花露水"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t19819/28/553421672/50589/7cfc13ea/5afd56f2Nf2b8ca84.jpg",
//       name: "舒洁"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t19420/348/2539781815/6961/35348d70/5afd56e1N98a273a3.jpg",
//       name: "洗发水"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t21079/224/118757583/10390/664c2986/5afd56d5N4a00680d.jpg",
//       name: "LG"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t22387/82/128171200/41534/fde69788/5afd5686N67808fa9.jpg",
//       name: "卷纸"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t18637/64/2549852710/37258/79908eff/5afd5681N00604b0d.jpg",
//       name: "手帕纸"
//     }]
//   },
//   {
//     title: "汽车生活",
//     item: [{
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t12934/187/1360887703/3624/2773362c/5a1fb8f6N7d4de465.jpg",
//       name: "机油"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t12508/203/1731926315/5258/efc05e60/5a28b101Ne8ebee02.jpg",
//       name: "轮胎"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t1/9840/16/11639/17257/5c2dba16E8de6ef2a/b4183d6f61a3cc7d.jpg",
//       name: "大众"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t1/29923/3/3983/10680/5c2dba1eEedd1bb07/9247922649b54d4f.jpg",
//       name: "日产"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t1/14600/17/4110/8646/5c2dba26E73f41fef/780a4ace76c4ef0b.jpg",
//       name: "丰田"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t1/20898/17/4012/8445/5c2dba2dEe1e47052/88025b2f8a3db243.jpg",
//       name: "奥迪"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t1/11966/34/4889/14229/5c2dba33Efedca6be/b1a54b684fdba89d.jpg",
//       name: "别克"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t1/29720/25/4046/9018/5c2dba3fE18370565/6a111e43b55ab8ce.jpg",
//       name: "本田"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t1/28703/6/3981/13957/5c2dba45E83f19186/4d0151e9e7e4339e.jpg",
//       name: "斯柯达"
//     }]
//   },
//   {
//     title: "京东超市",
//     item: [{
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t11890/195/1248876103/12648/403ce46a/59ffd6b9Nc88344b5.png",
//       name: "糖巧"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t10495/93/1089311310/6581/6d04b65f/59dc753fN205018c1.jpg",
//       name: "大米"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t11260/95/1647695392/2372/36b50b69/5a0564c7N3da70f2c.jpg",
//       name: "食用油"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t12139/263/181438448/8809/53c7a2cb/5a0564b5Ne126460d.jpg",
//       name: "面粉"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t11896/289/1648594931/2393/a10449b5/5a0564ceN3a65d5eb.jpg",
//       name: "调味品"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t13315/224/187738504/12862/7dcc50dd/5a0564bdN760afe2b.jpg",
//       name: "杂粮"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t13309/261/184399972/3734/830948b1/5a0569bdN28dfb4c9.jpg",
//       name: "饮用水"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t7516/287/4519159825/3304/56011181/5a056afaN5db50aa8.jpg",
//       name: "饮料"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11302/13/1658731901/14577/364f5460/5a055f40N62903c0f.png",
//       name: "大闸蟹"
//     }]
//   },
//   {
//     title: "男装",
//     item: [{
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg",
//       name: "夹克"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg",
//       name: "T恤"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg",
//       name: "衬衫"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t19222/87/1339548468/5738/68f3d8aa/5ac47841Nff658599.jpg",
//       name: "牛仔裤"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t17758/181/1301850814/2848/ad32e7c9/5ac47845N7374a31d.jpg",
//       name: "休闲裤"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t17890/31/1269777779/2792/917e13d0/5ac47830N63e76af2.jpg",
//       name: "风衣"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg",
//       name: "针织衫"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t18649/322/1301662901/3044/42dd02b4/5ac47c3eN84bc1bed.jpg",
//       name: "七分裤"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t17677/52/1290335227/2848/ad32e7c9/5ac47c31N24f09d02.jpg",
//       name: "休闲裤"
//     }]
//   },
//   {
//     title: "女装",
//     item: [{
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg",
//       name: "连衣裙"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg",
//       name: "牛仔裤"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t11794/114/2228059199/2529/60e8b474/5a12b21eN10fd877c.jpg",
//       name: "针织衫"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg",
//       name: "打底衫"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t19156/326/678660620/3005/436c3bc0/5a9fc007N3ef48a88.jpg",
//       name: "小西装"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t17245/317/695141729/3579/69cca106/5a9fbfe6N60e7552b.jpg",
//       name: "棒球衫"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t13891/289/715304860/1754/12054085/5a126bddN3b541f68.jpg",
//       name: "哈伦裤"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t13072/271/743510789/2242/dd73a8c7/5a126bc7Nae619031.jpg",
//       name: "背带裤"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t12364/230/737857721/2528/bf50d6c0/5a126bc2N924c1ec9.jpg",
//       name: "破洞裤"
//     }]
//   },
//   {
//     title: "图书音像",
//     item: [{
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg",
//       name: "文学"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg",
//       name: "童书"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png",
//       name: "艺术"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t17263/67/1779166351/8803/42ae82bd/5ad82b11N544c3fda.png",
//       name: "文娱"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t19168/163/1800009649/16054/2697e728/5ad82a4eN9f0322b6.jpg",
//       name: "电子书"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t18475/160/1799744111/21440/1de31eaf/5ad82791N7a3b7d91.png",
//       name: "生活"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t22153/7/271851534/5969/54620d98/5b07e00dNae49eb21.jpg",
//       name: "小说"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t21865/190/284343823/8953/af60c012/5b07e069N35ada2c1.jpg",
//       name: "绘本"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t22072/59/259430108/14779/4702b273/5b07e0a1N747f81a5.jpg",
//       name: "考试"
//     }]
//   },
//   {
//     title: "箱包手袋",
//     item: [{
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg",
//       name: "拉杆箱"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t13072/160/841922431/4449/2af11bb9/5a152f9eN7ce8e286.jpg",
//       name: "电脑包"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t14005/197/826940059/9087/b0768931/5a152ee0N04e9ca84.jpg",
//       name: "单肩包"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t12976/143/856792930/9096/70c50a5e/5a152faaNd711f0d2.jpg",
//       name: "双肩包"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t11533/305/2340248240/5527/fc48d6a2/5a152edbN5d852327.jpg",
//       name: "斜挎包"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t12865/189/849590115/8350/c75cbcf1/5a152ee9Nc9f07b67.jpg",
//       name: "钱包"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t13654/76/869177115/7821/b1b82f12/5a152e8bN9515d81b.jpg",
//       name: "子母包"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t11116/340/2310199191/5651/742fc1f9/5a152e85N0e24b5ae.jpg",
//       name: "贝壳包"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13366/88/821545788/3514/7842173f/5a152c8dN315a33bb.jpg",
//       name: "公文包"
//     }]
//   },
//   {
//     title: "礼品鲜花",
//     item: [{
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t15265/53/194586431/10154/5af493d4/5a2657d3N8e0c8ccd.jpg",
//       name: "购物卡"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t7945/95/4335588242/7434/f1027991/5a2657a2N88971c70.png",
//       name: "熏香"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t15589/37/76479735/8958/d9e1ad99/5a2657c9Nee73a04e.jpg",
//       name: "文房"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t13210/115/1364909990/7943/c2e30928/5a1eaaccNf6e91132.jpg",
//       name: "鲜花"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t14338/239/191581892/12297/79cab376/5a26577bN2b1ee4ab.jpg",
//       name: "野兽派"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t14176/214/1696602952/6171/9ed00e0e/5a265779N2724bd2c.jpg",
//       name: "烟斗"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13573/307/1341933642/5151/877447dc/5a1eaaafNabf69f07.jpg",
//       name: "打火机"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t13069/119/1340292312/11484/f25dfa3a/5a1eaab1Nb22d6f10.jpg",
//       name: "香皂花"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t14608/174/198751995/6183/565a578a/5a2657a2Nf8d15b9a.jpg",
//       name: "干花"
//     }]
//   },
//   {
//     title: "拍卖",
//     item: [{
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t18505/240/89469465/2673/9c2939a5/5a5c1b2aN659ad4c3.jpg",
//       name: "机动车"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t14164/187/1412759432/3863/773bc2af/5a1fd683N8803e02f.jpg",
//       name: "土地"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t19420/233/86079643/4386/51a06747/5a5c1b2fNf56e9e4b.jpg",
//       name: "股权"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t14713/294/1862643901/3882/ace0fbbb/5a5c1b36N02d26ff9.jpg",
//       name: "特色"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t16864/252/91221287/3383/6a99ffed/5a5c1b3cNc6a7748d.jpg",
//       name: "工艺品"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t15772/361/1517117357/3368/178b1b71/5a5c1b40N050691e4.jpg",
//       name: "奢侈品"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t16186/330/1694073179/3352/e197a7bb/5a5c1b49Na1ecf8f3.jpg",
//       name: "陶瓷"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t12616/204/1421804019/2843/e7539b50/5a1fd6b8N8038a821.jpg",
//       name: "珠宝"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13246/282/1416669922/6336/caf113a/5a1fd6aeN586c041f.jpg",
//       name: "文玩"
//     }]
//   },
//   {
//     title: "艺术邮币",
//     item: [{
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t14767/274/2600848162/5968/234aaff7/5aa650a3N04dcbfe0.jpg",
//       name: "邮币"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t19015/290/771829127/3646/d2bbed6e/5aa65080N2b9d3045.jpg",
//       name: "水墨画"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg",
//       name: "版面"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t15436/261/160477256/6798/9550e371/5a254430N1ac36391.jpg",
//       name: "全银币"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t12532/184/1400830546/8767/5a9dc7f7/5a1fd74bN97f50f10.jpg",
//       name: "纪念币"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t13165/269/1614672596/8116/5ee9347/5a25442cN5d6ae007.jpg",
//       name: "国库券"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t12856/171/1436894072/5607/845fc570/5a1fd744N1aac7f51.jpg",
//       name: "连体钞"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t13249/353/288616410/6740/ebbd9de1/5a2543fcN81f3b4e5.jpg",
//       name: "小本票"
//     },
//     {
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t13066/362/1185460015/8502/f672cf9d/5a1bc1f2Ndc4f4706.jpg",
//       name: "礼品册"
//     }]
//   },
//   {
//     title: "二手商品",
//     item: [{
//       image: "https://img30.360buyimg.com/focus/s140x140_jfs/t13780/207/1658562290/6573/b400d7e7/5a254094N81bb9428.jpg",
//       name: "镜头"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t1/25813/3/6420/24676/5c53e0e4E63601964/5385a9ebac494411.jpg",
//       name: "游戏机"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t16207/136/10154854/5564/75ab0485/5a25407fNe89f546b.jpg",
//       name: "路由器"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13912/284/1157767573/4199/b5f09b11/5a1b7681N3f068a5f.jpg",
//       name: "冰箱"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t13327/344/1139308335/3716/a0f7a508/5a1b7688N9bb8d2a3.jpg",
//       name: "空调"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t13369/198/1176718317/7665/1cd124f7/5a1bbfb1N1736177e.jpg",
//       name: "笔记本"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13546/187/1659109063/4553/b8548e0b/5a254060N255db826.jpg",
//       name: "鼠标"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t13957/108/1642373247/6823/d53a23e1/5a254026N8e97edf6.jpg",
//       name: "打印机"
//     },
//     {
//       image: "https://img20.360buyimg.com/focus/s140x140_jfs/t13369/299/1202510744/5018/ee8f44df/5a1b77f9N621d1b7c.jpg",
//       name: "钟表"
//     }]
//   },
//   {
//     title: "海囤全球",
//     item: [{
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11644/107/1809313914/3565/f1e31960/5a096af2N1b9b7b1b.jpg",
//       name: "随手杯"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t11656/147/1776180452/2098/29158531/5a096b11Ndc446848.jpg",
//       name: "保温壶"
//     },
//     {
//       image: "https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg",
//       name: "净水壶"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t11407/192/2020925112/5339/e9edc5b9/5a0d4796N7e1846c7.jpg",
//       name: "手机"
//     },
//     {
//       image: "https://img12.360buyimg.com/focus/s140x140_jfs/t14131/257/496524622/2962/2952f3b7/5a0d4759N74b768b6.jpg",
//       name: "游戏机"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t12343/308/536156844/3010/dd8698c2/5a0d4739Nb6bb37e9.jpg",
//       name: "电水壶"
//     },
//     {
//       image: "https://img13.360buyimg.com/focus/s140x140_jfs/t13732/238/500797186/2055/6ac895fd/5a0d472fN05950639.jpg",
//       name: "美容仪"
//     },
//     {
//       image: "https://img14.360buyimg.com/focus/s140x140_jfs/t12313/53/516155711/5084/93286306/5a0d4a80N5463a03b.jpg",
//       name: "奶粉"
//     },
//     {
//       image: "https://img11.360buyimg.com/focus/s140x140_jfs/t13384/17/339542844/3630/69cb7290/5a096e2cN2e9dfff3.jpg",
//       name: "鞋靴"
//     }]
//   }

// ]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    active: 0,
    heightArr: []

  },
  changeCurrent(event) {
    console.log(event)
    console.log(event.currentTarget.dataset.index)
    let index = event.currentTarget.dataset.index;
    this.setData({
      current: index,
      active: index
    })
  },
  dealHeight() {
    let heightArr = this.data.heightArr;
    let currentHeight = 0;
    wx.createSelectorQuery().selectAll('.model').boundingClientRect(function(rects) {
      rects.forEach(function(rect) {
        currentHeight += rect.height;
        heightArr.push(currentHeight)
      })
    }).exec()

    this.setData({
      heightArr: heightArr
    })

    console.log(heightArr)
  },
  bindScroll(event) {
    let heightArr = this.data.heightArr;
    let location = event.detail.scrollTop;
    if (location < heightArr[0]) {
      this.setData({
        active: 0
      })
    } else {
      for (let i = 1; i < heightArr.length; i++) {
        if (location >= heightArr[i - 1] && location < heightArr[i]) {
          this.setData({
            active: i
          })
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let smallPart;
    let that = this;
    //左边请求
    wx.request({
      url: 'http://localhost:8456/titles',
      data: '',
      header: {
        "content-type": "application/json"
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({
          smallTitle: res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    // 右边请求
    // 1
    wx.request({
      url: 'http://localhost:8456/searchtitle',
      data: '',
      header: {
        "content-type": "application/json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        smallPart = res.data;
        that.setData({
          smallPart: smallPart
        })
        for (let i = 0; i < smallPart.length; i++) {
          // 2
          wx.request({
            url: 'http://localhost:8456/products',
            data: {
              num: smallPart[i].id
            },
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
              smallPart[i].item = res.data;
              that.setData({
                smallPart: smallPart
              })

            },
            fail: function(res) {},
            complete: function(res) {},
          })
        }
        that.dealHeight();
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})