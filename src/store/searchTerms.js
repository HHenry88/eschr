const searchTerms = {
  state: {
    keywords: [{name: "apple"}],
    searchTerm: '',
    keywordsTracker: ['apple', 'banana'],
    thumbnailSrc: '',
    thumbnailActive: false,
    hardCoded: [
      "amy elliot",
"bradly host",
"carla ryan",
"corey petty",
"david stobbe",
"jackie chiu",
"jamie wilde",
"joe ryan",
"kyle elliot",
"laura whitesides host",
"lesley whitesides",
"meredith host",
"patrick mcinerney",
"taylor host",
"tom halverson",
"valerie fay",
"aguas calientes",
"angkor wat",
"annie moore statue",
"aquas calientes",
"austria",
"baan dam",
"bagaces",
"barranco",
"barrio de la presa",
"batu caves",
"belgravia",
"bogota old town",
"bogota",
"bogotá",
"botero museum",
"british columbia",
"british virgin islands",
"california",
"cambodia",
"canada",
"caribbean",
"central",
"centro histórico",
"centro",
"chai wan",
"chang wat chiang mai",
"chang wat chiang rai",
"chek lap kok",
"chiang mai",
"chiang rai",
"chinchero",
"chūō-ku",
"clear water bay",
"cliffs of moher",
"cn tower",
"coal harbour",
"cobh",
"coco",
"colombia",
"comunidad de madrid",
"cork",
"costa rica",
"county clare",
"county cork",
"county dublin",
"county galway",
"cusco",
"cuzco",
"cửa nam",
"da nang",
"downtown",
"dragon bridge",
"dubai",
"dublin",
"east end",
"england",
"europe",
"florida",
"fujikawaguchiko-machi",
"fulham",
"galway cathedral",
"galway",
"germania",
"gia ngu restaurant",
"grand haven",
"guanacaste province",
"guanajuato",
"ha long bay",
"hanoi",
"hard rock hotel",
"harrods",
"hawaii",
"hiroshima",
"ho long bay",
"hofburg",
"hoi an old town",
"hoi an",
"hollywood",
"hong kong island",
"hong kong",
"honolulu",
"hà nội",
"hà n���i",
"hàng bài",
"hàng bạc",
"hàng trống",
"hòa cường nam",
"hồng gai",
"icc",
"innere stadt",
"intercontinental da nang",
"ireland",
"japan",
"jardines del buen retiro",
"jost van dyke",
"kalamazoo",
"kanagawa-ken",
"kaohsiung city",
"kaohsiung",
"kawaguchiko",
"kilgarvan",
"kissimmee",
"knightsbridge",
"kuala lumpur",
"la candelaria",
"la catedral",
"la fortuna",
"la paz",
"la petaca",
"laguna de masaya",
"lantau island",
"las angeles",
"las nieves",
"las vegas",
"lima",
"lislorkan north",
"london",
"los angeles",
"machu picchu sanctuary lodge",
"machu picchu",
"madame tussauds hollywood",
"madrid",
"malaysia",
"maras salt mines",
"mexico",
"michigan",
"minh an",
"miraflores",
"miyajima",
"monserrate hill",
"moray",
"mrt formosa boulevard station",
"mt fuji",
"mt. fuji",
"mui wo",
"municipalidad metropolitana de lima",
"my khe beach",
"mỹ an",
"nagoya",
"naniwa-ku",
"nara",
"nara-ken",
"nara-shi",
"natural history museum vienna",
"natural history museum",
"nevada",
"new territories",
"nhật tân",
"niagara falls",
"nicaragua falls",
"nicaragua",
"north dock",
"north point",
"nuevo méxico",
"ocean park",
"ollantaytambo",
"ontario",
"osaka",
"panama city",
"panama",
"panamá",
"parque central de miraflores",
"parroquia virgen milagrosa",
"peru",
"phước mỹ",
"phước ninh",
"plaza de armas del cusco",
"plaza de bolivar",
"plaza mayor",
"provincia de alajuela",
"provincia de guanacaste",
"qosqo",
"quảng nam",
"quảng ninh",
"river corrib",
"rosewood hotel san miguel",
"royal palace madrid",
"sacred valley",
"sai wan ho",
"saint thomas",
"san antonio",
"san carlos",
"san francisco",
"san miguel de allende",
"san miguel",
"sangkat nokor thum",
"sangkat svay dangkum",
"santa fé",
"shau kei wan",
"shinjuku",
"shinsaibashi",
"shisaibashi",
"siem reap province",
"siem reap pub street",
"siem reap",
"skylodge",
"spain",
"st joseph cathedral hanoi",
"st. thomas",
"stamford bridge stadium",
"stephansdom cathedral",
"switzerland ",
"switzerland",
"sword lake",
"tainan city",
"tainan",
"taiwan",
"tambon chang khlan",
"tambon nang lae",
"tambon pa o don chai",
"tambon phra sing",
"tambon si phum",
"tambon su thep",
"teatro la plaza",
"teeraghbeg",
"temple bar street",
"temple bar",
"thailand",
"the cathedral church of st colman",
"the university of dublin",
"thọ quang",
"titanic museum cobh",
"tokoname",
"tokyo",
"tsim sha tsui",
"tst",
"tuần châu",
"tōkyō-to",
"u.s. virgin islands",
"uae",
"uk",
"united arab emirates",
"united kingdom",
"united states virgin islands",
"united states",
"urubamba",
"usa",
"vancouver",
"vienna",
"vietnam",
"virgin gorda",
"wat phra singh",
"wat rong khun",
"wien",
"xinxing district",
"yamanashi-ken",
"yau yue wan",
"yokohama",
"zona centro",
"zurich national museum",
"zurich old town",
"zurich",
"đà nẵng",
"ōsaka-fu",
"เทศบาลนครเชียงใหม่",
"平安里",
"平通里",
"明莊里",
"民權里",
"海頭里",
"港仔里",
"華平里",
"sky",
"tree",
"tourism",
"building",
"city",
"cloud",
"tourist attraction",
"mountain",
"water",
"recreation",
"vacation",
"landmark",
"facade",
"plant",
"hill station",
"highland",
"urban area",
"grass",
"house",
"mount scenery",
"town",
"street",
"art",
"fun",
"window",
"historic site",
"road",
"sea",
"architecture",
"ancient history",
"mountainous landforms",
"vehicle",
"rock",
"travel",
"temple",
"metropolitan area",
"hill",
"place of worship",
"river",
"reflection",
"geology",
"food",
"mountain range",
"leisure",
"car",
"waterway",
"landscape",
"girl",
"statue",
"skyline",
"national park",
"daytime",
"structure",
"sculpture",
"dish",
"hat",
"cuisine",
"waterfront",
"boat",
"town square",
"skyscraper",
"rural area",
"medieval architecture",
"body of water",
"wall",
"vegetation",
"church",
"baseball cap",
"archaeological site",
"machu picchu",
"detroit tigers",
"arch",
"religion",
"public space",
"history",
"cathedral",
"palace",
"outcrop",
"ocean",
"night",
"neighbourhood",
"nature",
"basilica",
"tower",
"plaza",
"metropolis",
"coast",
"tower block",
"shore",
"ruins",
"restaurant",
"monument",
"grassland",
"evening",
"wilderness",
"sunset",
"mountains",
"meal",
"geological phenomenon",
"field",
"shrubland",
"roof",
"outdoor structure",
"fauna",
"drink",
"cityscape",
"bank",
"sunglasses",
"smile",
"pasture",
"middle ages",
"horizon",
"cat",
"asian food",
"terrace",
"product",
"photography",
"palm trees",
"nature reserve",
"infrastructure",
"beer",
"water resources",
"village",
"royal palace of madrid",
"romantic",
"pedestrian",
"escarpment",
"château",
"chinese architecture",
"phenomenon",
"mountain village",
"lunch",
"loch",
"lighting",
"lawn",
"lake",
"headgear",
"glasses",
"garden",
"classical architecture",
"beach",
"aerial photography",
"watercourse",
"valley",
"snout",
"shrine",
"ridge",
"promontory",
"painting",
"pagoda",
"morning",
"grasses",
"flooring",
"condominium",
"coastal and oceanic landforms",
"cliff",
"breakfast",
"wood",
"wat",
"unesco world heritage site",
"transport",
"terrain",
"small to medium sized cats",
"residential area",
"plateau",
"museum",
"mural",
"glass",
"floor",
"fjord",
"dusk",
"caves",
"atmosphere",
"arecales",
"yellow",
"vision care",
"sunrise",
"street food",
"road surface",
"reservoir",
"property",
"pier",
"park",
"national trust for places of historic interest or natural beauty",
"mountain pass",
"livestock",
"light",
"leaf",
"lane",
"lake district",
"indian temple",
"grass family",
"estate",
"dog",
"day",
"dawn",
"carving",
"boating",
"bird's-eye view",
"atmosphere of earth",
"alcoholic beverage",
"alcohol",
"agriculture",
"wildlife",
"walkway",
"symmetry",
"soup",
"real estate",
"pond",
"palm tree",
"memorial",
"llama",
"island",
"iron",
"graffiti",
"friends",
"farm",
"column",
"chapel",
"canal",
"bicycle"
    ]
  },
  getters: {
    getKeywords: state => state.keywords,
    getKeywordsTracker: state => state.hardCoded,
    getThumbnailSrc: state => state.thumbnailSrc,
    getThumbnailActive: state => state.thumbnailActive,
  },
  mutations: {
    sortKeywords:(state, payload) => {
      //sort keywords into an array to display on autocomplete
      const keywords = [];
      // const keywordsTracker = [];
      // const keywordArrays = payload.map((item, index) => {
      //   item._source.keywords.forEach((keyword)=> {
      //     if(!keywordsTracker.includes(keyword)) {
      //       keywords.push({name:keyword})
      //       keywordsTracker.push(keyword);
      //     }
      //   })
      // });

      state.hardCoded.forEach((item) => {
        keywords.push({name:item})
      })

      state.keywords = keywords;
      state.keywordsTracker = keywordsTracker;
    },
    setThumbnailSrc:(state, payload) => {
      state.thumbnailSrc = payload
      state.thumbnailActive = true;
    },
    setThumbnailUnActive:(state) => {
      state.thumbnailActive = false;
    }
  },
  actions: {
    retrieveKeywords:(context) => {
      // on load get search terms to auto complete with.
      context.commit('sortKeywords');
    },
    retrieveThumbnail:(context, payload) => {
      context.commit('setThumbnailSrc', payload)
    },
    turnOffThumbnail: (context) => {
      context.commit('setThumbnailUnActive')
    }
  }
}

export default searchTerms
