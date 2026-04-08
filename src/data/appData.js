export const APP_DATA = {
  shows: [
    {
      id: "ccw",
      title: "Culinary Class Wars",
      platform: "Netflix",
      banner: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80",
      description: "100 chefs enter. 80 'Black Spoons' challenge 20 'White Spoons' for culinary supremacy.",
      seasons: [
        { number: 1, name: "The Beginning", chefs: ["napoli-matfia", "edward-lee", "triple-star", "queen-of-dim-sum"] },
        {
          number: 2,
          name: "The Return",
          chefs: [
            "paik-jong-won",
            "anh-sung-jae",
            "choi-kang-rok",
            "kim-do-yun",
            "lee-jun",
            "cheon-sang-hyun",
            "venerable-sunjae",
            "son-jong-won",
            "hou-deok-juk",
            "jung-ho-young",
            "jennie-wallden",
            "shim-sung-chul",
            "song-hoon",
            "kim-hee-eun",
            "choi-yu-gang",
            "kim-geon",
            "brewmaster-yun",
            "culinary-monster",
            "im-seong-keun",
            "culinary-innovator",
            "three-star-killer",
            "little-tiger"
          ]
        }
      ]
    },
    {
      id: "iron-chef",
      title: "Iron Chef: Quest for a Legend",
      platform: "Netflix",
      banner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
      description: "The gold standard of culinary competitions reimagined.",
      seasons: [
        { number: 1, name: "Iron Legends", chefs: ["curtis-stone", "edward-lee"] }
      ]
    },
    {
      id: "top-chef",
      title: "Top Chef",
      platform: "Bravo",
      banner: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
      description: "America's longest-running culinary competition. 15 chefs compete for the biggest prize in the show's history — $250,000 and a $125,000 flight credit.",
      seasons: [
        {
          number: 22,
          name: "Destination Canada",
          chefs: [
            "anya-el-wattar", "paula-endara", "tristen-epps", "corwin-hemming",
            "katianna-hong", "lana-lagomarsini", "henry-lu", "vincenzo-loseto",
            "zubair-mohajir", "cesar-murillo", "massimo-piedimonte", "bailey-sullivan",
            "kat-turner", "shuai-wang", "mimi-weissenborn"
          ]
        }
      ]
    }
  ],
  chefs: [
    {
      id: "napoli-matfia",
      moniker: "Napoli Matfia",
      real_name: "Kwon Sung-jun",
      class: "Black Spoon",
      rank: "Winner",
      image: "https://newsimg.koreatimes.co.kr/2024/10/22/78f56440-67e4-4cc0-bf95-11b7de2d634a.jpg",
      bio: "Master of Italian pasta and intense focus. Famously won the first season of Culinary Class Wars with his emotional 'Grandmother's Pasta' dish.",
      restaurants: [{
        id: "v1",
        name: "Via Toledo Pasta Bar",
        location: "Seoul",
        coords: [37.5326, 126.9900],
        cuisine: "Italian",
        specialty: "Chestnut Tiramisu",
        website_url: "https://viatoledo.kr",
        resy_url: "https://resy.com/cities/sel/via-toledo"
      }],
      appearances: [{ showId: "ccw", season: 1, result: "Winner" }]
    },
    {
      id: "edward-lee",
      real_name: "Edward Lee",
      class: "White Spoon",
      rank: "Runner-up",
      bio: "Iron Chef winner and James Beard nominee. Fuses Korean roots with Southern US soul.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
      restaurants: [
        {
          id: "e1",
          name: "610 Magnolia",
          location: "Louisville, KY",
          coords: [38.2291, -85.7594],
          cuisine: "Modern American",
          specialty: "Aged Duck",
          website_url: "https://610magnolia.com",
          resy_url: "https://resy.com/cities/lou/610-magnolia"
        },
        {
          id: "e2",
          name: "Nami",
          location: "Louisville, KY",
          coords: [38.2527, -85.7585],
          cuisine: "Modern Korean",
          specialty: "Korean BBQ",
          website_url: "https://namilouisville.com",
          resy_url: "https://resy.com/cities/lou/nami"
        }
      ],
      appearances: [
        { showId: "ccw", season: 1, result: "Runner-up" },
        { showId: "iron-chef", season: 1, result: "Winner" }
      ]
    },
    {
      id: "triple-star",
      moniker: "Triple Star",
      real_name: "Kang Seung-won",
      class: "Black Spoon",
      rank: "Top 8",
      bio: "Trained under Michelin 3-star icons. Famous for surgical precision and minimalist plating.",
      image: "https://newsimg.koreatimes.co.kr/2024/10/22/49e3a857-0271-4e7e-8a32-162e2f3b64ff.jpg",
      restaurants: [{
        id: "t1",
        name: "Trid",
        location: "Seoul",
        coords: [37.5219, 127.0411],
        cuisine: "Contemporary",
        specialty: "Vegetable Terrine",
        website_url: "https://tridseoul.com",
        resy_url: "https://resy.com/cities/sel/trid"
      }],
      appearances: [{ showId: "ccw", season: 1, result: "Top 8" }]
    },
    {
      id: "queen-of-dim-sum",
      moniker: "Queen of Dim Sum",
      real_name: "Jung Ji-sun",
      class: "White Spoon",
      rank: "Top 8",
      bio: "The first female star chef of Chinese cuisine in Korea. Renowned for her incredible 'Pulled Sugar' technique and deep Dim Sum mastery.",
      image: "https://newsimg.koreatimes.co.kr/2024/10/22/167d0437-f8ce-439b-b479-e01de876cd88.jpg",
      restaurants: [{
        id: "q1",
        name: "Tian Mi Mi",
        location: "Seoul",
        coords: [37.5250, 127.0390],
        cuisine: "Chinese",
        specialty: "Dim Sum Platter",
        website_url: "https://tianmimi.co.kr",
        resy_url: "https://resy.com/cities/sel/tian-mi-mi"
      }],
      appearances: [{ showId: "ccw", season: 1, result: "Top 8" }]
    },
    {
      id: "paik-jong-won",
      moniker: "The Master Judge",
      real_name: "Paik Jong-won",
      class: "Judge",
      rank: "Judge",
      image: "https://cdn.mos.cms.futurecdn.net/yLM8SYbnJaiib5m9o7fEoA.jpg",
      bio: "The face of Korean F&B. Known for his keen business sense and deep knowledge of traditional street food and mass-market dining.",
      restaurants: [{
        id: "p1",
        name: "The Born Korea",
        location: "Seoul",
        coords: [37.5050, 127.0250],
        cuisine: "Korean",
        specialty: "Paik's Coffee",
        website_url: "http://www.theborn.co.kr",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Lead Judge" }]
    },
    {
      id: "anh-sung-jae",
      moniker: "The Only 3-Star",
      real_name: "Anh Sung-jae",
      class: "Judge",
      rank: "Judge",
      image: "https://cdn.mos.cms.futurecdn.net/PUJUuitk79GzuECCr37AfK.jpg",
      bio: "The only Michelin 3-star chef in Korea. His palette is famously strict, evaluating chefs on their fundamental seasoning and execution.",
      restaurants: [{
        id: "asj1",
        name: "Mosu Seoul",
        location: "Seoul",
        coords: [37.5385, 127.0012],
        cuisine: "Modern Innovative",
        specialty: "Small Abalone Tart",
        website_url: "https://mosuseoul.com",
        resy_url: "https://resy.com/cities/sel/mosu"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Lead Judge" }]
    },
    {
      id: "curtis-stone",
      moniker: "Iron Chef Stone",
      real_name: "Curtis Stone",
      class: "Iron Chef",
      rank: "Legend",
      bio: "Australian celebrity chef specializing in seasonal, farm-to-table cuisine. Master of market-driven fine dining.",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop",
      restaurants: [{
        id: "cs1",
        name: "Maude",
        location: "Beverly Hills, CA",
        coords: [34.0689, -118.4014],
        cuisine: "Market Driven",
        specialty: "Seasonal Tasting Menu",
        website_url: "https://mauderestaurant.com",
        resy_url: "https://resy.com/cities/la/maude"
      }],
      appearances: [{ showId: "iron-chef", season: 1, result: "Legend" }]
    },
    {
      id: "tbd-white-spoon",
      moniker: "Global Master",
      real_name: "Secret Participant",
      class: "White Spoon",
      rank: "Competing",
      bio: "A high-profile international chef rumored to be joining the fray in the upcoming season.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop",
      restaurants: [{
        id: "s1",
        name: "Global Kitchen",
        location: "Paris",
        coords: [48.8566, 2.3522],
        cuisine: "French",
        specialty: "Mystery Dish",
        website_url: "#",
        resy_url: "#"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Active" }]
    },

    // ——— Culinary Class Wars Season 2: Judges (same as S2) ———
    // Judges paik-jong-won and anh-sung-jae already listed above with S2 Lead Judge

    // ——— Season 2: Hidden White Spoons (returning from S1) ———
    {
      id: "choi-kang-rok",
      moniker: "Hidden White Spoon",
      real_name: "Choi Kang-rok",
      class: "White Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/gnWuwWxtjZrsRYDB48Mbfe.jpg",
      bio: "Winner of MasterChef Korea Season 2 (2013). Celebrity chef and TV personality; hosted Netflix's The Blank Menu For You. Returned as a Hidden White Spoon to prove himself again.",
      restaurants: [{
        id: "ckr1",
        name: "Neo (closed Dec 2024)",
        location: "Seoul",
        coords: [37.5172, 127.0473],
        cuisine: "Japanese",
        specialty: "Japanese fine dining",
        website_url: "#",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "kim-do-yun",
      moniker: "Hidden White Spoon",
      real_name: "Kim Do-yun",
      class: "White Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/5UV9mT7QN5sasUtQ6bWKp3.jpg",
      bio: "Chef-owner of YUN (1-star Michelin, four years) and Myeon Seoul (Bib Gourmand). Known for traditional Korean fermentation and aging. Returned as a Hidden White Spoon; in S1 he wore headphones while cooking to manage panic disorder.",
      restaurants: [
        {
          id: "kdy1",
          name: "YUN",
          location: "Seoul",
          coords: [37.5219, 127.0411],
          cuisine: "Korean Fine Dining",
          specialty: "Fermentation & aging",
          website_url: "https://guide.michelin.com/us/en/seoul-capital-area/kr-seoul/restaurant/yun",
          resy_url: "https://resy.com/cities/sel/yun"
        },
        {
          id: "kdy2",
          name: "Myeon Seoul",
          location: "Seoul",
          coords: [37.5230, 127.0400],
          cuisine: "Noodles",
          specialty: "Bib Gourmand noodles",
          website_url: "https://guide.michelin.com/us/en/seoul-capital-area/kr-seoul/restaurant/myeon-seoul",
          resy_url: "https://resy.com/cities/sel/myeon-seoul"
        }
      ],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },

    // ——— Season 2: White Spoons ———
    {
      id: "lee-jun",
      real_name: "Lee Jun",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/hwfzQSV9V2HLJJtAxHUjMQ.png",
      bio: "Chef-owner of Soigné, one of only nine two-Michelin-star restaurants in South Korea. CIA grad; trained at Per Se and Lincoln in NYC. Considered the first to bring bar-style fine dining to Korea.",
      restaurants: [{
        id: "lj1",
        name: "Soigné",
        location: "Seoul",
        coords: [37.5240, 127.0280],
        cuisine: "Contemporary",
        specialty: "Seasonal tasting menu",
        website_url: "https://www.instagram.com/soignejunlee",
        resy_url: "https://resy.com/cities/sel/soigne"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "cheon-sang-hyun",
      real_name: "Cheon Sang-hyun",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/AS9Nk2h3JyiVMtBKtad7f5.png",
      bio: "Former executive chef at the Blue House (Cheong Wa Dae), serving five South Korean presidents over 20 years.",
      restaurants: [{
        id: "csh1",
        name: "Chunsang Chef",
        location: "Seoul",
        coords: [37.5180, 127.0300],
        cuisine: "Korean / Presidential",
        specialty: "Blue House–style cuisine",
        website_url: "https://www.instagram.com/chunsang_chef",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "venerable-sunjae",
      moniker: "Venerable Sunjae",
      real_name: "Venerable Sunjae",
      class: "White Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/xUBHkwW4Lwm36f9VJtobUP.png",
      bio: "Korea's first master of temple cuisine—cooking without meat, garlic, onion, or leeks. Became a Buddhist monk in the 1980s and has spread awareness of Buddhist and healthy eating. On the show, Black Spoons said the White Spoons look like Black Spoons next to her.",
      restaurants: [{
        id: "vs1",
        name: "Temple Cuisine Studio",
        location: "Korea",
        coords: [37.5665, 126.9780],
        cuisine: "Temple / Buddhist",
        specialty: "Plant-based temple cuisine",
        website_url: "#",
        resy_url: "#"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "son-jong-won",
      real_name: "Son Jong-won",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/kjKsoCRpUgfyefiRHwCV3H.png",
      bio: "The only chef in South Korea to operate two separate one-star Michelin restaurants: L'Amant Secret (French) and Eatanic Garden (Korean). CIA grad; trained at Noma, Benu, Quince, and Coi. Regular on Chef & My Fridge.",
      restaurants: [
        {
          id: "sjw1",
          name: "L'Amant Secret",
          location: "Seoul",
          coords: [37.5200, 127.0350],
          cuisine: "French",
          specialty: "French fine dining",
          website_url: "https://www.instagram.com/lamant_secret",
          resy_url: "https://resy.com/cities/sel/lamant-secret"
        },
        {
          id: "sjw2",
          name: "Eatanic Garden",
          location: "Seoul",
          coords: [37.5220, 127.0360],
          cuisine: "Korean",
          specialty: "Korean fine dining",
          website_url: "https://www.instagram.com/eatanicgarden",
          resy_url: "https://resy.com/cities/sel/eatanic-garden"
        }
      ],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "hou-deok-juk",
      real_name: "Hou Deok-juk",
      class: "White Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/CubJLAHJ8GVnygmrNobt8f.png",
      bio: "Master of Chinese cuisine for over 57 years. Executive chef at one-star Haobin; known for Buddha Jumps Over the Wall. Received the MICHELIN Mentor Chef Award in 2024. Called a legend of Korean culinary history on the show.",
      restaurants: [{
        id: "hdj1",
        name: "Haobin",
        location: "Seoul",
        coords: [37.5280, 127.0250],
        cuisine: "Chinese",
        specialty: "Buddha Jumps Over the Wall",
        website_url: "https://guide.michelin.com/us/en/seoul-capital-area/kr-seoul/restaurant/haobin",
        resy_url: "https://resy.com/cities/sel/haobin"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "jung-ho-young",
      real_name: "Jung Ho-young",
      class: "White Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/DaBuTGNepwZgwMXG5pW5qb.png",
      bio: "Popular Japanese-cuisine chef and TV personality; longtime cast member on Chef & My Fridge. Chef-owner of the Kaden group: Udon Kaden, Izakaya Kaden, and locations in Hapjeong, Jeju, Apgujeong, and Bucheon.",
      restaurants: [{
        id: "jhy1",
        name: "Udon Kaden",
        location: "Seoul",
        coords: [37.5500, 126.9200],
        cuisine: "Japanese",
        specialty: "Udon & izakaya",
        website_url: "https://www.instagram.com/jung_hoyoung_caden_",
        resy_url: "https://resy.com/cities/sel/kaden"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "jennie-wallden",
      real_name: "Jennie Walldén",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/xRTexWmjGRUcVJEt6WcVpU.png",
      bio: "Korean-Swedish chef; won MasterChef Sweden 2013. One of Sweden's best-selling cookbook authors. Owns NAMU (modern Korean-Scandinavian), Gaji bar, and the condiment brand Uma. Grew up in Korea, lived in Italy, London, and Sweden.",
      restaurants: [{
        id: "jw1",
        name: "NAMU",
        location: "Stockholm",
        coords: [59.3293, 18.0686],
        cuisine: "Korean-Scandinavian",
        specialty: "Modern fine dining",
        website_url: "https://www.instagram.com/namurestaurant",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "shim-sung-chul",
      real_name: "Shim Sung-chul",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/GRFWsgwRfyL8rc7FrPcgrW.png",
      bio: "NYC-based chef-owner of one-star Kochi (skewers) and one-star Mari (hand rolls), plus Don Don Korean BBQ, Marine Handroll Bar, and Gui steakhouse. Trained at Park Hyatt Seoul and the CIA.",
      restaurants: [
        {
          id: "ssc1",
          name: "Kochi",
          location: "New York, NY",
          coords: [40.7614, -73.9776],
          cuisine: "Korean skewers",
          specialty: "Michelin 1-star skewers",
          website_url: "https://www.kochinyc.com",
          resy_url: "https://resy.com/cities/ny/kochi"
        },
        {
          id: "ssc2",
          name: "Mari",
          location: "New York, NY",
          coords: [40.7620, -73.9780],
          cuisine: "Hand rolls",
          specialty: "Michelin 1-star hand rolls",
          website_url: "https://marinyc.com",
          resy_url: "https://resy.com/cities/ny/mari"
        }
      ],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "song-hoon",
      real_name: "Song Hoon",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/FbvimpwkBqvN5gkTiwDWfa.png",
      bio: "Legend of Korean fine dining; former sous chef at Eleven Madison Park. Runs Crown Pig in Seoul and Jeju (Korean native pork). TV personality and judge on MasterChef Korea Season 4.",
      restaurants: [{
        id: "sh1",
        name: "Crown Pig",
        location: "Seoul",
        coords: [37.5050, 127.0250],
        cuisine: "Korean",
        specialty: "Korean native pork",
        website_url: "https://www.instagram.com/chefhoonsong",
        resy_url: "https://resy.com/cities/sel/crown-pig"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "kim-hee-eun",
      real_name: "Kim Hee-eun",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/S6toV2QxTGjtQ9DU8zyf53.png",
      bio: "Chef-owner of SOUL (1-star Michelin since 2023) and Egg & Flour (Bib Gourmand). Focuses on transmitting emotion through food; overcame her father's opposition to attend culinary school. Mentor to Black Spoon Little Tiger.",
      restaurants: [
        {
          id: "khe1",
          name: "SOUL",
          location: "Seoul",
          coords: [37.5270, 127.0270],
          cuisine: "Korean fine dining",
          specialty: "Emotion through food",
          website_url: "https://www.instagram.com/souldining_seoul",
          resy_url: "https://resy.com/cities/sel/soul"
        },
        {
          id: "khe2",
          name: "Egg & Flour",
          location: "Seoul",
          coords: [37.5260, 127.0280],
          cuisine: "Fresh pasta",
          specialty: "Bib Gourmand pasta",
          website_url: "https://www.instagram.com/eggnflour_pasta",
          resy_url: "https://resy.com/cities/sel/egg-flour"
        }
      ],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "choi-yu-gang",
      real_name: "Choi Yu-gang",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/2kxikTySCmPwhVoynFwhrG.png",
      bio: "Chef-owner of one-star Kojacha, where Korean chefs serve Japanese and Chinese cuisine. Worked at Shilla Hotel for 16 years before opening Kojacha.",
      restaurants: [{
        id: "cyg1",
        name: "Kojacha",
        location: "Seoul",
        coords: [37.5190, 127.0310],
        cuisine: "Korean / Japanese / Chinese",
        specialty: "Ko-Ja-Cha concept",
        website_url: "https://www.instagram.com/kojacha.official",
        resy_url: "https://resy.com/cities/sel/kojacha"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "kim-geon",
      real_name: "Kim Geon",
      class: "White Spoon",
      rank: "White Spoon",
      image: "https://cdn.mos.cms.futurecdn.net/KCdtqj7yQmMCSUXk7XKY6i.png",
      bio: "Powerhouse of contemporary Japanese cuisine. Owns one-star Goryori Ken (seafood) and the izakaya Ichie. Showcases seasonal ingredients and creative intuition.",
      restaurants: [
        {
          id: "kg1",
          name: "Goryori Ken",
          location: "Seoul",
          coords: [37.5210, 127.0380],
          cuisine: "Japanese seafood",
          specialty: "Michelin 1-star seasonal",
          website_url: "https://guide.michelin.com/us/en/seoul-capital-area/kr-seoul/restaurant/goryori-ken",
          resy_url: "https://resy.com/cities/sel/goryori-ken"
        },
        {
          id: "kg2",
          name: "Ichie",
          location: "Seoul",
          coords: [37.5200, 127.0390],
          cuisine: "Izakaya",
          specialty: "Japanese pub",
          website_url: "https://www.instagram.com/ichieseoul",
          resy_url: "https://resy.com/cities/sel/ichie"
        }
      ],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },

    // ——— Season 2: Notable Black Spoons ———
    {
      id: "brewmaster-yun",
      moniker: "Brewmaster Yun",
      real_name: "Nara Yun",
      class: "Black Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/6r8YeNuWqDRA8TS7torU4U.jpg",
      bio: "Owner of Haebangchon Yunjudang (jumak) and Yunjudan Brewery. Brews traditional Korean alcohol for over 10 years; patrons call her jumo (Joseon-era female barkeep). Author of Makgeolli Recipes for All Four Seasons.",
      restaurants: [{
        id: "by1",
        name: "Yunjudang",
        location: "Seoul",
        coords: [37.5480, 126.9910],
        cuisine: "Korean jumak",
        specialty: "Home-brewed liquor & Korean dishes",
        website_url: "https://www.instagram.com/yunjudang",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "culinary-monster",
      moniker: "Culinary Monster",
      real_name: "Hasung Lee",
      class: "Black Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/nZRTHUogCqkgJmFJwcSzVD.jpg",
      bio: "Former head chef at NYC's two-Michelin-star Atomix; ex–French Laundry sous chef. Also worked at Geranium and Gramercy Tavern. Preparing to open his own restaurant Oyatte in New York. One of the few Black Spoons whose real name was known from the start.",
      restaurants: [{
        id: "cm1",
        name: "Oyatte (opening)",
        location: "New York, NY",
        coords: [40.7484, -73.9857],
        cuisine: "Fine dining",
        specialty: "TBD",
        website_url: "https://www.hasunglee.com",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "im-seong-keun",
      real_name: "Im Seong-keun",
      class: "Black Spoon",
      rank: "Top 7",
      image: "https://cdn.mos.cms.futurecdn.net/7TnJUxpeAh2DDPAwm6pTML.png",
      bio: "Winner of Hansik Battle (Korean Food War) Season 3. Runs Imjjang TV on YouTube. Preparing to open a restaurant in Paju City.",
      restaurants: [{
        id: "isk1",
        name: "Imjjang (Paju, opening)",
        location: "Paju",
        coords: [37.7599, 126.7800],
        cuisine: "Korean",
        specialty: "Hansik Battle winner cuisine",
        website_url: "https://www.instagram.com/imchef00",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Top 7 Finalist" }]
    },
    {
      id: "culinary-innovator",
      moniker: "Culinary Innovator",
      real_name: "Shin Dong-min",
      class: "Black Spoon",
      rank: "Competing",
      image: "https://cdn.mos.cms.futurecdn.net/Gte4eiaVM6xyXRSrFuarZG.jpg",
      bio: "Japanese-cuisine chef with over 25 years of experience. Helped introduce molecular gastronomy to Korea in 2006. Beloved by White Spoons, who revealed his name early. Purposely applied as a Black Spoon.",
      restaurants: [{
        id: "ci1",
        name: "Chef Shin Dong-min",
        location: "Seoul",
        coords: [37.5320, 127.0300],
        cuisine: "Japanese / Molecular",
        specialty: "Molecular gastronomy",
        website_url: "https://www.instagram.com/chef.shindongmin",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "three-star-killer",
      moniker: "Three Star Killer",
      real_name: "Jinho An",
      class: "Black Spoon",
      rank: "Competing",
      bio: "CIA grad; six years at NYC's three-star Per Se, then chef de cuisine at Monsieur Benjamin Seoul and former sous chef at judge Ahn Sung-jae's Mosu. Impressive fine-dining resume as an underdog.",
      image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=400&h=400&fit=crop",
      restaurants: [{
        id: "tsk1",
        name: "Monsieur Benjamin Seoul",
        location: "Seoul",
        coords: [37.5250, 127.0280],
        cuisine: "French",
        specialty: "Fine dining",
        website_url: "#",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },
    {
      id: "little-tiger",
      moniker: "Little Tiger",
      real_name: "Kim Si-hyeon",
      class: "Black Spoon",
      rank: "Competing",
      bio: "Chef at one-star Solbam (Korean contemporary fine dining). Long-time mentee of White Spoon chef Kim Hee-eun. Standout Black Spoon with a direct connection to a White Spoon mentor.",
      image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=400&h=400&fit=crop",
      restaurants: [{
        id: "lt1",
        name: "Solbam",
        location: "Seoul",
        coords: [37.5260, 127.0290],
        cuisine: "Korean contemporary",
        specialty: "Michelin 1-star fine dining",
        website_url: "https://guide.michelin.com/us/en/seoul-capital-area/kr-seoul/restaurant/solbam",
        resy_url: "https://resy.com/cities/sel/solbam"
      }],
      appearances: [{ showId: "ccw", season: 2, result: "Competing" }]
    },

    // ——— Top Chef Season 22: Destination Canada ———
    {
      id: "anya-el-wattar",
      real_name: "Anya El-Wattar",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/Dt.zWIY6.f1leuA3V94_.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/74290ba58aaec3fd49611e680a579df4",
      bio: "Born in Moscow, Russia, Anya emigrated to the US at 18. She is a chef at Birch & Rye in San Francisco, bringing a Russian-influenced perspective to her cooking.",
      restaurants: [{
        id: "aew1",
        name: "Birch & Rye",
        location: "San Francisco, CA",
        coords: [37.7749, -122.4194],
        cuisine: "Russian-inspired",
        specialty: "Russian fine dining",
        website_url: "https://www.birchandrye.com",
        resy_url: "https://resy.com/cities/sf/birch-and-rye"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "paula-endara",
      real_name: "Paula Endara",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/1oEZXUufSFKzwdkSyKxjpg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/4937ae1b5bf627b2ad82545035199379",
      bio: "Originally from Quito, Ecuador, Paula is the executive chef at Granddam and Lost Palm in Lexington, Kentucky, blending Latin American roots with Southern hospitality.",
      restaurants: [
        {
          id: "pe1",
          name: "Granddam",
          location: "Lexington, KY",
          coords: [38.0406, -84.5037],
          cuisine: "American",
          specialty: "Southern-Latin fusion",
          website_url: "https://www.granddamlexington.com",
          resy_url: "https://resy.com"
        },
        {
          id: "pe2",
          name: "Lost Palm",
          location: "Lexington, KY",
          coords: [38.0420, -84.5040],
          cuisine: "American",
          specialty: "Cocktail-driven dining",
          website_url: "#",
          resy_url: "https://resy.com"
        }
      ],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "tristen-epps",
      real_name: "Tristen Epps",
      class: "Contestant",
      rank: "Winner",
      image: "https://s.yimg.com/ny/api/res/1.2/dXUPHQ1INLtZ8u6YWnYFKA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/639f4cf19b91f88740cd3c9ac4c14ea6",
      bio: "From Virginia Beach, VA. Former executive chef at Marcus Samuelsson's Red Rooster in Miami. Chef and owner of Epps & Flows Culinary in Houston. Won Season 22 over runners-up Shuai Wang and Bailey Sullivan.",
      restaurants: [{
        id: "te1",
        name: "Epps & Flows Culinary",
        location: "Houston, TX",
        coords: [29.7604, -95.3698],
        cuisine: "American",
        specialty: "Contemporary American",
        website_url: "https://www.instagram.com/eppsandflows",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Winner" }]
    },
    {
      id: "corwin-hemming",
      real_name: "Corwin Hemming",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/vvR0Pv5eP5ta8zjN3EV.kw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/13661c14978eebc4bf78975c4cfb7050",
      bio: "From Augusta, GA, now based in Brooklyn, NY. Private and pop-up chef known for creative, boundary-pushing cuisine.",
      restaurants: [{
        id: "ch1",
        name: "Private & Pop-up",
        location: "Brooklyn, NY",
        coords: [40.6782, -73.9442],
        cuisine: "Contemporary",
        specialty: "Pop-up dining",
        website_url: "#",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "katianna-hong",
      real_name: "Katianna Hong",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/EfPbLNDzbiITDVPH5EdsIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/7ffc5c67c2c045460b7b087f6ed0419f",
      bio: "From Clifton Park, NY, now in Los Angeles. CIA Hyde Park graduate. Chef and owner of Yangban, a celebrated Korean-American restaurant in LA's Arts District.",
      restaurants: [{
        id: "kh1",
        name: "Yangban",
        location: "Los Angeles, CA",
        coords: [34.0340, -118.2340],
        cuisine: "Korean-American",
        specialty: "Modern Korean-American",
        website_url: "https://www.yangbansociety.com",
        resy_url: "https://resy.com/cities/la/yangban"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "lana-lagomarsini",
      real_name: "Lana Lagomarsini",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/_elqnTg98bMGeSPXaS7y7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/301b2ba229f72331bfa88ebc26e64fd5",
      bio: "From the Bronx, NY, now based in Harlem. CIA graduate and chef-owner of Lana Cooks, bringing Italian-American heritage and personal storytelling to her cuisine.",
      restaurants: [{
        id: "ll1",
        name: "Lana Cooks",
        location: "Harlem, NY",
        coords: [40.8116, -73.9465],
        cuisine: "Italian-American",
        specialty: "Personal heritage cuisine",
        website_url: "https://www.instagram.com/lanacooks",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "henry-lu",
      real_name: "Henry Lu",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/wBirjRexgAvYFEHBfAoUbg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/7992716160a4072b623d4fdc0962fee2",
      bio: "Born in the Bronx, NY, now in Houston, TX. Chef and owner of JŪN and byKIN, exploring modern Asian-American cuisine.",
      restaurants: [
        {
          id: "hl1",
          name: "JŪN",
          location: "Houston, TX",
          coords: [29.7500, -95.3900],
          cuisine: "Asian-American",
          specialty: "Modern Asian tasting menu",
          website_url: "https://www.junhouston.com",
          resy_url: "https://resy.com/cities/hou/jun"
        },
        {
          id: "hl2",
          name: "byKIN",
          location: "Houston, TX",
          coords: [29.7510, -95.3910],
          cuisine: "Asian-American",
          specialty: "Casual Asian-American",
          website_url: "#",
          resy_url: "https://resy.com"
        }
      ],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "vincenzo-loseto",
      real_name: "Vincenzo Loseto",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/Tm_eT3vHkNtKMyfe9Du3fw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/0db14de1d7b7f23ed428584bce4574b6",
      bio: "From Massapequa, NY, now in Napa, CA. Chef de Cuisine at Press Restaurant, one of the Napa Valley's premier farm-to-table wine country destinations.",
      restaurants: [{
        id: "vl1",
        name: "Press Restaurant",
        location: "Napa, CA",
        coords: [38.2975, -122.2869],
        cuisine: "American",
        specialty: "Wine country farm-to-table",
        website_url: "https://www.pressnapavalley.com",
        resy_url: "https://resy.com/cities/npa/press"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "zubair-mohajir",
      real_name: "Zubair Mohajir",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/PBSKqo.KeUKcKp0Kshrcvw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/851c5c21586dde11d5a523fe1a1ba064",
      bio: "Originally from Chennai, India, now in Chicago. Former sous chef at Jean-Georges's Pump Room. Founder and executive chef of Lilac Tiger, Coach House, and Mirra.",
      restaurants: [
        {
          id: "zm1",
          name: "Lilac Tiger",
          location: "Chicago, IL",
          coords: [41.8781, -87.6298],
          cuisine: "Indian-American",
          specialty: "Modern Indian",
          website_url: "https://www.lilactigerchicago.com",
          resy_url: "https://resy.com/cities/chi/lilac-tiger"
        },
        {
          id: "zm2",
          name: "Coach House",
          location: "Chicago, IL",
          coords: [41.8790, -87.6300],
          cuisine: "American",
          specialty: "Contemporary American",
          website_url: "#",
          resy_url: "https://resy.com"
        },
        {
          id: "zm3",
          name: "Mirra",
          location: "Chicago, IL",
          coords: [41.8800, -87.6310],
          cuisine: "Mediterranean",
          specialty: "Mediterranean sharing plates",
          website_url: "#",
          resy_url: "https://resy.com"
        }
      ],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "cesar-murillo",
      real_name: "César Murillo",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/QxK6cTLmGp9xqF4Liy2bjw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/b5fc5bde7a5dc7aec7aa5b855530a06a",
      bio: "From Dallas, TX, now in Chicago. Executive chef at North Pond, a beloved Chicago landmark restaurant set inside a former warming shelter in Lincoln Park.",
      restaurants: [{
        id: "cm2",
        name: "North Pond",
        location: "Chicago, IL",
        coords: [41.9265, -87.6353],
        cuisine: "American",
        specialty: "Seasonal American",
        website_url: "https://www.northpondrestaurant.com",
        resy_url: "https://resy.com/cities/chi/north-pond"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "massimo-piedimonte",
      real_name: "Massimo Piedimonte",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/pvqqmpuPj2Fuop_py8DdEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/3451cc9326f6902fe5d9e30107234046",
      bio: "Montréal native and chef-owner of Cabaret l'Enfer. Trained under Daniel Boulud at Maison Boulud, he brings theatrical flair and French-Italian technique to his cooking.",
      restaurants: [{
        id: "mp1",
        name: "Cabaret l'Enfer",
        location: "Montréal, QC",
        coords: [45.5017, -73.5673],
        cuisine: "French-Italian",
        specialty: "Theatrical fine dining",
        website_url: "https://www.instagram.com/cabaretlenfer",
        resy_url: "https://resy.com"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "bailey-sullivan",
      real_name: "Bailey Sullivan",
      class: "Contestant",
      rank: "Runner-up",
      image: "https://s.yimg.com/ny/api/res/1.2/XobNMEctvEwelh7WS2ACPw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/db1b9034e9350f1e2af5147b35f51723",
      bio: "Chicago native and Chef di Cucina at Monteverde, one of Chicago's most celebrated Italian restaurants. Kendall College graduate; interned at two Michelin-starred restaurants in the city.",
      restaurants: [{
        id: "bs1",
        name: "Monteverde",
        location: "Chicago, IL",
        coords: [41.8860, -87.6520],
        cuisine: "Italian",
        specialty: "Handmade pasta",
        website_url: "https://www.monteverdechicago.com",
        resy_url: "https://resy.com/cities/chi/monteverde"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Runner-up" }]
    },
    {
      id: "kat-turner",
      real_name: "Kat Turner",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/li7AGrKgCtON6gMf_mZVfQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/79402f01ff9df73dfd5b3e0127d1da51",
      bio: "From Sturgeon Bay, WI, now in Los Angeles. Natural Gourmet Institute graduate and executive chef and partner at Highly Likely, a popular LA neighborhood restaurant.",
      restaurants: [{
        id: "kt1",
        name: "Highly Likely",
        location: "Los Angeles, CA",
        coords: [34.0900, -118.3200],
        cuisine: "American",
        specialty: "Neighborhood all-day dining",
        website_url: "https://www.highlylikelyca.com",
        resy_url: "https://resy.com/cities/la/highly-likely"
      }],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    },
    {
      id: "shuai-wang",
      real_name: "Shuai Wang",
      class: "Contestant",
      rank: "Runner-up",
      image: "https://s.yimg.com/ny/api/res/1.2/wu_Un3KGSqPsBAIq_x9qow--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/50bd7d1ec7b34ddee7a83f4e39d20ea0",
      bio: "From Queens, NY, now in North Charleston, SC. Chef and owner of Jackrabbit Filly and King BBQ, blending Asian flavors with Southern American BBQ traditions.",
      restaurants: [
        {
          id: "sw1",
          name: "Jackrabbit Filly",
          location: "North Charleston, SC",
          coords: [32.8546, -79.9748],
          cuisine: "Asian-Southern",
          specialty: "Asian-Southern fusion",
          website_url: "https://www.jackrabbitfilly.com",
          resy_url: "https://resy.com"
        },
        {
          id: "sw2",
          name: "King BBQ",
          location: "North Charleston, SC",
          coords: [32.8550, -79.9760],
          cuisine: "BBQ",
          specialty: "Asian-inspired BBQ",
          website_url: "#",
          resy_url: "https://resy.com"
        }
      ],
      appearances: [{ showId: "top-chef", season: 22, result: "Runner-up" }]
    },
    {
      id: "mimi-weissenborn",
      real_name: "Mimi Weissenborn",
      class: "Contestant",
      rank: "Contestant",
      image: "https://s.yimg.com/ny/api/res/1.2/utCSmh4f3cs7xUhhpYexhA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/bravo_278/44773968a65f4cbb8a4ccf7b361b5de2",
      bio: "From Frederick, MD, now in Portland, ME. Executive chef at Sur Lie, Gather, and Catface Cafe, championing local Maine ingredients and community-driven dining.",
      restaurants: [
        {
          id: "mw1",
          name: "Sur Lie",
          location: "Portland, ME",
          coords: [43.6591, -70.2568],
          cuisine: "American",
          specialty: "Wine bar & small plates",
          website_url: "https://www.surlie.com",
          resy_url: "https://resy.com"
        },
        {
          id: "mw2",
          name: "Gather",
          location: "Portland, ME",
          coords: [43.6600, -70.2570],
          cuisine: "American",
          specialty: "Local seasonal",
          website_url: "#",
          resy_url: "https://resy.com"
        },
        {
          id: "mw3",
          name: "Catface Cafe",
          location: "Portland, ME",
          coords: [43.6610, -70.2575],
          cuisine: "Cafe",
          specialty: "All-day cafe",
          website_url: "#",
          resy_url: "https://resy.com"
        }
      ],
      appearances: [{ showId: "top-chef", season: 22, result: "Contestant" }]
    }
  ]
};
