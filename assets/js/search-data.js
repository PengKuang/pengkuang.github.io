// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "The courses that I have been assisting with and the theses that I have been supervising.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "The public version of my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-can-we-make-reading-code-easier-with-eye-tracking",
        
          title: "Can we make reading code easier with eye tracking?",
        
        description: "popular science style article",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/popular-science/";
          
        },
      },{id: "post-a-mix-of-cooking-pics",
        
          title: "A mix of cooking pics",
        
        description: "a mix of cooking pics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cooking-mix/";
          
        },
      },{id: "books-天使升华在空中-sublimation-angels",
          title: '天使升华在空中 （Sublimation Angels）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sublimation_angels/";
            },},{id: "news-i-received-my-licentiate-degree-a-scandinavian-thing-in-engineering-balloon-partying-face",
          title: 'I received my Licentiate degree (a Scandinavian thing) in Engineering :balloon: :partying_face:',
          description: "",
          section: "News",},{id: "news-i-spent-a-pleasant-month-with-my-mom-and-family-in-my-hometown-chenzhou-hunan-cn-deciduous-tree-sunny-heart",
          title: 'I spent a pleasant month with my mom and family in my hometown...',
          description: "",
          section: "News",},{id: "news-i-joined-the-wasp-study-trip-to-the-silicon-valley-ca-usa",
          title: 'I joined the WASP study trip to the silicon valley, CA, USA',
          description: "",
          section: "News",},{id: "news-i-gave-a-presentation-at-ppig-hcc-amp-amp-vl-2024-in-liverpool-uk",
          title: 'I gave a presentation at PPIG/HCC &amp;amp;amp; VL 2024 in Liverpool, UK',
          description: "",
          section: "News",},{id: "news-i-started-visiting-the-peach-lab-at-eth-zurich-snowman-snowflake",
          title: 'I started visiting the PEACH lab at ETH Zurich :snowman: :snowflake:',
          description: "",
          section: "News",},{id: "projects-adaptive-developer-tools",
          title: 'Adaptive Developer Tools',
          description: "ADAPT2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_adapt/";
            },},{id: "projects-posters",
          title: 'posters',
          description: "visual creativity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_posters/";
            },},{id: "projects-videos",
          title: 'videos',
          description: "oral presentations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_videos/";
            },},{id: "projects-baking",
          title: 'baking',
          description: "sweet life",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_baking/";
            },},{id: "projects-cooking",
          title: 'cooking',
          description: "soul food",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_cooking/";
            },},{id: "projects-gazing-at-code-review",
          title: 'Gazing at Code Review',
          description: "Gander",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_gander/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%70.%6B%75%61%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pengkuang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pengkuang", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Peng-Kuang-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QDUM9CIAAAAJ", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/pengkuang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
