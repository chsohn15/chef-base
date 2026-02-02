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
        { number: 2, name: "The Return", chefs: ["paik-jong-won", "anh-sung-jae", "tbd-white-spoon"] }
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
    }
  ],
  chefs: [
    {
      id: "napoli-matfia",
      moniker: "Napoli Matfia",
      real_name: "Kwon Sung-jun",
      class: "Black Spoon",
      rank: "Winner",
      bio: "Master of Italian pasta and intense focus. Famously won the first season of Culinary Class Wars with his emotional 'Grandmother's Pasta' dish.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977730f90?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=400&h=400&fit=crop",
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
      bio: "The face of Korean F&B. Known for his keen business sense and deep knowledge of traditional street food and mass-market dining.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
      bio: "The only Michelin 3-star chef in Korea. His palette is famously strict, evaluating chefs on their fundamental seasoning and execution.",
      image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=400&h=400&fit=crop",
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
    }
  ]
};
