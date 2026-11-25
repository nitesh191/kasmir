export const JOURNEY_STATUS = {
  active: {
    key: 'active',
    label: 'Active · Available',
    description: 'Operationally ready for bespoke bookings and departures.',
    color: '#4A7C59',
    bg: 'rgba(74, 124, 89, 0.16)',
    border: 'rgba(74, 124, 89, 0.45)',
  },
  upcoming: {
    key: 'upcoming',
    label: 'Upcoming Season',
    description: 'Planned for the upcoming seasonal window; early interest open.',
    color: '#D4B96A',
    bg: 'rgba(197, 165, 90, 0.14)',
    border: 'rgba(197, 165, 90, 0.4)',
  },
  enquiry_only: {
    key: 'enquiry_only',
    label: 'Enquiry Only',
    description: 'Crafted exclusively on custom request depending on route & permits.',
    color: '#9A9590',
    bg: 'rgba(154, 149, 144, 0.14)',
    border: 'rgba(154, 149, 144, 0.35)',
  },
  unavailable: {
    key: 'unavailable',
    label: 'Temporarily Unavailable',
    description: 'Currently paused for seasonal or operational reasons.',
    color: '#A84432',
    bg: 'rgba(168, 68, 50, 0.14)',
    border: 'rgba(168, 68, 50, 0.4)',
  },
}

export const jammuLayers = [
  {
    slug: 'devpath',
    type: 'main_layer',
    number: '01',
    name: 'Devpath',
    subtitle: 'Sacred Journeys of Jammu',
    tagline: 'Faith, Sacred Geography & Living Pilgrimage Traditions',
    heroImage: '/images/sutra.jpg',
    usp: 'Meaningful spiritual journeys that connect travellers with the sacred geography, faith, history and traditions of Jammu.',
    curationPrinciple:
      'All religious and pilgrimage journeys belong to Devpath — whether they involve a mountain trek, a high-altitude yatra, or a road journey. The primary spiritual purpose determines placement, never the mode of travel.',
    intro: [
      'Jammu is a land deeply rooted in faith, spirituality and ancient religious traditions. Its sacred geography stretches from revered Shiva shrines and Shakti temples to ancient pilgrimage routes, mountain sanctuaries and places associated with centuries-old beliefs and legends.',
      'Devpath is dedicated to exploring this spiritual landscape through thoughtfully curated pilgrimage journeys. Our approach goes beyond conventional religious tourism — introducing travellers to the history, mythology, spiritual significance, local traditions and cultural heritage associated with each sacred destination.',
      'We do not make unsupported promises of VIP darshan or bypassed official queues; every sacred visit is arranged with dignity, transparency and respect for official shrine board regulations.',
    ],
    forWhom:
      'Seekers, families, and pilgrims wishing to experience Jammu’s sacred shrines with historical depth, unhurried logistics, and reverence.',
    themes: [
      {
        title: 'Shiva & Sacred Himalayas',
        description:
          'High-altitude Kailash yatras, ancient cave sanctuaries, and mountain shrines linked to Shaivite and Naga traditions.',
        places: [
          'Bhaderwah Kailash',
          'Kailash Kund Yatra',
          'Sudh Mahadev',
          'Mantalai',
          'Vasuki Nag Temple',
          'Shiv Khori',
        ],
      },
      {
        title: 'Shakti & Divine Journeys',
        description:
          'Revered Devi peeths and mountain sanctuaries drawing devotees across generations and arduous Himalayan trails.',
        places: [
          'Shri Mata Vaishno Devi',
          'Machail Mata',
          'Sarthal Chandi Mata',
          'Sukrala Mata',
        ],
      },
      {
        title: 'Ancient Pilgrimage & Sacred Heritage',
        description:
          'Riverbank tirthas, ancient stone temple complexes, and cross-regional pilgrimage routes in the Pir Panjal.',
        places: [
          'Budha Amarnath, Poonch',
          'Purmandal',
          'Utterbehni',
        ],
      },
    ],
    destinationSlugs: [
      'vaishno-devi',
      'sudh-mahadev-mantalai',
      'shiv-khori',
      'kailash-kund-bhaderwah',
      'machail-mata',
      'purmandal-utterbehni',
      'budha-amarnath',
    ],
    seo: {
      title: 'Devpath — Sacred Journeys of Jammu | Beyond Kashir',
      description:
        'Explore Devpath: meaningful spiritual journeys across Jammu’s Shiva shrines, Shakti peeths, Kailash Kund, Sudh Mahadev, Purmandal, and Budha Amarnath.',
    },
  },
  {
    slug: 'virasat',
    type: 'main_layer',
    number: '02',
    name: 'Virasat',
    subtitle: 'Heritage, History & Civilisations',
    tagline: 'Dogra Royal Legacy, Ancient Temples & Pahari Art',
    heroImage: '/images/discover.jpg',
    usp: 'Discover Jammu through its historical memory, architectural treasures, royal legacy and artistic traditions.',
    curationPrinciple:
      'Virasat interprets monuments, forts, palaces, and miniature painting traditions through research-led storytelling and architectural context rather than rushed sightseeing checklists.',
    intro: [
      'Every region carries the memory of its past through its monuments, architecture, art, traditions and historical narratives. Jammu’s heritage reflects the legacy of the Dogra rulers, ancient kingdoms, historic temples, forts, palaces and diverse cultural influences.',
      'Virasat is created to explore and interpret this heritage. From the courtyards of Mubarak Mandi and the Nagara-style stone spires of Krimchi to the jewel-toned legacy of Basohli miniature painting, we bring Jammu’s civilisational story alive.',
      'Guided by architectural context and local historians, each exploration uncovers how strategic river crossings, hill principalities, and royal patronage shaped Duggar’s enduring identity.',
    ],
    forWhom:
      'History enthusiasts, art lovers, architects, and culturally curious travellers seeking Jammu’s untold royal and ancient past.',
    themes: [
      {
        title: 'Dogra Royal Heritage',
        description:
          'Palaces, riverside fortresses, and museum archives chronicling the rise of the Dogra dynasty and historic Jammu city.',
        places: [
          'Mubarak Mandi Palace',
          'Amar Mahal',
          'Bahu Fort',
          'Dogra Art Museum',
          'Historic Jammu City',
        ],
      },
      {
        title: 'Forts & Historical Sites',
        description:
          'Frontier citadels overlooking the Chenab, Poonch, and Ujh rivers that guarded Himalayan trade routes.',
        places: ['Akhnoor Fort', 'Poonch Fort', 'Jasrota Fort'],
      },
      {
        title: 'Ancient Architecture & Art',
        description:
          'Early medieval stone temples and the birthplace of the bold Basohli school of Pahari miniature painting.',
        places: [
          'Krimchi Temples',
          'Basohli Art & Heritage',
          'Traditional Miniature Painting',
        ],
      },
      {
        title: 'Heritage Explorations',
        description:
          'Curated walking trails through old bazaars, havelis, stepwells, and living craft ateliers.',
        places: [
          'Jammu Heritage Walks',
          'Historical Storytelling Journeys',
          'Architectural Trails',
        ],
      },
    ],
    destinationSlugs: [
      'mubarak-mandi-jammu',
      'krimchi-temples',
      'basohli-art-heritage',
      'akhnoor-fort',
    ],
    seo: {
      title: 'Virasat — Heritage, History & Civilisations of Jammu | Beyond Kashir',
      description:
        'Discover Jammu’s Dogra royal palaces, Krimchi Temples, Basohli miniature art, Akhnoor Fort, and curated heritage walks with Beyond Kashir.',
    },
  },
  {
    slug: 'parvat-path',
    type: 'main_layer',
    number: '03',
    name: 'Parvat Path',
    subtitle: 'Mountains, Valleys & Himalayan Retreats',
    tagline: 'Slow Alpine Retreats, High Passes & Lesser-Known Valleys',
    heroImage: '/images/summer.jpg',
    usp: 'Discover the quieter, lesser-known and more immersive side of Jammu’s Himalayan landscapes through slow, curated and comfortable mountain journeys.',
    curationPrinciple:
      'Parvat Path focuses strictly on mountain destinations, valleys, scenic landscapes, and retreats. Religious treks and pilgrimage routes remain under Devpath even when traversing high mountains.',
    intro: [
      'Beyond its famous pilgrimage destinations and established hill stations, Jammu offers an extraordinary world of mountains, valleys, meadows and remote Himalayan settlements.',
      'From the pine-scented bowls of Bhaderwah, Jai and Chinta to the high-altitude meadows of Padri and Seoj, and from the accessible ridge retreats of Patnitop and Sanasar to the remote valleys of Kishtwar, Dachhan, Marwah and Warwan — Parvat Path is dedicated to slow, unhurried mountain living.',
      'We design journeys around mountain rhythm, thoughtful stays, scenic drives and unscripted encounters with Himalayan life.',
    ],
    forWhom:
      'Slow travellers, families, and mountain seekers looking for serene retreats, alpine meadows, and off-the-beaten-path valleys.',
    themes: [
      {
        title: 'Valleys & Mountain Destinations',
        description:
          'Lush river valleys and cedar-lined basins across Doda, Bhaderwah, and Kishtwar.',
        places: [
          'Bhaderwah Valley',
          'Jai Valley',
          'Chinta Valley',
          'Paddar',
          'Kishtwar Regions',
        ],
      },
      {
        title: 'Meadows & High-Altitude Landscapes',
        description:
          'Expansive alpine pastures and high mountain passes linking Jammu’s valleys with Himachal and Zanskar.',
        places: ['Padri Pass', 'Guldanda', 'Seoj Meadow', 'Nalthi'],
      },
      {
        title: 'Mountain Retreats',
        description:
          'Accessible cedar-forest ridges ideal for restorative stays, gentle walks, and family retreats.',
        places: [
          'Patnitop',
          'Nathatop',
          'Sanasar',
          'Kud',
          'Pancheri',
          'Batote',
        ],
      },
      {
        title: 'Remote Himalayan Explorations',
        description:
          'Wild, deeply secluded mountain valleys accessible only in fair-weather windows.',
        places: ['Dachhan', 'Marwah', 'Warwan'],
      },
    ],
    destinationSlugs: [
      'bhaderwah-jai-chinta',
      'padri-pass-guldanda',
      'patnitop-sanasar-pancheri',
      'kishtwar-marwah-warwan',
    ],
    seo: {
      title: 'Parvat Path — Mountains, Valleys & Himalayan Retreats of Jammu | Beyond Kashir',
      description:
        'Explore Bhaderwah, Jai Valley, Padri Pass, Sanasar, Pancheri, and remote Kishtwar valleys through slow, curated mountain journeys.',
    },
  },
  {
    slug: 'prakriti',
    type: 'main_layer',
    number: '04',
    name: 'Prakriti',
    subtitle: 'Wilderness, Wildlife & Natural Heritage',
    tagline: 'Lakes, Riverscapes, Biodiversity & Responsible Trails',
    heroImage: '/images/vatista.jpg',
    usp: 'Explore Jammu’s natural heritage through responsible, immersive and nature-focused journeys.',
    curationPrinciple:
      'Prakriti emphasises ecological understanding, birdlife, wetlands, and low-impact wilderness appreciation rather than treating nature as a backdrop for rushed photography.',
    intro: [
      'Jammu’s natural identity extends far beyond its mountains and scenic valleys. Its Shivalik lakes, mighty Chenab riverscapes, wetlands, old-growth forests and high-altitude wildlife habitats represent an equally fascinating dimension of the region.',
      'Prakriti is dedicated to exploring this natural world through responsible and thoughtfully designed experiences — encouraging travellers to observe, listen, and engage with ecosystems with respect and curiosity.',
      'From quiet dawn birdwatching around Mansar and Surinsar to the alpine wilderness of Kishtwar High Altitude National Park, every journey is shaped around ecological sensitivity.',
    ],
    forWhom:
      'Naturalists, birdwatchers, landscape photographers, and mindful travellers drawn to biodiversity and tranquil waters.',
    themes: [
      {
        title: 'Lakes & Wetlands',
        description:
          'Shivalik freshwater lakes framed by wooded hills, rich in waterfowl, turtles, and quiet walking paths.',
        places: ['Mansar Lake', 'Surinsar Lake'],
      },
      {
        title: 'Rivers & Landscapes',
        description:
          'Dramatic gorges, river terraces, and viewpoints carved by the Chenab and Tawi rivers.',
        places: [
          'Chenab River Landscapes',
          'River Valleys',
          'Natural Viewpoints',
        ],
      },
      {
        title: 'Wildlife & Biodiversity',
        description:
          'Protected Himalayan habitats sheltering musk deer, Himalayan brown bear, monal pheasant, and diverse flora.',
        places: [
          'Kishtwar High Altitude National Park',
          'Forest Ecosystems',
          'Birdwatching Habitats',
        ],
      },
      {
        title: 'Nature Exploration',
        description:
          'Guided forest walks, ecological trails, and responsible wilderness observation.',
        places: [
          'Forest Walks',
          'Nature Trails',
          'Landscape Photography',
        ],
      },
    ],
    destinationSlugs: [
      'mansar-surinsar-lakes',
      'kishtwar-national-park',
      'chenab-river-landscapes',
    ],
    seo: {
      title: 'Prakriti — Wilderness, Wildlife & Natural Heritage of Jammu | Beyond Kashir',
      description:
        'Explore Mansar and Surinsar lakes, Chenab riverscapes, and Kishtwar High Altitude National Park through responsible nature journeys.',
    },
  },
]

export const jammuCollections = [
  {
    slug: 'lokanubhav',
    type: 'experience_collection',
    number: '05',
    name: 'Lokanubhav',
    subtitle: 'People, Culture & Living Traditions',
    tagline: 'Communities, Folklore, Crafts & Village Encounters',
    heroImage: '/images/culture.jpg',
    usp: 'Experience Jammu through its people, their stories, traditions and living cultural heritage.',
    curationPrinciple:
      'Lokanubhav is an experience collection drawing from all four main layers — centred on respectful, community-led cultural exchange rather than staged performances.',
    intro: [
      'To truly understand a destination, one must go beyond its monuments, landscapes and popular attractions. Its people, languages, customs, folklore, traditional knowledge, crafts and everyday way of life reveal its deeper identity.',
      'Lokanubhav creates meaningful connections between travellers and the diverse communities of Jammu — Dogra households in the Shivaliks, Bhaderwahi storytellers in the Chenab basin, and Pahari communities across the Pir Panjal.',
      'Every encounter is arranged with consent, fair community benefit, and unhurried curiosity.',
    ],
    forWhom:
      'Travellers seeking authentic human connection, folklore, folk music, and living village crafts.',
    highlights: [
      'Dogra culture, heritage homes, and everyday traditions',
      'Bhaderwahi cultural experiences & Dheku folk heritage',
      'Pahari communities, oral histories, and mountain customs',
      'Basohli & traditional artisan demonstrations',
      'Guided village walks and seasonal regional fairs (Melas)',
    ],
    destinationSlugs: [
      'basohli-art-heritage',
      'bhaderwah-jai-chinta',
      'mubarak-mandi-jammu',
    ],
    seo: {
      title: 'Lokanubhav — People, Culture & Living Traditions of Jammu | Beyond Kashir',
      description:
        'Connect with Dogra, Bhaderwahi, and Pahari communities, folk music, artisans, and village traditions across Jammu.',
    },
  },
  {
    slug: 'zayka',
    type: 'experience_collection',
    number: '06',
    name: 'Zayka',
    subtitle: 'Flavours of Duggar',
    tagline: 'Traditional Kitchens, Heirloom Ingredients & Dogri Cuisine',
    heroImage: '/images/vaas.jpg',
    usp: 'Discover the flavours of Jammu through its traditional kitchens, regional specialities and culinary heritage.',
    curationPrinciple:
      'Zayka goes beyond restaurant lists — focusing on traditional village kitchens, seasonal Dogri dishes, heirloom mountain produce, and home-cooked hospitality.',
    intro: [
      'Food is one of the most intimate ways of understanding a region. Every traditional recipe carries memories of local ingredients, geography, climate, agricultural practices and generations of culinary knowledge.',
      'Zayka is dedicated to discovering Jammu’s regional cuisine — from slow-cooked Bhaderwahi Rajma and artisanal Kaladi cheese to the sweet-and-tangy depth of Ambal, Khatta Meat, Kulthein Di Dal, and stuffed Babru.',
      'Whether sharing a Dham-style feast or learning spice tempering in a rural hearth, every culinary encounter honours Duggar’s kitchen wisdom.',
    ],
    forWhom:
      'Culinary travellers, culture seekers, and anyone wishing to taste Jammu through home kitchens and regional harvests.',
    highlights: [
      'Traditional Dogra cuisine & festive Dham meals',
      'Bhaderwahi Rajma, Kaladi, Ambal, and Khatta Meat',
      'Kulthein Di Dal, Babru, and seasonal mountain greens',
      'Traditional sweets and local bazaar food trails in Old Jammu',
      'Village kitchen visits and hands-on cooking demonstrations',
    ],
    destinationSlugs: [
      'mubarak-mandi-jammu',
      'patnitop-sanasar-pancheri',
      'bhaderwah-jai-chinta',
    ],
    seo: {
      title: 'Zayka — Flavours of Duggar & Dogri Cuisine | Beyond Kashir',
      description:
        'Taste traditional Dogra cuisine — Kaladi, Ambal, Khatta Meat, Bhaderwahi Rajma, and village kitchens across Jammu.',
    },
  },
  {
    slug: 'anubhav',
    type: 'experience_collection',
    number: '07',
    name: 'Anubhav',
    subtitle: 'Adventure, Exploration & Outdoor Experiences',
    tagline: 'Non-Pilgrimage Mountain Trails, Camping & Expeditions',
    heroImage: '/images/autumn.jpg',
    usp: 'Go beyond conventional sightseeing and experience Jammu through exploration, outdoor activities and memorable journeys.',
    curationPrinciple:
      'Anubhav covers active outdoor and adventure experiences that are NOT primarily religious or pilgrimage-oriented. Kailash Kund, Vaishno Devi, and Machail Mata treks belong strictly to Devpath.',
    intro: [
      'Some journeys are not just about reaching a destination — they are about the experiences encountered along the way. A mountain trail, an alpine ridge walk, a permitted forest camp or a photography expedition can become a memorable story in itself.',
      'Anubhav brings together active, exploratory outdoor experiences across Jammu’s ridges, valleys, and river corridors — led by experienced local mountain guides with safety and environmental responsibility at the forefront.',
    ],
    forWhom:
      'Active travellers, hikers, outdoor photographers, and explorers drawn to non-commercial Himalayan trails.',
    highlights: [
      'Non-pilgrimage mountain treks in Bhaderwah, Pancheri & Kishtwar',
      'Permitted alpine camping and ridge walks',
      'Landscape & wildlife photography expeditions',
      'Offbeat exploration across Padri Pass, Seoj, and Warwan approaches',
    ],
    destinationSlugs: [
      'padri-pass-guldanda',
      'kishtwar-marwah-warwan',
      'patnitop-sanasar-pancheri',
    ],
    seo: {
      title: 'Anubhav — Adventure & Outdoor Experiences in Jammu | Beyond Kashir',
      description:
        'Explore non-pilgrimage Himalayan trails, permitted camping, and photography expeditions across Jammu with Beyond Kashir.',
    },
  },
  {
    slug: 'ritu',
    type: 'seasonal_collection',
    number: '08',
    name: 'Ritu',
    subtitle: 'Seasonal Journeys Across Jammu',
    tagline: 'When to Go, What to Experience & Seasonal Rhythms',
    heroImage: '/images/spring.jpg',
    usp: 'Connecting all seven Jammu layers and collections through the rhythm of seasons — helping travellers know what to experience, where to go, and when to visit.',
    curationPrinciple:
      'Ritu is not a standalone geographical layer; it is a seasonal editorial and journey compass linking Devpath, Virasat, Parvat Path, Prakriti, Lokanubhav, Zayka, and Anubhav.',
    intro: [
      'In the mountains and foothills of Jammu, every season transforms both the terrain and the cultural calendar. High passes open only in brief summer windows, while winter brings clarity to Shivalik heritage cities and snow-blanketed cedar retreats.',
      'Ritu weaves together all seven pillars of Jammu into a living seasonal guide — ensuring you arrive in Bhaderwah when meadows bloom, walk Old Jammu in crisp winter sunshine, or time your pilgrimage to sacred seasonal windows.',
    ],
    forWhom:
      'Travellers planning their timing carefully around weather windows, mountain pass openings, festivals, and seasonal food.',
    seasons: [
      {
        name: 'Spring',
        months: 'March — May',
        focus: 'Shivalik Blooms, Heritage Walks & Lower Valleys',
        layers: ['Virasat', 'Prakriti', 'Zayka'],
        summary:
          'Pleasant temperatures across Old Jammu, Akhnoor, Basohli, and Mansar Lake; vibrant mustard fields, Navratri traditions, and gentle walks in Pancheri and Sanasar.',
      },
      {
        name: 'Summer',
        months: 'June — August',
        focus: 'High Passes, Alpine Meadows & Sacred Yatras',
        layers: ['Parvat Path', 'Devpath', 'Anubhav'],
        summary:
          'Snow clears across Padri Pass, Seoj Meadow, Jai Valley, and Marwah-Warwan. Peak window for Kailash Kund, Machail Mata, and Budha Amarnath yatras.',
      },
      {
        name: 'Autumn',
        months: 'September — November',
        focus: 'Crisp Mountain Visibility, Wildlife & Harvest Kitchens',
        layers: ['Prakriti', 'Lokanubhav', 'Virasat'],
        summary:
          'Golden light over Kishtwar High Altitude National Park, post-monsoon clarity in Bhaderwah, Krimchi Temples, and harvest-season Dogri specialities.',
      },
      {
        name: 'Winter',
        months: 'December — February',
        focus: 'Snow Retreats, Shivalik Heritage & Hearth Cuisine',
        layers: ['Virasat', 'Zayka', 'Parvat Path'],
        summary:
          'Snowy cedar stillness in Patnitop and Nathatop; warm sunshine for Mubarak Mandi, Purmandal-Utterbehni, Basohli art trails, and hearty winter Kaladi & Khatta Meat.',
      },
    ],
    destinationSlugs: [
      'bhaderwah-jai-chinta',
      'mubarak-mandi-jammu',
      'mansar-surinsar-lakes',
      'padri-pass-guldanda',
    ],
    seo: {
      title: 'Ritu — Seasonal Journeys of Jammu | Beyond Kashir',
      description:
        'Discover the best seasons to experience Jammu’s pilgrimages, alpine meadows, Dogra heritage, wildlife, and seasonal cuisine.',
    },
  },
]

export const beyondDestinations = [
  {
    slug: 'vaishno-devi',
    region: 'jammu',
    name: 'Shri Mata Vaishno Devi & Trikuta Hills',
    primaryLayer: 'devpath',
    collections: ['ritu'],
    subtitle: 'Revered Shakti Shrine in the Trikuta Mountains',
    heroImage: '/images/sutra.jpg',
    bestSeason: 'March — June & September — November (open year-round)',
    background:
      'Nestled in the three-peaked Trikuta hills above Katra, the holy cave shrine of Mata Vaishno Devi is one of India’s most deeply revered Shakti pilgrimages, drawing devotees along a 12 km mountain ascent.',
    significance:
      'Embodies the sacred feminine tradition of Jammu. While the journey involves a steep Himalayan trek, its identity is wholly spiritual — belonging firmly under Devpath.',
    highlights: [
      'Thoughtfully paced ascent planning from Katra with resting halts',
      'Visits to Bhairavnath Temple and Ardhkuwari en route',
      'Context on Trikuta’s ancient pilgrimage traditions and local Dogra hospitality',
    ],
    practicalNotes:
      'Official Shri Mata Vaishno Devi Shrine Board registration (Yatra Parchi) is mandatory. Helicopter, battery car, or pony services are subject strictly to official Shrine Board availability and weather conditions.',
    linkedJourneySlugs: ['sacred-shivalik-trikuta-pilgrimage'],
  },
  {
    slug: 'sudh-mahadev-mantalai',
    region: 'jammu',
    name: 'Sudh Mahadev & Mantalai',
    primaryLayer: 'devpath',
    collections: ['parvat-path', 'ritu'],
    subtitle: 'Ancient Shaivite Sanctuary & Himalayan Cedar Groves',
    heroImage: '/images/vatista.jpg',
    bestSeason: 'April — October',
    background:
      'Located near Chenani in Udhampur district amidst serene deodar forests, Sudh Mahadev houses an ancient black marble Shiva Lingam and a legendary broken trident (Trishul), with Mantalai just higher up the ridge.',
    significance:
      'According to local tradition, Mantalai is associated with the marriage of Lord Shiva and Goddess Parvati. Together with Gauri Kund, they form one of Jammu’s most atmospheric Shaivite circuits.',
    highlights: [
      'Ancient Sudh Mahadev temple complex and sacred trident',
      'Gauri Kund spring and Mantalai’s tranquil cedar surroundings',
      'Scenic mountain drive from Patnitop and Chenani',
    ],
    practicalNotes:
      'Accessible by road from Patnitop/Kud (approx. 1.5–2 hours). Comfortable day-extension or overnight stay in Patnitop.',
    linkedJourneySlugs: ['sacred-shivalik-trikuta-pilgrimage'],
  },
  {
    slug: 'shiv-khori',
    region: 'jammu',
    name: 'Shiv Khori',
    primaryLayer: 'devpath',
    collections: ['ritu'],
    subtitle: 'Natural Cave Shrine of Lord Shiva in Reasi',
    heroImage: '/images/sutra.jpg',
    bestSeason: 'October — April & Shravan / Mahashivratri',
    background:
      'Situated in the Ransoo hills of Reasi district, Shiv Khori is a naturally formed limestone cave nearly 150 metres deep housing a self-manifested (Swayambhu) Shiva Lingam.',
    significance:
      'A cornerstone of Jammu’s Shaivite pilgrimage heritage, surrounded by forested hills and traditional pilgrim routes.',
    highlights: [
      'Natural cave formations and Swayambhu Shiva Lingam',
      'Peaceful early-morning darshan away from peak midday crowds',
      'Easy pairing with Katra or Akhnoor heritage routes',
    ],
    practicalNotes:
      'Short paved walk (approx. 3–4 km) from Ransoo base camp. Subject to Shrine Board timings.',
    linkedJourneySlugs: ['sacred-shivalik-trikuta-pilgrimage'],
  },
  {
    slug: 'kailash-kund-bhaderwah',
    region: 'jammu',
    name: 'Kailash Kund & Vasuki Nag, Bhaderwah',
    primaryLayer: 'devpath',
    collections: ['anubhav', 'ritu'],
    subtitle: 'High-Altitude Glacial Lake Yatra & Naga Heritage',
    heroImage: '/images/summer.jpg',
    bestSeason: 'July — September (Yatra window)',
    background:
      'At ~3,900 metres above sea level in the Bhaderwah Himalayas lies Kailash Kund, a sacred glacial lake revered as the abode of Lord Shiva and Vasuki Nag, the tutelary deity of Bhaderwah.',
    significance:
      'The annual Kailash Kund Yatra begins from the ancient Vasuki Nag temple in Bhaderwah (Gatha), carrying sacred chharis across Seoj Meadow. Though a demanding trek, its spiritual purpose anchors it under Devpath.',
    highlights: [
      'Ancient Vasuki Nag Temple in Bhaderwah',
      'High-altitude pilgrimage trail via Hayan and Seoj Meadow',
      'Deep insight into Bhaderwahi Naga traditions and folklore',
    ],
    practicalNotes:
      'High-altitude trek requiring good fitness, acclimatisation, and adherence to local yatra schedules and weather advisories.',
    linkedJourneySlugs: [],
  },
  {
    slug: 'machail-mata',
    region: 'jammu',
    name: 'Machail Mata, Paddar',
    primaryLayer: 'devpath',
    collections: ['ritu'],
    subtitle: 'Remote Himalayan Shakti Shrine of Kishtwar',
    heroImage: '/images/vatista.jpg',
    bestSeason: 'July — September',
    background:
      'Tucked deep inside the Paddar valley of Kishtwar near the Zanskar ranges, the shrine of Chandi Mata at Machail sits amidst dramatic glaciers, roaring streams, and stone-and-timber mountain hamlets.',
    significance:
      'One of North India’s most arduous and spiritually charged Devi pilgrimages, deeply woven into Kishtwar and Jammu’s shared sacred memory.',
    highlights: [
      'Dramatic Chenab valley approach via Kishtwar and Gulabgarh',
      'Sacred Chandi Mata shrine in Machail village',
      'Encounter with Paddar’s distinct mountain culture',
    ],
    practicalNotes:
      'Long mountain road journey followed by a ~30 km trek from Gulabgarh. Helicopter services, when operated, depend strictly on official permissions and weather.',
    linkedJourneySlugs: [],
  },
  {
    slug: 'purmandal-utterbehni',
    region: 'jammu',
    name: 'Purmandal & Utterbehni',
    primaryLayer: 'devpath',
    collections: ['virasat', 'ritu'],
    subtitle: 'Ancient Devika Riverbank Temples (Chhota Kashi)',
    heroImage: '/images/discover.jpg',
    bestSeason: 'October — March',
    background:
      'Along the subterranean sacred Devika river south-east of Jammu lie Purmandal and Utterbehni, revered for centuries as Chhota Kashi — where the river unusually flows northward (Uttarvahini).',
    significance:
      'A serene fusion of sacred pilgrimage and Dogra-era temple architecture, featuring faded wall frescoes, sandstone ghats, and quiet courtyards.',
    highlights: [
      'Purmandal’s sandstone shrines and ancient frescos',
      'Utterbehni’s northward-flowing Devika ghats',
      'Quiet half-day spiritual & architectural trail from Jammu',
    ],
    practicalNotes:
      'Easy 1-hour drive from Jammu city. Ideal for morning visits paired with Mansar Lake.',
    linkedJourneySlugs: ['dogra-heritage-shivalik-trail'],
  },
  {
    slug: 'budha-amarnath',
    region: 'jammu',
    name: 'Budha Amarnath, Poonch',
    primaryLayer: 'devpath',
    collections: ['ritu'],
    subtitle: 'Ancient Shiva Shrine on the Pulsating Pulasti River',
    heroImage: '/images/sutra.jpg',
    bestSeason: 'July — September',
    background:
      'Located in Mandi near Poonch in the Pir Panjal foothills, Budha Amarnath is an ancient white-stone Shiva shrine overlooking the Pulasti stream, named after sage Pulastya.',
    significance:
      'Marks a major spiritual pillar of the Pir Panjal region, drawing pilgrims prior to Raksha Bandhan.',
    highlights: [
      'Historic stone Shiva temple along the Pulasti river',
      'Pir Panjal mountain landscapes via Mughal Road or Rajouri',
      'Can be combined with Poonch Fort heritage visits',
    ],
    practicalNotes:
      'Requires advance route planning via Rajouri/Poonch; travel schedules subject to local highway and weather advisories.',
    linkedJourneySlugs: [],
  },
  {
    slug: 'mubarak-mandi-jammu',
    region: 'jammu',
    name: 'Mubarak Mandi, Amar Mahal & Historic Jammu',
    primaryLayer: 'virasat',
    collections: ['lokanubhav', 'zayka', 'ritu'],
    subtitle: 'Seat of the Dogra Rulers & Living Old City',
    heroImage: '/images/discover.jpg',
    bestSeason: 'October — March',
    background:
      'Overlooking the Tawi River, the Mubarak Mandi Palace complex served as the royal residence of the Dogra Maharajas until 1925, blending Rajasthani, Mughal, and European baroque influences.',
    significance:
      'Paired with the red-sandstone Amar Mahal Palace Museum, ancient Bahu Fort, and the Dogra Art Museum (housing priceless Basohli miniatures), it forms the heart of Jammu’s civilisational memory.',
    highlights: [
      'Guided architectural walk through Mubarak Mandi courtyards & Sheesh Mahal',
      'Dogra Art Museum’s rare Pahari miniature collection',
      'Amar Mahal overlooking the Tawi bend & Bahu Fort',
      'Old Jammu bazaar culinary walk (Kaladi, Kachori, traditional sweets)',
    ],
    practicalNotes:
      'Museum timings vary (typically closed Mondays). Best explored on foot in the morning with a local historian.',
    linkedJourneySlugs: ['dogra-heritage-shivalik-trail'],
  },
  {
    slug: 'krimchi-temples',
    region: 'jammu',
    name: 'Krimchi Temples (Pandav Mandir)',
    primaryLayer: 'virasat',
    collections: ['ritu'],
    subtitle: '8th–9th Century Indo-Aryan Stone Temple Complex',
    heroImage: '/images/vatista.jpg',
    bestSeason: 'October — April',
    background:
      'Perched on a quiet green ridge near Udhampur beside the Birun Nallah, the seven sandstone temples of Krimchi represent some of the oldest surviving structural temples in Jammu.',
    significance:
      'Showcases exquisite Nagara-style shikhara architecture and early medieval stone masonry, remarkably preserved away from urban crowds.',
    highlights: [
      'Detailed study of 8th–9th century stone shikhara architecture',
      'Tranquil countryside setting with Himalayan foothill views',
      'Easy en-route stop between Jammu and Patnitop',
    ],
    practicalNotes:
      'Protected by the Archaeological Survey of India (ASI). Approx. 12 km from Udhampur.',
    linkedJourneySlugs: ['dogra-heritage-shivalik-trail'],
  },
  {
    slug: 'basohli-art-heritage',
    region: 'jammu',
    name: 'Basohli Art & Historic Town',
    primaryLayer: 'virasat',
    collections: ['lokanubhav', 'ritu'],
    subtitle: 'Birthplace of the Bold Basohli School of Miniature Painting',
    heroImage: '/images/culture.jpg',
    bestSeason: 'October — March',
    background:
      'Set beside the Ranjit Sagar reservoir along the Ravi River in Kathua district, Basohli was once a thriving hill principality famous for patronising the earliest and boldest school of Pahari miniature painting.',
    significance:
      'Known for its glowing primary colours, expressive eyes, and beetle-wing embellishments, Basohli art — now GI-tagged — remains one of India’s greatest artistic contributions.',
    highlights: [
      'Meeting contemporary Basohli miniature artisans and workshops',
      'Exploring ruins of the old Basohli palace and rock-cut caves',
      'Scenic views across the Atal Setu bridge and Ravi waters',
    ],
    practicalNotes:
      'Approx. 3.5–4 hours from Jammu city; ideal as a slow overnight cultural immersion.',
    linkedJourneySlugs: ['dogra-heritage-shivalik-trail'],
  },
  {
    slug: 'akhnoor-fort',
    region: 'jammu',
    name: 'Akhnoor Fort & Chenab Bank',
    primaryLayer: 'virasat',
    collections: ['prakriti'],
    subtitle: '18th-Century River Citadel & Harappan Archaeological Site',
    heroImage: '/images/discover.jpg',
    bestSeason: 'October — March',
    background:
      'Standing dramatically above the right bank of the Chenab River where it enters the plains, Akhnoor Fort was built in the late 18th century near Manda — the northernmost known site of the Indus Valley Civilisation.',
    significance:
      'A rare site uniting Harappan antiquity, Kushan-era terracotta traditions, and Dogra royal coronation history at Jia Pota Ghat.',
    highlights: [
      'Panoramic Chenab river views from the fort ramparts',
      'Historic Jia Pota Ghat and Ambaran Buddhist archaeological site nearby',
      'Rich historical narrative spanning 4,000+ years',
    ],
    practicalNotes:
      'Located ~28 km north-west of Jammu city; easily covered in a half-day heritage excursion.',
    linkedJourneySlugs: [],
  },
  {
    slug: 'bhaderwah-jai-chinta',
    region: 'jammu',
    name: 'Bhaderwah, Jai & Chinta Valleys',
    primaryLayer: 'parvat-path',
    collections: ['lokanubhav', 'zayka', 'ritu'],
    subtitle: 'Cedar-Lined Alpine Bowls of the Chenab Basin',
    heroImage: '/images/summer.jpg',
    bestSeason: 'April — October (Snow experiences in Jan–Feb)',
    background:
      'Often called Chhota Kashmir for its lush meadows and wooden architecture, Bhaderwah possesses its own distinct cultural soul — surrounded by the quiet valleys of Jai, Chinta, and Nalthi.',
    significance:
      'Offers unhurried mountain retreats, lavender fields, gentle stream-side walks, and warm Bhaderwahi hospitality far removed from crowded hill stations.',
    highlights: [
      'Slow stays in Jai Valley’s emerald meadow and cedar forests',
      'Scenic forest drives through Chinta Valley and Subarnag ridge',
      'Tasting authentic Bhaderwahi Rajma and local dairy traditions',
    ],
    practicalNotes:
      'Approx. 5–6 hours drive from Jammu via Batote and Pul Doda.',
    linkedJourneySlugs: ['bhaderwah-alpine-slow-retreat'],
  },
  {
    slug: 'padri-pass-guldanda',
    region: 'jammu',
    name: 'Padri Pass, Guldanda & Seoj Meadow',
    primaryLayer: 'parvat-path',
    collections: ['anubhav', 'ritu'],
    subtitle: 'High-Altitude Alpine Passes & Rolling Pastures',
    heroImage: '/images/autumn.jpg',
    bestSeason: 'May — October',
    background:
      'Connecting Bhaderwah toward Chamba in Himachal Pradesh, Padri Pass (~3,000 m) and nearby Guldanda burst into wildflower meadows in summer, while Seoj Meadow stretches wide beneath snow-dusted peaks.',
    significance:
      'Showcases Jammu’s dramatic high-altitude alpine terrain for non-pilgrimage scenic drives, photography, and ridge walks.',
    highlights: [
      'Sweeping panoramic views from Padri Top and Guldanda',
      'Wildflower meadows and nomadic pastoral encounters in summer',
      'Guided ridge hikes toward Seoj (non-pilgrimage nature routes)',
    ],
    practicalNotes:
      'Road access to Padri Pass opens typically from May to October depending on snowfall.',
    linkedJourneySlugs: ['bhaderwah-alpine-slow-retreat'],
  },
  {
    slug: 'patnitop-sanasar-pancheri',
    region: 'jammu',
    name: 'Patnitop, Sanasar & Pancheri',
    primaryLayer: 'parvat-path',
    collections: ['anubhav', 'zayka', 'ritu'],
    subtitle: 'Accessible Pine Ridges, Cup-Shaped Meadows & Quiet Hamlets',
    heroImage: '/images/winter.jpg',
    bestSeason: 'Year-round (April–June & Dec–Feb for snow)',
    background:
      'Anchored by old-growth deodar forests, the ridge circuit of Kud, Patnitop, Nathatop, and the serene meadow bowl of Sanasar — alongside quiet Pancheri — offers Jammu’s most comfortable mountain retreats.',
    significance:
      'Ideal for multi-generational family journeys, restorative nature stays, gentle forest trails, and fresh Duggar mountain food like Kud’s warm Patisa and Pancheri’s Kaladi.',
    highlights: [
      'Quiet forest walks in Sanasar’s cedar-rimmed meadow',
      'Sunset vistas from Nathatop and gentle trails in Pancheri',
      'Artisanal Kaladi cheese tastings and Kud’s heritage sweet shops',
    ],
    practicalNotes:
      '2.5–3 hours from Jammu via the Chenani-Nashri tunnel route; suitable for all age groups.',
    linkedJourneySlugs: ['patnitop-sanasar-duggar-retreat'],
  },
  {
    slug: 'kishtwar-marwah-warwan',
    region: 'jammu',
    name: 'Kishtwar, Dachhan, Marwah & Warwan',
    primaryLayer: 'parvat-path',
    collections: ['anubhav', 'prakriti'],
    subtitle: 'Remote Trans-Himalayan Valleys & Frontier Wilderness',
    heroImage: '/images/winter.jpg',
    bestSeason: 'June — September',
    background:
      'Beyond Kishtwar town lie the dramatic, deeply secluded valleys of Dachhan, Marwah, and Warwan — carved by glacial rivers and linked to Kashmir’s Margan Top in high summer.',
    significance:
      'Represents Jammu’s most untouched mountain frontier — rewarding seasoned explorers with raw Himalayan grandeur and authentic mountain villages.',
    highlights: [
      'Expedition-style drives through deep Chenab and Marusudar gorges',
      'Saffron fields of Kishtwar (Mandal/Pochhal) in autumn',
      'Remote village life and vast glacial river valleys',
    ],
    practicalNotes:
      'High-commitment mountain travel requiring 4x4 vehicles, basic homestay/camp logistics, and strict summer weather windows.',
    linkedJourneySlugs: ['kishtwar-wilderness-expedition'],
  },
  {
    slug: 'mansar-surinsar-lakes',
    region: 'jammu',
    name: 'Mansar & Surinsar Lakes',
    primaryLayer: 'prakriti',
    collections: ['virasat', 'ritu'],
    subtitle: 'Ramsar-Recognised Shivalik Freshwater Lakes',
    heroImage: '/images/vatista.jpg',
    bestSeason: 'October — April',
    background:
      'Nestled among forested Shivalik hills east of Jammu, the twin lakes of Mansar and Surinsar are Ramsar-listed wetlands renowned for their calm waters, ancient lakeside shrines, and rich birdlife.',
    significance:
      'A gentle sanctuary for wetland ecology, lakeside walks, and quiet cultural heritage away from highway bustle.',
    highlights: [
      'Dawn birdwatching and shaded lakeside walking paths',
      'Ancient Sheshnag shrine and heritage stone architecture at Mansar',
      'Pair effortlessly with Purmandal and Utterbehni',
    ],
    practicalNotes:
      '1–1.5 hours from Jammu city; accessible year-round with lush greenery after monsoon.',
    linkedJourneySlugs: ['dogra-heritage-shivalik-trail'],
  },
  {
    slug: 'kishtwar-national-park',
    region: 'jammu',
    name: 'Kishtwar High Altitude National Park',
    primaryLayer: 'prakriti',
    collections: ['anubhav', 'ritu'],
    subtitle: 'Protected Himalayan Biodiversity Sanctuary',
    heroImage: '/images/autumn.jpg',
    bestSeason: 'May — October',
    background:
      'Spread across rugged mountain terrain bounded by the Rinnay and Kiar rivers, Kishtwar High Altitude National Park protects vital western Himalayan forest and alpine ecosystems.',
    significance:
      'Habitat for the Himalayan snowcock, monal pheasant, musk deer, Himalayan brown bear, and snow leopard at higher elevations.',
    highlights: [
      'Guided biodiversity & birdwatching trails in permitted buffer zones',
      'Conifer and birch forest ecology observation',
      'Responsible, zero-trace wilderness immersion',
    ],
    practicalNotes:
      'Entry requires official Jammu & Kashmir Wildlife Protection Department permits arranged in advance.',
    linkedJourneySlugs: ['kishtwar-wilderness-expedition'],
  },
  {
    slug: 'chenab-river-landscapes',
    region: 'jammu',
    name: 'Chenab River Landscapes',
    primaryLayer: 'prakriti',
    collections: ['parvat-path', 'virasat'],
    subtitle: 'Ancient Chandrabhaga Gorges & River Terraces',
    heroImage: '/images/hero.jpg',
    bestSeason: 'October — May',
    background:
      'Born from the confluence of the Chandra and Bhaga rivers in Lahaul, the mighty Chenab sweeps through Paddar, Kishtwar, Doda, Ramban, and Reasi before meeting the plains at Akhnoor.',
    significance:
      'The geographical spine of Jammu’s mountain districts — shaping river valleys, bridge viewpoints, and ancient riverine settlements.',
    highlights: [
      'Dramatic river viewpoints along the Kishtwar–Doda–Ramban corridor',
      'Akhnoor riverbanks where the Himalayan river meets the plains',
      'Landscape photography across shifting seasonal water hues',
    ],
    practicalNotes:
      'Experienced along road journeys toward Bhaderwah, Kishtwar, and Reasi.',
    linkedJourneySlugs: ['bhaderwah-alpine-slow-retreat'],
  },
]

export const ladakhData = {
  tagline: 'Monasteries, High Passes & Trans-Himalayan Soul',
  heroImage: '/images/winter.jpg',
  intro: [
    'Ladakh is a world unto itself — shaped by stark trans-Himalayan geology, ancient Tibetan Buddhist monasteries, Balti and Purig cultural traditions, and resilient high-altitude communities.',
    'Within Beyond Kashir, Ladakh is never folded into Kashmir’s or Jammu’s cultural narrative. It stands with its own independent geography, spiritual lineage, and rhythm of slow, respectful travel.',
  ],
  pillars: [
    {
      number: '01',
      name: 'Monastic & Spiritual Heritage',
      subtitle: 'Gompas, Frescoes & Living Buddhist Lineage',
      desc: 'Unscripted mornings at 1,000-year-old Alchi, cliff-perched Lamayuru, Hemis, Thiksey, and Diskit — understanding mudras, thangka art, and monastic life with respect.',
      places: ['Alchi Choskor', 'Thiksey Monastery', 'Hemis', 'Lamayuru', 'Diskit'],
      image: '/images/sutra.jpg',
    },
    {
      number: '02',
      name: 'High Passes & Alpine Lakes',
      subtitle: 'Glacial Basins, Cold Deserts & Starlit Skies',
      desc: 'Unhurried routes across Nubra’s sand dunes, Pangong Tso, Tso Moriri, and the dark-sky sanctuary of Hanle — paced carefully for genuine acclimatisation.',
      places: ['Nubra Valley', 'Pangong Tso', 'Tso Moriri', 'Hanle Dark Sky Reserve'],
      image: '/images/vatista.jpg',
    },
    {
      number: '03',
      name: 'Ladakhi, Balti & Changpa Communities',
      subtitle: 'Villages, Apricot Orchards & Traditional Kitchens',
      desc: 'Authentic encounters in Turtuk’s Balti villages, Sham Valley homestays, and Changthang’s nomadic plateaus — savouring Skyu, Thukpa, and butter tea.',
      places: ['Turtuk (Balti Heritage)', 'Sham Valley', 'Changthang Plateau'],
      image: '/images/culture.jpg',
    },
  ],
  seasons: [
    {
      title: 'Apricot Blossom (April — May)',
      desc: 'Sham Valley, Kargil, and Nubra turn delicate pink and white along stone-walled orchards.',
    },
    {
      title: 'High Passes & Festivals (June — September)',
      desc: 'Hemis Tsechu, open high passes, and turquoise lakes across Changthang and Nubra.',
    },
    {
      title: 'Golden Autumn (September — October)',
      desc: 'Poplars and willows turn amber beneath razor-sharp cobalt skies with fewer visitors.',
    },
    {
      title: 'Winter Stillness (November — March)',
      desc: 'Quiet snow-dusted monasteries, traditional Ladakhi hearths, and responsible snow-leopard habitats in Ulley.',
    },
  ],
}

export const beyondJourneys = [
  {
    slug: 'dogra-heritage-shivalik-trail',
    region: 'jammu',
    status: 'active',
    layerBadges: ['Virasat', 'Devpath', 'Prakriti', 'Zayka'],
    title: 'The Dogra Heritage & Shivalik Trail',
    subtitle: 'Palaces, Ancient Stone Temples, Lakes & Duggar Kitchens',
    duration: '4 Days / 3 Nights',
    route: 'Jammu · Mubarak Mandi · Krimchi · Purmandal · Mansar · Basohli',
    heroImage: '/images/discover.jpg',
    bestSeason: 'October — March',
    accommodation: 'Heritage Boutique Stay / Selected Premium City Hotel in Jammu',
    transport: 'Private air-conditioned SUV with experienced local driver-companion',
    groupOption: 'Private Departure (2–6 guests) or Small Curated Group (up to 8)',
    overview:
      'An editorial, slow-paced immersion into Jammu’s civilisational memory — pairing royal Dogra architecture, 8th-century stone temples at Krimchi, the sacred Devika ghats of Purmandal, Ramsar wetlands at Mansar, and a living Basohli miniature art encounter.',
    highlights: [
      'Curated architectural walk through Mubarak Mandi Palace & Dogra Art Museum',
      'Sunrise serenity at Mansar Lake and sandstone temples of Purmandal & Utterbehni',
      'Half-day exploration of the 8th-century Krimchi temple complex',
      'Private visit with a traditional Basohli miniature painting atelier',
      'Authentic Dogri culinary tasting featuring Kaladi, Ambal, and Khatta Meat',
    ],
    inclusions: [
      '3 nights accommodation in handpicked heritage/boutique properties',
      'Private vehicle and knowledgeable regional heritage escort',
      'Curated village kitchen / Dogri culinary experience',
      'All monument entry fees as per official schedules',
    ],
    exclusions: [
      'Flights or rail tickets to/from Jammu',
      'Personal expenses, gratuities, and travel insurance',
      'Any unplanned itinerary extensions',
    ],
    authorisationNote:
      'All museum, ASI site, and artisan studio visits follow official timings and prior scheduling.',
  },
  {
    slug: 'sacred-shivalik-trikuta-pilgrimage',
    region: 'jammu',
    status: 'active',
    layerBadges: ['Devpath'],
    title: 'Sacred Shivalik & Trikuta Pilgrimage',
    subtitle: 'Vaishno Devi, Shiv Khori & Sudh Mahadev — Unhurried & Reverent',
    duration: '5 Days / 4 Nights',
    route: 'Jammu · Katra (Vaishno Devi) · Shiv Khori · Sudh Mahadev · Mantalai',
    heroImage: '/images/sutra.jpg',
    bestSeason: 'March — June & September — November',
    accommodation: 'Comfortable Premium Retreats in Katra & Patnitop',
    transport: 'Private Innova Crysta / SUV across all hill transfers',
    groupOption: 'Private Family or Customised Spiritual Departure',
    overview:
      'Designed for pilgrims and families seeking depth rather than haste. This Devpath journey connects Jammu’s foremost Shakti and Shaivite sanctuaries with careful pacing, historical storytelling, and serene mountain rest.',
    highlights: [
      'Unhurried Shri Mata Vaishno Devi pilgrimage planning with Katra base comfort',
      'Early-morning visit to the natural Swayambhu cave of Shiv Khori',
      'Sacred Shiva & Parvati heritage trail through Sudh Mahadev and Mantalai',
      'Restorative stay amidst Patnitop’s deodar forests',
    ],
    inclusions: [
      '4 nights accommodation with breakfast and vegetarian dinners',
      'Private hill-experienced vehicle throughout the journey',
      'Assistance with official Shrine Board Yatra registration guidance',
    ],
    exclusions: [
      'Helicopter, pony, or palki charges (subject strictly to official Shrine Board booking & availability)',
      'Personal offerings and air/train fares',
    ],
    authorisationNote:
      'Kashir Wath never promises VIP darshan or bypassed queues. All shrine visits strictly follow official Shrine Board procedures.',
  },
  {
    slug: 'bhaderwah-alpine-slow-retreat',
    region: 'jammu',
    status: 'active',
    layerBadges: ['Parvat Path', 'Lokanubhav', 'Zayka'],
    title: 'Bhaderwah & Jai Valley Slow Alpine Retreat',
    subtitle: 'Cedar Forests, High Meadows & Bhaderwahi Hospitality',
    duration: '5 Days / 4 Nights',
    route: 'Jammu · Batote · Bhaderwah · Chinta Valley · Jai Valley · Padri Pass',
    heroImage: '/images/summer.jpg',
    bestSeason: 'May — October',
    accommodation: 'Curated Mountain Cottages & Boutique Timber Lodges',
    transport: 'Private SUV tailored for Himalayan hill roads',
    groupOption: 'Private Departure or Intimate Family Journey',
    overview:
      'Leave conventional tourist hill stations behind for the emerald valleys of Bhaderwah. Spend unhurried days walking beside cedar-shaded streams in Jai and Chinta, crossing Padri Pass, and sharing hearth-cooked Bhaderwahi Rajma.',
    highlights: [
      'Two unhurried nights in the quiet meadow bowl of Jai Valley',
      'Scenic drive to Padri Pass (3,000 m) and Guldanda wildflower ridges',
      'Visit to the historic Vasuki Nag Temple in Bhaderwah town',
      'Home-hosted Bhaderwahi meal & village walk',
    ],
    inclusions: [
      '4 nights boutique mountain lodge stays with breakfast & dinner',
      'Private mountain SUV and experienced local driver',
      'Guided meadow walk and community lunch',
    ],
    exclusions: [
      'Travel to/from Jammu arrival point',
      'Personal adventure gear or medical insurance',
    ],
    authorisationNote:
      'Padri Pass access depends on seasonal snow clearance and local administration advisories.',
  },
  {
    slug: 'patnitop-sanasar-duggar-retreat',
    region: 'jammu',
    status: 'active',
    layerBadges: ['Parvat Path', 'Zayka', 'Anubhav'],
    title: 'Patnitop, Sanasar & Pancheri Slow Ridge',
    subtitle: 'Easy-Paced Himalayan Forests, Meadow Walks & Kaladi Heritage',
    duration: '3 Days / 2 Nights',
    route: 'Jammu · Kud · Patnitop · Nathatop · Sanasar · Pancheri',
    heroImage: '/images/winter.jpg',
    bestSeason: 'Year-round',
    accommodation: 'Handpicked Forest Boutique Resort / Luxury Retreat',
    transport: 'Private SUV from Jammu Airport / Railway Station',
    groupOption: 'Private Weekend or Multi-Generational Family Escape',
    overview:
      'A gentle, deeply restorative mountain escape only hours from Jammu — focusing on quiet forest walks around Sanasar and Pancheri rather than crowded viewpoints, enriched by authentic Dogra mountain flavours.',
    highlights: [
      'Golden-hour ridge walks in Nathatop and Sanasar’s cedar meadow',
      'Artisanal Kaladi tasting and fresh Patisa trail in Kud',
      'Offbeat half-day exploration of quiet Pancheri hamlet',
    ],
    inclusions: [
      '2 nights luxury forest stay with breakfast',
      'Private Jammu pickup, transfers, and drop-off',
      'Curated Sanasar forest walk & Kaladi tasting',
    ],
    exclusions: [
      'Lunches, optional outdoor activities, and air/rail travel',
    ],
    authorisationNote:
      'Accessible year-round; snow chains arranged in heavy winter snowfall if required.',
  },
  {
    slug: 'ladakh-monasteries-high-passes',
    region: 'ladakh',
    status: 'active',
    layerBadges: ['Ladakh · Monastic & Alpine'],
    title: 'Ladakh: Monasteries, Passes & Living Villages',
    subtitle: 'Slow Acclimatised Passage Through Sham, Nubra & Pangong',
    duration: '7 Days / 6 Nights',
    route: 'Leh · Sham Valley (Alchi) · Khardung La · Nubra & Turtuk · Pangong Tso · Leh',
    heroImage: '/images/winter.jpg',
    bestSeason: 'May — September',
    accommodation: 'Heritage Boutique Stays, Luxury Eco-Camps & Curated Homestay',
    transport: 'Private acclimatised 4x4 SUV with oxygen support & local Ladakhi guide',
    groupOption: 'Private Departure or Small Group (max 6 guests)',
    overview:
      'A thoughtfully acclimatised journey respecting Ladakh’s altitude and cultural depth — pairing 11th-century Alchi frescoes and Balti heritage in Turtuk with serene nights beside Nubra’s dunes and Pangong’s changing blues.',
    highlights: [
      'First two nights paced gently in lower-altitude Sham Valley for safe acclimatisation',
      'Guided study of Alchi’s ancient murals and Thiksey’s morning chants',
      'Balti village walk and apricot orchard lunch in Turtuk',
      'Unrushed evening by Pangong Tso with Changthang cultural context',
    ],
    inclusions: [
      '6 nights handpicked boutique hotels & eco-camps with breakfast and dinner',
      'Private SUV, Inner Line Permits, and local cultural specialist',
      'Emergency oxygen cylinder and oximeter in vehicle',
    ],
    exclusions: [
      'Flights into/out of Leh (KBR)',
      'Personal medical insurance and monastery donations',
    ],
    authorisationNote:
      'Inner Line Permits for Nubra and Pangong are arranged via official Leh district channels.',
  },
  {
    slug: 'kishtwar-wilderness-expedition',
    region: 'jammu',
    status: 'upcoming',
    layerBadges: ['Prakriti', 'Parvat Path', 'Anubhav'],
    title: 'Kishtwar, Marwah & National Park Expedition',
    subtitle: 'Remote Trans-Himalayan Wilderness & Biodiversity Frontier',
    duration: '6 Days / 5 Nights',
    route: 'Jammu · Kishtwar · Kishtwar National Park Buffer · Dachhan · Marwah',
    heroImage: '/images/autumn.jpg',
    bestSeason: 'June — September',
    accommodation: 'Selected Mountain Guesthouses & Permitted Eco-Camps',
    transport: 'Private 4x4 Expedition Vehicle',
    groupOption: 'Bespoke Small Expedition (2–4 guests)',
    overview:
      'Planned for the upcoming summer window, this exploratory journey ventures deep into Kishtwar’s dramatic gorges, saffron terraces, and wildlife buffer habitats.',
    highlights: [
      'Guided nature & birding trails along Kishtwar National Park buffer zones',
      'Remote Himalayan valley drives through Dachhan and Marwah',
      'Autumn saffron heritage insights in Kishtwar',
    ],
    inclusions: [
      'Finalised upon seasonal operational confirmation and wildlife permit release',
    ],
    exclusions: [
      'Personal expedition equipment and flights',
    ],
    authorisationNote:
      'Currently scheduled for Upcoming Season; Wildlife Department permits are mandatory.',
  },
]

export function getJammuPillarBySlug(slug) {
  return (
    jammuLayers.find((l) => l.slug === slug) ||
    jammuCollections.find((c) => c.slug === slug) ||
    null
  )
}

export function getDestinationBySlug(slug) {
  return beyondDestinations.find((d) => d.slug === slug) || null
}

export function getJourneyBySlug(slug) {
  return beyondJourneys.find((j) => j.slug === slug) || null
}
