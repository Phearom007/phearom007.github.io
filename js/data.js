const posts = [
  {
    "id": 1,
    "price": '$ 1226',
    "title": "Casablanca",
    "image": "https://cdn-images.farfetch-contents.com/19/13/98/97/19139897_42449077_1000.jpg"
  },
  {
    "id": 2,
    "price": '$ 1049',
    "title": "JW Anderson ",
    "image": "https://cdn-images.farfetch-contents.com/19/24/93/65/19249365_42507216_1000.jpg"
  },
  {
    "id": 3,
    "price": '$ 760',
    "title": "Dsquared2",
    "image": "https://cdn-images.farfetch-contents.com/17/81/28/74/17812874_37688944_1000.jpg"
  },
  {
    "id": 4,
    "price": '$ 2074',
    "title": "Rick Owens",
    "image": "https://cdn-images.farfetch-contents.com/18/04/52/87/18045287_41199870_1000.jpg"
  },
  {
    "id": 5,
    "price": '$ 247',
    "title": "YMC",
    "image": "https://cdn-images.farfetch-contents.com/18/99/48/96/18994896_42464639_1000.jpg"
  },
  {
    "id": 6,
    "price": '$ 483',
    "title": "Lemaire ",
    "image": "https://cdn-images.farfetch-contents.com/19/31/40/85/19314085_42497466_1000.jpg"
  },
  {
    "id": 7,
    "price": '$ 9.99',
    "title": "A.P.C (military cotton shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/33/23/37/19332337_42542537_1000.jpg"
  },
  {
    "id": 8,
    "price": '$ 380',
    "title": "Endless Joy",
    "image": "https://cdn-images.farfetch-contents.com/19/09/18/72/19091872_41757772_1000.jpg"
  },
  {
    "id": 9,
    "price": '$ 547',
    "title": "Palm Angels",
    "image": "https://cdn-images.farfetch-contents.com/18/57/17/57/18571757_41881876_1000.jpg"
  },
  {
    "id": 10,
    "price": '$ 662',
    "title": "Marni",
    "image": "https://cdn-images.farfetch-contents.com/19/35/52/01/19355201_42499942_1000.jpg"
  },
  {
    "id": 11,
    "price": '$ 1093',
    "title": "visvim",
    "image": "https://cdn-images.farfetch-contents.com/19/20/60/00/19206000_42141235_1000.jpg"
  },
  {
    "id": 12,
    "price": '$ 667',
    "title": "Jacquemus",
    "image": "https://cdn-images.farfetch-contents.com/19/23/24/50/19232450_42150452_1000.jpg"
  },
  {
    "id": 13,
    "price": '$ 465',
    "title": "Thom Browne",
    "image": "https://cdn-images.farfetch-contents.com/17/70/99/86/17709986_37425033_1000.jpg"
  },
  {
    "id": 14,
    "price": '$ 535',
    "title": "JW Anderson ",
    "image": "https://cdn-images.farfetch-contents.com/18/41/22/88/18412288_39992301_1000.jpg"
  },
  {
    "id": 15,
    "price": '$ 790',
    "title": "Casablanca",
    "image": "https://cdn-images.farfetch-contents.com/18/92/11/25/18921125_41124093_1000.jpg"
  },
  {
    "id": 16,
    "price": '$ 598',
    "title": "Lemaire-patch-pocket button-up shirt",
    "image": "https://cdn-images.farfetch-contents.com/19/06/80/96/19068096_42002300_1000.jpg"
  },
  {
    "id": 17,
    "price": '$ 339',
    "title": "A.P.C.(military cotton shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/33/23/38/19332338_42540838_1000.jpg"
  },
  {
    "id": 18,
    "price": '$ 908',
    "title": "AMIRI-logo-print check pattern shirt ",
    "image": "https://cdn-images.farfetch-contents.com/18/98/46/24/18984624_41528418_1000.jpg"
  },
  {
    "id": 19,
    "price": '$ 448',
    "title": "Endless Joy - leopard-print short-sleeve shirt",
    "image": "https://cdn-images.farfetch-contents.com/19/07/52/81/19075281_41923990_1000.jpg"
  },
  {
    "id": 20,
    "price": '$ 520',
    "title": "Nanushka - short-sleeve print shirt",
    "image": "https://cdn-images.farfetch-contents.com/18/38/72/66/18387266_39771691_1000.jpg"
  },
  {
    "id": 21,
    "price": '$ 391',
    "title": "STORY mfg (mix-print linen shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/34/21/72/18342172_42320049_1000.jpg"
  },
  {
    "id": 22,
    "price": '$ 797',
    "title": "Rhude (paisley-print shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/27/77/32/19277732_42346780_1000.jpg"
  },
  {
    "id": 23,
    "price": '$ 916',
    "title": "Off-White (graffiti-print camp collar shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/21/88/04/19218804_42367664_1000.jpg"
  },
  {
    "id": 24,
    "price": '$ 1280',
    "title": "Balenciaga (short-sleeve silk shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/78/06/84/18780684_41067879_1000.jpg"
  },
  {
    "id": 25,
    "price": '$ 451',
    "title": "Our Legacy (button-up satin shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/35/77/52/18357752_41639792_1000.jpg"
  },
  {
    "id": 26,
    "price": '$ 245',
    "title": "mfpen (Reception long-sleeve shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/46/83/10/18468310_42265544_1000.jpg"
  },
  {
    "id": 27,
    "price": '$ 790',
    "title": "Raf Simons (logo-patch panelled shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/77/32/60/18773260_41015491_1000.jpg"
  },
  {
    "id": 28,
    "price": '$ 490',
    "title": "ERL (long-sleeve corduroy checked shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/25/37/15/19253715_42244819_1000.jpg"
  },
  {
    "id": 29,
    "price": '$ 765',
    "title": "FVETEMENTS",
    "image": "https://cdn-images.farfetch-contents.com/18/32/55/56/18325556_39993184_1000.jpg"
  },
  {
    "id": 30,
    "price": '$ 1053',
    "title": "Lemaire (long-sleeved patch-pocket boxy shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/18/62/11/82/18621182_42383906_1000.jpg"
  },
  {
    "id": 31,
    "price": '$ 570',
    "title": "Off-White (tartan-check logo-embroidered shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/70/50/55/18705055_40548948_1000.jpg"
  },
  {
    "id": 32,
    "price": '$ 334',
    "title": "Our Legacy (Jazz Hypnosis-print shirtt)",
    "image": "https://cdn-images.farfetch-contents.com/19/22/70/96/19227096_42209776_1000.jpg"
  },
  {
    "id": 33,
    "price": '$ 820',
    "title": "Casablanca (illustration-style print silk shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/98/56/10/18985610_41383297_1000.jpg"
  },
  {
    "id": 34,
    "price": '$ 420',
    "title": "Nanushka (floral animal-print shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/18/03/39/32/18033932_40507692_1000.jpg"
  },
  {
    "id": 35,
    "price": '$ 583',
    "title": "Endless Joy (graphic print silk shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/45/00/50/18450050_42174305_1000.jpg"
  },
  {
    "id": 36,
    "price": '$ 314',
    "title": "SMR Days",
    "image": "https://cdn-images.farfetch-contents.com/18/47/29/25/18472925_41145902_1000.jpg"
  },
  {
    "id": 37,
    "price": '$ 420',
    "title": "Heron Preston",
    "image": " https://cdn-images.farfetch-contents.com/18/71/02/28/18710228_41566108_1000.jpg"
  },
  {
    "id": 38,
    "price": '$ 490',
    "title": "Song For The Mute",
    "image": "https://cdn-images.farfetch-contents.com/18/56/76/92/18567692_41845220_1000.jpg"
  },
  {
    "id": 39,
    "price": '$ 804',
    "title": "Namacheko",
    "image": "https://cdn-images.farfetch-contents.com/19/10/38/18/19103818_41954835_1000.jpg"
  },
  {
    "id": 40,
    "price": '$ 178',
    "title": "There Was One (striped organic-cotton shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/60/00/56/18600056_40754561_1000.jpg"
  },
  {
    "id": 41,
    "price": '$ 749',
    "title": "Raf Simons (logo-patch long-sleeved shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/68/75/47/18687547_41161112_1000.jpg"
  },
  {
    "id": 42,
    "price": '$ 999.99',
    "title": "Marni (check button-down shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/18/45/80/50/18458050_40350304_1000.jpg"
  },
  {
    "id": 43,
    "price": '$ 616',
    "title": "Lemaire (long-sleeve plaid shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/02/15/55/19021555_41761465_1000.jpg"
  },
  {
    "id": 44,
    "price": '$ 645',
    "title": "Song For The Mute (split-tone short-sleeve shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/56/69/64/18566964_41422691_1000.jpg"
  },
  {
    "id": 45,
    "price": '$ 545',
    "title": "Wales Bonner (Sonny striped shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/35/77/95/18357795_40879083_1000.jpg"
  },
  {
    "id": 46,
    "price": '$ 1027',
    "title": "The Elder Statesman (tie-dye long-sleeved shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/18/35/81/44/18358144_41410416_1000.jpg"
  },
  {
    "id": 47,
    "price": '$ 528',
    "title": "Jacquemus (embroidered check pattern shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/69/52/47/18695247_41789661_1000.jpg"
  },
  {
    "id": 48,
    "price": '$ 448',
    "title": "Sunnei (no-fastening striped shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/28/13/00/19281300_42496746_1000.jpg"
  },
  {
    "id": 49,
    "price": '$ 561',
    "title": "Burberry (embroidered-logo long-sleeve shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/23/21/07/19232107_42123363_1000.jpg"
  },
  {
    "id": 50,
    "price": '$ 542',
    "title": "Off-White (Caravaggio-Arrows overshirt)",
    "image": "https://cdn-images.farfetch-contents.com/17/59/50/97/17595097_b7c5b491-8dbd-4caa-a21f-31fe2d9c5eec_1000.jpg"
  },
  {
    "id": 51,
    "price": '$ 298',
    "title": "Studio Nicholson (long-sleeved cotton shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/56/81/07/18568107_42106309_1000.jpg"
  },
  {
    "id": 52,
    "price": '$ 557',
    "title": "Heron Preston stripe-detail popeline shirt",
    "image": "https://cdn-images.farfetch-contents.com/18/70/88/82/18708882_42027896_1000.jpg"
  },
  {
    "id": 53,
    "price": '$ 1208',
    "title": "Jil Sander",
    "image": "https://cdn-images.farfetch-contents.com/18/41/52/87/18415287_42088771_1000.jpg"
  },
  {
    "id": 54,
    "price": '$ 1009',
    "title": "Palm Angels ",
    "image": "https://cdn-images.farfetch-contents.com/18/57/21/76/18572176_42315008_1000.jpg"
  },
  {
    "id": 55,
    "price": '$ 2060',
    "title": "Zegna",
    "image": "https://cdn-images.farfetch-contents.com/18/76/12/80/18761280_40880378_1000.jpg"
  },
  {
    "id": 56,
    "price": '$ 541',
    "title": "Lemaire",
    "image": "https://cdn-images.farfetch-contents.com/19/17/42/87/19174287_42041903_1000.jpg"
  },
  {
    "id": 57,
    "price": '$ 292',
    "title": "Our Legacy",
    "image": "https://cdn-images.farfetch-contents.com/18/35/81/56/18358156_42123380_1000.jpg"
  },
  {
    "id": 58,
    "price": '$ 205',
    "title": "Phipps ",
    "image": "https://cdn-images.farfetch-contents.com/18/52/77/32/18527732_41002614_1000.jpg"
  },
  {
    "id": 59,
    "price": '$ 415',
    "title": "Nanushka",
    "image": "https://cdn-images.farfetch-contents.com/18/04/09/12/18040912_38648024_1000.jpg"
  },
  {
    "id": 60,
    "price": '$ 296',
    "title": "Paul Smith",
    "image": "https://cdn-images.farfetch-contents.com/19/17/48/35/19174835_42337586_1000.jpg"
  },
  {
    "id": 61,
    "price": '$ 523',
    "title": "Endless Joy ",
    "image": "https://cdn-images.farfetch-contents.com/18/44/84/72/18448472_42163700_1000.jpg"
  },
  {
    "id": 62,
    "price": '$ 662',
    "title": "AMBUSH",
    "image": "https://cdn-images.farfetch-contents.com/18/70/37/41/18703741_41616554_1000.jpg"
  },
  {
    "id": 63,
    "price": '$ 825',
    "title": "Casablanca",
    "image": "https://cdn-images.farfetch-contents.com/18/51/07/21/18510721_41864222_1000.jpg"
  },
  {
    "id": 64,
    "price": '$ 351',
    "title": "Opening Ceremony",
    "image": "https://cdn-images.farfetch-contents.com/18/74/95/07/18749507_41159962_1000.jpg"
  },
  {
    "id": 65,
    "price": '$ 462',
    "title": "Nanushka (Camp faux-leather shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/18/04/08/19/18040819_38644623_1000.jpg"
  },
  {
    "id": 66,
    "price": '$ 1047',
    "title": "VTMNTS (zip-up checked shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/35/77/63/18357763_42015424_1000.jpg"
  },
  {
    "id": 67,
    "price": '$ 964',
    "title": "Namacheko (embroidered pointed-collar shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/10/38/19/19103819_42270093_1000.jpg"
  },
  {
    "id": 68,
    "price": '$ 445',
    "title": "Dsquared2 (classic button-up shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/09/35/71/19093571_41783112_1000.jpg"
  },
  {
    "id": 69,
    "price": '$ 428',
    "title": "Nanushka (stripe-print flap-pockets shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/04/07/61/18040761_40107298_1000.jpg"
  },
  {
    "id": 70,
    "price": '$ 395',
    "title": "Jacquemus (embroidered-logo long-sleeve shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/19/10/47/56/19104756_41887307_1000.jpg"
  },
  {
    "id": 71,
    "price": '$ 351',
    "title": "Just Cavalli (illustration-print button-up shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/58/00/48/18580048_40401945_1000.jpg"
  },
  {
    "id": 72,
    "price": '$ 921',
    "title": "Casablanca (graphic-print silk shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/10/52/92/19105292_42018639_1000.jpg"
  },
  {
    "id": 73,
    "price": '$ 905',
    "title": "AMIRI (check-print shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/99/50/03/18995003_41432128_1000.jpg"
  },
  {
    "id": 74,
    "price": '$ 615',
    "title": "Dsquared2 (checked long-sleeve shirt) ",
    "image": "https://cdn-images.farfetch-contents.com/19/12/60/12/19126012_41848780_1000.jpg"
  },
  {
    "id": 75,
    "price": '$ 789',
    "title": "Raf Simons (logo-patch shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/91/89/43/18918943_41194185_1000.jpg"
  },
  {
    "id": 76,
    "price": '$ 247',
    "title": "YMC (abstract-print button-up shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/22/85/80/18228580_40012827_1000.jpg"
  },
  {
    "id": 77,
    "price": '$ 272',
    "title": "Paul Smith (graphic-print short-sleeve shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/76/57/40/18765740_40590364_1000.jpg"
  },
  {
    "id": 78,
    "price": '$ 593',
    "title": "Endless Joy (The Wanderer jungle-print shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/09/60/07/19096007_41775394_1000.jpg"
  },
  {
    "id": 79,
    "price": '$ 662',
    "title": "AMBUSH (logo-patch short-sleeve shirt)",
    "image": "https://cdn-images.farfetch-contents.com/18/70/49/86/18704986_41200932_1000.jpg"
  },
  {
    "id": 80,
    "price": '$ 1313',
    "title": "Dolce & Gabbana (grafitti-print short-sleeve T-shirt)",
    "image": "https://cdn-images.farfetch-contents.com/19/07/15/33/19071533_41672085_1000.jpg"
  },
];

const menus = [
  { href: "?content=home", title: "Home" },
  { href: "?content=shop", title: "Shop" },
  // { href: "?content=blog", title: "Blog" },
  { href: "?content=about", title: "About" },
  { href: "?content=contact", title: "Contact" },
];

window.posts = posts;
window.menus = menus;