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
          description: "The courses and projects that I&#39;ve been assisting with.",
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
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-can-we-make-reading-code-easier-with-eye-tracking",
        
          title: "Can we make reading code easier with eye tracking?",
        
        description: "popular science style article",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-天使升华在空中-sublimation-angels",
          title: '天使升华在空中 （Sublimation Angels）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sublimation_angels/";
            },},{id: "news-i-received-my-licentiate-degree-a-scandinavian-thing-in-engineering-fireworks-balloon-partying-face",
          title: 'I received my Licentiate degree (a Scandinavian thing) in Engineering :fireworks: :balloon: :partying_face:...',
          description: "",
          section: "News",},{id: "news-i-spent-a-pleasant-month-with-my-mom-and-family-in-my-hometown-chenzhou-hunan-cn-deciduous-tree-sunny-heart",
          title: 'I spent a pleasant month with my mom and family in my hometown...',
          description: "",
          section: "News",},{id: "news-i-joined-the-wasp-study-trip-to-the-silicon-valley-ca-usa",
          title: 'I joined the WASP study trip to the silicon valley, CA, USA',
          description: "",
          section: "News",},{id: "news-i-gave-a-presentation-at-ppig-hcc-amp-vl-2024-in-liverpool-uk",
          title: 'I gave a presentation at PPIG/HCC &amp;amp; VL 2024 in Liverpool, UK',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-i-started-visiting-the-peach-lab-at-eth-zurich-snowman-snowflake",
          title: 'I started visiting the PEACH lab at ETH Zurich :snowman: :snowflake:',
          description: "",
          section: "News",},{id: "projects-adaptive-developer-tools-adapt2",
          title: 'Adaptive Developer Tools (ADAPT2)',
          description: "Funded by Swedish Foundation for Strategic Research, SSF",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-posters",
          title: 'posters',
          description: "All the posters for my research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-videos",
          title: 'videos',
          description: "presentations of papers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-baking",
          title: 'baking',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-cooking",
          title: 'cooking',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-gazing-at-code-review-gander",
          title: 'Gazing at Code Review (Gander)',
          description: "Funded by ELLIIT",
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
