const places = [
    {
      id: 1,
      title: "Capitol Building",
      image: "/9.png",
      description:
        "The Capitol Building, located in Washington, D.C., is one of the most iconic structures in the United States. Serving as the home of the United States Congress, this historic building has witnessed pivotal moments in American history. Its striking neoclassical architecture, with the majestic dome at its center, symbolizes democracy and governance. Visitors can explore its vast halls, admire its intricate frescoes, and learn about the legislative process. The Capitol is not just a political landmark but a cultural symbol representing freedom and liberty.",
      shortDescription: "Symbol of U.S. democracy",
    },
    {
      id: 2,
      title: "Taj Mahal",
      image: "/1.png",
      description:
        "The Taj Mahal, located in Agra, India, is a UNESCO World Heritage site and one of the Seven Wonders of the World. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum stands as an eternal symbol of love. Its intricate carvings, reflective pools, and lush gardens make it an architectural marvel. The Taj Mahal is a masterpiece of Mughal architecture, blending Islamic, Persian, and Indian design styles. It attracts millions of visitors annually, offering a glimpse into India’s rich history and cultural heritage.",
      shortDescription: "Symbol of eternal love",
    },
    {
      id: 3,
      title: "Eiffel Tower",
      image: "/2.png",
      description:
        "The Eiffel Tower, located in Paris, France, is an architectural icon and one of the most visited landmarks in the world. Constructed in 1889 for the World's Fair, this iron lattice tower stands tall as a symbol of French ingenuity and culture. Offering breathtaking views of Paris from its observation decks, the Eiffel Tower is a favorite among tourists and romantics alike. Its illuminated form at night creates a magical ambiance, making it a must-see destination for anyone visiting the 'City of Lights.'",
      shortDescription: "Parisian cultural icon",
    },
    {
      id: 4,
      title: "Sydney Harbour Bridge",
      image: "/3.png",
      description:
        "The Sydney Harbour Bridge, an engineering marvel in Sydney, Australia, is one of the largest steel arch bridges in the world. Known affectionately as the 'Coathanger,' it connects the Sydney central business district to the North Shore. Visitors can climb to the top for panoramic views of the harbor or enjoy scenic walks along its pedestrian pathways. Its robust design and stunning location make it a symbol of Australia's progress and innovation.",
      shortDescription: "Iconic Sydney bridge",
    },
    {
      id: 5,
      title: "Sydney Opera House",
      image: "/4.png",
      description:
        "The Sydney Opera House, located on Bennelong Point in Sydney, Australia, is a world-renowned architectural masterpiece. Designed by Danish architect Jørn Utzon, its unique sail-like structure is recognized globally. This performing arts center hosts a wide range of events, from opera and theater to contemporary music. The Opera House, a UNESCO World Heritage site, offers tours that showcase its design and history. Its breathtaking harbor views and cultural significance make it a must-visit attraction.",
      shortDescription: "Masterpiece of architecture",
    },
    {
      id: 6,
      title: "London Tower Bridge",
      image: "/5.png",
      description:
        "Tower Bridge, one of London’s most famous landmarks, is an iconic bascule and suspension bridge spanning the River Thames. Opened in 1894, it combines Victorian Gothic architecture with engineering brilliance. Visitors can explore the bridge’s glass-floored walkways and learn about its history in the Tower Bridge Exhibition. The views of the London skyline from the bridge are breathtaking, making it a favorite among tourists.",
      shortDescription: "Historic London bridge",
    },
    {
      id: 7,
      title: "Leaning Tower of Pisa",
      image: "/6.png",
      description:
        "The Leaning Tower of Pisa, located in Pisa, Italy, is a freestanding bell tower famous for its unintended tilt. Constructed over nearly 200 years, the tower’s lean is due to unstable foundation soil. Despite this, it has become a beloved symbol of architectural persistence and ingenuity. Visitors can climb its spiral staircase for stunning views of the surrounding Piazza dei Miracoli. The tower remains a popular tourist destination and a testament to medieval European craftsmanship.",
      shortDescription: "Tilting Pisa landmark",
    },
    {
      id: 8,
      title: "Great Buddha",
      image: "/7.png",
      description:
        "The Great Buddha of Kamakura, Japan, is a monumental bronze statue of Amida Buddha standing over 13 meters tall. Dating back to the 13th century, this open-air statue symbolizes serenity and enlightenment. Located in the Kotoku-in Temple complex, it draws visitors seeking spiritual peace and historical insight. The Great Buddha is a revered cultural treasure and a must-visit for anyone exploring Japanese heritage.",
      shortDescription: "Japanese spiritual icon",
    },
    {
      id: 9,
      title: "Blue Cathedral",
      image: "/8.png",
      description:
        "The Blue Cathedral, a stunning architectural marvel, is celebrated for its vibrant blue facade and intricate design. Located in Tashkent, Uzbekistan, it serves as a symbol of the region’s rich cultural and religious heritage. Visitors are mesmerized by its serene ambiance and elaborate detailing, making it a place of inspiration and reverence.",
      shortDescription: "Stunning blue facade",
    },
    {
      id: 10,
      title: "Statue of Liberty",
      image: "/10.png",
      description:
        "The Statue of Liberty, located on Liberty Island in New York City, is a universal symbol of freedom and democracy. Gifted by France to the United States in 1886, it welcomes immigrants and visitors alike with its inspiring message of hope. The statue, a masterpiece of French sculptor Frédéric Auguste Bartholdi, offers breathtaking views of Manhattan from its pedestal and crown. It remains one of the most iconic monuments in the world.",
      shortDescription: "Freedom’s beacon",
    },
        {
          id: 11,
          title: "Colosseum",
          image: "/11.png",
          description:
            "The Colosseum, located in Rome, Italy, is an ancient amphitheater and a testament to the grandeur of the Roman Empire. Built in 70-80 AD, it was used for gladiatorial contests, public spectacles, and dramatic performances. This iconic oval structure, capable of seating tens of thousands, showcases advanced engineering and architectural brilliance. Visitors can explore its arches, underground chambers, and learn about its historical significance as a center of Roman entertainment.",
          shortDescription: "Rome’s ancient amphitheater",
        },
        {
          id: 12,
          title: "London Eye",
          image: "/12.png",
          description:
            "The London Eye, situated on the South Bank of the River Thames in London, is one of the world's largest observation wheels. Offering panoramic views of the city, this iconic structure attracts millions of visitors every year. Opened in 2000, the London Eye has become a symbol of modern London, providing breathtaking vistas of landmarks such as Big Ben, Buckingham Palace, and the River Thames. It’s a must-visit for a unique perspective on the capital.",
          shortDescription: "Panoramic city views",
        },
        {
          id: 13,
          title: "Big Ben",
          image: "/13.png",
          description:
            "Big Ben, the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London, is one of the most recognizable landmarks in the UK. The clock tower, now officially named Elizabeth Tower, is a symbol of British heritage. Its chiming bells and gothic architecture draw visitors from around the globe. Standing tall since 1859, it remains a timeless icon of London’s cultural and political significance.",
          shortDescription: "Iconic London clock",
        },
        {
          id: 14,
          title: "The Sphinx",
          image: "/14.png",
          description:
            "The Great Sphinx of Giza, located near the Pyramids of Giza in Egypt, is a limestone statue with the body of a lion and the head of a human. Dating back to around 2500 BC, it is believed to represent Pharaoh Khafre. This ancient monument is shrouded in mystery, with its enigmatic expression and historical significance. Visitors marvel at its grandeur and connection to the fascinating history of ancient Egypt.",
          shortDescription: "Ancient Egyptian marvel",
        },
        {
          id: 15,
          title: "Golden Gate Bridge",
          image: "/15.png",
          description:
            "The Golden Gate Bridge, spanning the Golden Gate Strait in San Francisco, California, is an engineering masterpiece and a symbol of the city. Opened in 1937, this suspension bridge features an iconic orange-red color that contrasts beautifully with the blue waters below. Offering scenic vistas for drivers, pedestrians, and cyclists, the bridge is an enduring symbol of innovation and an essential stop for visitors exploring the Bay Area.",
          shortDescription: "San Francisco icon",
        },
      
    // Add descriptions for the remaining places similarly...
  ];
  
  export default places;
  