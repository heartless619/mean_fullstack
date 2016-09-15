class TranslateService {

    constructor() {
        this.buffetContentCn = ['10種沙拉', '小龍包', '炸鸡', '春卷', '炸蝦球', '炒面', '炒饭', '每日例汤', '酸甜調味醬料', '咖啡，中国茶和饼干'];
        this.buffetContentFi = ['10 erilaista salaattia', 'xiao long bao', 'friteerattua kanaa', 'kevätkääryle', 'friteerattua rapupyöriköitä', 'paistettua nuudelia', 'paistettua riisiä', 'päivä keitto ja hapanimeläkastike', 'lisäksi kahvi, kiinalainen tee ja pikkuleipä'];
        this.buffetContentEn = ['10 kinds of salad', 'small steamed bun','fried chicken','spring rolls','fried shrimp balls', 'fried noodles','fried rice','daily soup','sweet and sour sauces', 'coffee, Chinese tea and cookies'];
        this.MenuBeefFi = [{name:'Curry naudanlihaa', price:'€8,00'}, {name:'Naudanliha & chilikastike', price:'€7,50'}, {name:'Naudanliha & tomaattikastike', price:'€8,00'}];
        this.MenuBeefEn = [{name:'Curry beef', price:'€8,00'}, {name:'Beef & chili sauce', price:'€7,50'}, {name:'Beef & tomato sauce', price:'€8,00'}];
        this.MenuBeefCn = [{name:'咖哩牛肉', price:'€8,00'}, {name:'辣醬牛肉', price:'€7,50'}, {name:'番茄汁牛肉', price:'€8,00'}];
        this.MenuDrinkFi = [{name:'Coca-Cola 0,35l', price:'€2,50'}, {name:'Fanta 0.35l', price:'€2,50'}, {name:'Pepsi 0.33l', price:'€2,50'}];
        this.MenuDrinkEn = [{name:'Coca-Cola 0,35l', price:'€2,50'}, {name:'Fanta 0.35l', price:'€2,50'}, {name:'Pepsi 0.33l', price:'€2,50'}];
        this.MenuDrinkCn = [{name:'可口可樂 0,35l', price:'€2,50'}, {name:'芬達 0,35l', price:'€2,50'}, {name:'百事可樂 0,33l', price:'€2,50'}];
        this.everydayOffer = [{name:'Paistettua nuudelia porsasta ja katkarapu', price:'8,50€ (nor: 10,50€)'},
            {name:'Kong-po kana', price:'10,00€ (nor: 12,00€)'},
            {name:'Härkää sataykastikkeessa', price:'10,50€ (nor: 12,50€)'},
            {name:'Tiristettyä porsasta', price:'12,50€ (nor: 14,00€)'},
            {name:'Kevätkääryle', price:'4,00€ 6kpl (nor: 4kpl)'},
            {name:'Jättirapu rautapannussa', price:'15,00€ (nor: 17,00€)'}];
        this.changingBuffetFi = {day12: ['Gong-bao porsasta', 'kana zi-chuan kastikkeessa', 'härkää pippurikastikkeessa', 'paistettua kananmunaa ja tomaattia'],
            day34: ['Gu-lao kana', 'tiristettyä porsasta', 'härkää currykastikkeessa', 'friteerattua sipulirengasta'],
            day56: ['rapea härkaa pikantikastikkeessa', 'kana ja ananas', 'kung-po porsasta', 'kanansiivet colakastikkeessa']};
        this.changingBuffetCn = {day12: ['宮保肉丁', '孜然鸡块', '醬辣牛肉', '雞蛋炒西紅柿'],
            day34: ['咕噜肉', '油炸豬肉', '咖喱牛肉', '炸洋蔥圈'],
            day56: ['香脆牛裏脊', '菠蘿雞', '宮保肉丁', '可樂雞翅']};
        this.changingBuffetEn = {day12: ['Gong bao pork', 'chicken with zi-ran sauce', 'beef with pepper sauce', 'fried eggs and tomatoes'],
            day34: ['Gu-Lao chicken', 'deep fried pork', 'curry beef', 'deep fried onion rings'],
            day56: ['crispy fillet of beef', 'chicken and pineapple', 'Gung bao pork', 'cola chicken wings']};
        this.MenuChickerFi = [{name:'Curry kana', price:'€7,50'}, {name:'Friteerattua kanaa hapanimeläkast', price:'€7,50'}, {name:'friteerattua kanaa sitruunakast', price:'€8,00'}];
        this.MenuChickerEn = [{name:'Curry Chicken', price:'€7,50'}, {name:'Fried chicken sweet & sour sauce', price:'€7,50'}, {name:'Chicken with lemon sauce', price:'€8,00'}];
        this.MenuChickerCn = [{name:'咖哩肌肉', price:'€7,50'}, {name:'甜辣雞肉', price:'€7,50'}, {name:'檸檬醬汁雞肉', price:'€8,00'}];
        this.takeMenu = [{name:'Kananmuna ja tomaatti keitto', price:'€5,00'},
            {name:'Hainevä-rapukeitto', price:'€6,00'},
            {name:'Peking keitto', price:'€4,50'},
            {name:'Rapu-maissi keitto', price:'€4,50'},
            {name:'Won-ton keitto', price:'€5,00'},
            {name:'Kana maissi keitto', price:'€4,50'},
            {name:'Vihannes keitto', price:'€4,50'},
            {name:'Äyriäis keitto', price:'€5,50'},
            {name:'Kana herkkusieni keitto', price:'€4,50'},
            {name:'Katkarapu salaatti', price:'€6,50'},
            {name:'Friteerattu Won-ton', price:'€5,00'},
            {name:'Kevätkääryle', price:'€4,00'},
            {name:'Friteerattua kananpalaa hapanimelakastikkeessa', price:'€9,50'},
            {name:'Kana ja ananas', price:'€10,50'},
            {name:'Kung-po kana', price:'€12,00'},
            {name:'Friteerattua kanaa sitruunakastikkeessa', price:'€12,00'},
            {name:'Zichuan kana', price:'€12,00'},
            {name:'Peking kana', price:'€11,50'},
            {name:'Kana rautapannussa', price:'€11,50'},
            {name:'Kana ja sekavihenneksia', price:'€10,50'},
            {name:'kana ja kiinalaisia herkkusieniä', price:'€13,00'},
            {name:'kana sadaykastikkeessa', price:'€10,50'},
            {name:'kana currykastikkeessa', price:'€10,50'},
            {name:'kana valkosipulikastikkeessa', price:'€10,50'},
            {name:'Friteerattu kananfilee hapanimeläkastikkeessa', price:'€11,50'},
            {name:'kana sha-cha kastikkeessa', price:'€11,50'},
            {name:'Gu-lao kana ', price:'€14,00'},
            {name:'kana ,bambuversoja ja kerkkusieniä', price:'€11,50'},
            {name:'kana chilikastikkeessa', price:'€10,50'},
            {name:'Paistettua kanaa hapanimeläkastikkeessa', price:'€11,00'},
            {name:'Zhang--bao kana', price:'€13,00'},
            {name:'Rapea kana pikantikastikkeessa', price:'€14,00'},
            {name:'Rapea kana hapanimeläkastikkeessa', price:'€14,00'},
            {name:'Kana mustapapukastikkeessa', price:'€11,50'},
            {name:'Jättirapua ja vihanneksia', price:'€16,50'},
            {name:'kung-po jättirapua', price:'€16,50'},
            {name:'Rapea jättirapua pikantikastikkeessa', price:'€17,00'},
            {name:'Mustapippurisia jättirapua', price:'€16,50'},
            {name:'Jättirapua zichuan tapaan', price:'€15,00'},
            {name:'Jättirapua rautapannussa', price:'€17,00'},
            {name:'Friteerattua jättirapua hanpanimeläkastikkeessa', price:'€14,00'},
            {name:'Jättirapua currykastikkeessa', price:'€14,50'},
            {name:'Jättirapua mustapapukastikkeessa', price:'€14,50'},
            {name:'Jättirapua ja paprikka', price:'€14,50'},
            {name:'Jättirapua sataykastikkeessa', price:'€14,50'},
            {name:'Friteerattua katkarapua hapanimeläkastikkeessa', price:'€13,50'},
            {name:'Katkarapua ja vihanneksia', price:'€13,50'},
            {name:'Friteerattua rapupöyriköitä hapanimeläkastikkeessa', price:'€11,00'},
            {name:'Friteerattua kalaa hapanimeläkastikkeessa', price:'€12,50'},
            {name:'kala ja vihannes inkiväärikastikkeessa', price:'€14,50'},
            {name:'Friteerattua mustekalaa hapanimeläkastikkeessa', price:'€14,50'},
            {name:'Mustekala mustapapukastikkeessa', price:'€14,50'},
            {name:'Tiristettyä porsasta', price:'€14,00'},
            {name:'Porsasta szechwanin tapaan', price:'€12,00'},
            {name:'Porsasta rautapannussa', price:'€11,50'},
            {name:'Friteerattua porsasta hapanimeläkastikkeessa', price:'€11,00'},
            {name:'Bambunversoja ja sieniä porsasta', price:'€11,00'},
            {name:'Porsasta ja kiinalaisia sieniä ', price:'€14,00'},
            {name:'Porsasta ja vihanneksia', price:'€11,50'},
            {name:'Zhang-bao porsasta ', price:'€14,00'},
            {name:'Peking porsasta', price:'€12,00'},
            {name:'Kung-po porsasta', price:'€13,00'},
            {name:'Porsasta valkosipulikastikkeessa', price:'€11,50'},
            {name:'Gu-lao porsasta', price:'€14,00'},
            {name:'Porsasta ja sipulia', price:'€11,00'},
            {name:'Porsasta currykastikkeessa', price:'€11,50'},
            {name:'Rapea porsasta pikantikastikkeessa', price:'€15,00'},
            {name:'Grillattua porsasta hoi-sin kastikkeessa', price:'€13,50'},
            {name:'Porsasta chilikastikkeessa', price:'€11,50'},
            {name:'Grillattua porsasta chilikastikkeessa', price:'€13,50'},
            {name:'Härkää chilikastikkeessa', price:'€12,50'},
            {name:'Härkää ja sipulia', price:'€11,50'},
            {name:'Rapea härkää pikantikastikkeessa', price:'€16,50'},
            {name:'Härkää sha-cha kastikkeessa', price:'€13,50'},
            {name:'Härkää zichuan tapaan', price:'€13,50'},
            {name:'Härkää rautapannussa', price:'€13,50'},
            {name:'Härkää valkosipulikastikkeessa', price:'€12,50'},
            {name:'Härkää ja purjosipulia ', price:'€13,50'},
            {name:'Härkää currykastikkeessa', price:'€12,50'},
            {name:'Härkää sataykastikkeessa', price:'€12,50'},
            {name:'Härkää papurikkakastikkeessa', price:'€12,50'},
            {name:'Neljän pientä annosta', price:'€14,00'},
            {name:'To-fu ja vihanneksia', price:'€12,00'},
            {name:'To-fu chilikastikkeessa', price:'€12,00'},
            {name:'Peking ankka', price:'€17,50'},
            {name:'Ankka ja kiinalaisia sieniä', price:'€17,50'},
            {name:'kung-po ankka', price:'€17,50'},
            {name:'Paistettua nuudelia kanalla', price:'€9,50'},
            {name:'Paistettue nudelia katkarapua ja porsasta', price:'€10,50'},
            {name:'Paistettua nuudelia ja vihanneksia', price:'€9,50'},
            {name:'Nuudeleita singapoeen tapaan', price:'€12,00'},
            {name:'Paistettua risottoa kanalla', price:'€9,50'},
            {name:'Kantonilainen risottoa', price:'€10,50'},
            {name:'Toffeebanaani ja jäätetöä', price:'€5,00'},
            {name:'Friteerattua banaania ja jäätelöä', price:'€4,50'}];
    }

    returnTranslatedInformation(lang) {
        switch(lang) {
            case 'En':
                return this.translateToEnglish();
            case 'Fi':
                return this.translateToFinnish();
            case 'Cn':
                return this.translateToChinese();
            default:
                break;
        }
    }

    translateToChinese() {
        return {
            RestaurantName : '絲綢之路中餐館',
                welcomeMessage : ['全新丝绸之路餐馆于2015年9月正式开始营业！新餐馆的主人欢迎各位新老朋友继续支持我们全新的丝绸之路餐馆！','','感谢各位新老朋友！歡迎光臨絲綢之路中餐館！您的滿意是我們最大的欣慰！'],
            Etusivu : '首頁',
            Buffet: '自助餐',
            Ruokalista : '外卖',
            Tiedotteet : '動態信息',
            Yhteystiedot : '聯系方式',
            optionalBuffetTitle: '每周更新自助',
            openDay12: '星期一和星期二',
            openDay34: '星期三和星期四',
            openDay56: '星期五和星期六',
            everydayBuffet: this.buffetContentCn,
            buffetTitle: '每日自助',
            buffetOpenTimeTitle: '自助时间',
            differentBuffet: this.changingBuffetCn,
            contactTitle: '聯系方式',
            contactAddress: '地址',
            contactPhone: '電話',
            contactOpenTime: '營業時間',
            monday: '星期一',
            friday: '星期五',
            saturday: '星期六',
            sunday: '星期日',
            ChickenMenus: this.MenuChickerCn,
            BeefMenus: this.MenuBeefCn,
            DrinkMenus: this.MenuDrinkCn,
            MenuChickenCategory: '雞肉類',
            MenuBeefCategory: '牛肉類',
            MenuDrinkCategory: '飲料類',
            InfoTag: '最新信息',
            MenuTakeAwayText: '外卖',
            menuTakeAway: this.takeMenu,
            everydayOfferTitle: '每日特价外卖 (特价时间： 15:00 - 20:30）',
            everydayOfferContent: this.everydayOffer,
            everydayOfferTime: '特价外卖时间'
        }

    }

    translateToFinnish() {
        return {
            welcomeMessage : ['on perustettu syyskuussa 2015. Se sijaitsee keskuskatulla Jämsän keskustassa. Silkkitie oli Kiinan vanha kuuluisa tie.', 'Silkkitie oli joukko yhteenliittyneitä kauppareittejä, jotka kulkivat Aasian halki Kiinan Xi’anista Syyrian Antiokiaan ja muihin Lähi-idän ja Euroopan kohteisiin. Silkkitien kautta kuljetettiin silkkiä ja muita kauppatavaroita, kuten norsunluuta, kultaa ja jalokiviä pääasiassa karavaaneilla (Wikipedia).', 'Silkkitie Ravintolassa tarjotaan periteinen kiinanlainen ruokaa. Kiitos kaikille asiakkaille! Asiakas ja asiakkaiden mielipide on meille tärkein.'],
            RestaurantName : 'uusi Silkkitie Ravintola',
            Etusivu : 'Etusivu',
            Buffet: 'Buffetti',
            Ruokalista : 'Ottaa mukaan',
            Tiedotteet : 'Tiedotteet',
            Yhteystiedot : 'Yhteystiedot',
            optionalBuffetTitle: 'Viikon Buffetti',
            openDay12: 'Maanantai ja Tiistai',
            openDay34: 'Keskiviikko ja Torstai',
            openDay56: 'Perjantai ja Lauantai',
            everydayBuffet: this.buffetContentFi,
            buffetTitle: 'Päivän Buffetti',
            buffetOpenTimeTitle: 'Buffetti Aika',
            differentBuffet: this.changingBuffetFi,
            contactTitle: 'Yhteystiedot',
            contactAddress: 'Osoite',
            contactPhone: 'Puhelin',
            contactOpenTime: 'Aukioloajat',
            monday: 'Maanantai',
            friday: 'Perjantai',
            saturday: 'Lauantai',
            sunday: 'Sunnuntai',
            ChickenMenus: this.MenuChickerFi,
            BeefMenus: this.MenuBeefFi,
            DrinkMenus: this.MenuDrinkFi,
            MenuChickenCategory: 'Kana',
            MenuBeefCategory: 'Naudanliha',
            MenuDrinkCategory: 'Juoma',
            InfoTag: 'Viimeisimmät tiedotteet',
            MenuTakeAwayText: 'ottaa mukaan',
            menuTakeAway: this.takeMenu,
            everydayOfferTitle: 'Päivä Tarjous (ottaa mukaan) (Tarjous Aika: 15:00 - 20:30)',
            everydayOfferContent: this.everydayOffer,
            everydayOfferTime: 'Tarjous Aika'

        }

    }

    translateToEnglish() {
        return {
            welcomeMessage : ['Welcome! The new Silk Road Chinese Restaurant was started from September 2015! The restaurant is located in city center of Jämsä.',' Silk Road was an ancient network of trade routes that were central to cultural interaction through regions of the Asian continent connecting the West and East from China to the Mediterranean Sea (Wikipedia).','Silk Road restaurant offers you traditional Chinese food. Thank you to all of our customers! Your satisfaction is our top priority!'],
            RestaurantName : 'new Silk-Road Restaurant',
            Etusivu : 'Home',
            Buffet: 'Buffet',
            Ruokalista : 'Take Away',
            Tiedotteet : 'Information',
            Yhteystiedot : 'Contact',
            optionalBuffetTitle: 'Every Week Buffet',
            openDay12: 'Monday and Tuesday',
            openDay34: 'Wednesday and Thursday',
            openDay56: 'Friday and Saturday',
            everydayBuffet: this.buffetContentEn,
            buffetTitle: 'Everyday Buffet',
            buffetOpenTimeTitle: 'Buffet Time',
            differentBuffet: this.changingBuffetEn,
            contactTitle: 'Contact',
            contactAddress: 'Address',
            contactPhone: 'Phone',
            contactOpenTime: 'Open Time',
            monday: 'Monday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday',
            ChickenMenus: this.MenuChickerEn,
            BeefMenus: this.MenuBeefEn,
            DrinkMenus: this.MenuDrinkEn,
            MenuChickenCategory: 'Chicken',
            MenuBeefCategory: 'Beef',
            MenuDrinkCategory: 'Drink',
            InfoTag: 'Latest Info',
            MenuTakeAwayText: 'Take Away',
            menuTakeAway: this.takeMenu,
            everydayOfferTitle: 'Special offer for Take away (offer time: 15:00 - 20:30)',
            everydayOfferContent: this.everydayOffer,
            everydayOfferTime: 'Offer time'
        }
    }

}

export default (ngModule) => {
    ngModule.service('TranslateService', TranslateService);
};
