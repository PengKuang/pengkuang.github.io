// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bio",
          title: "bio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bio/";
          },
        },{id: "nav-thesis",
          title: "thesis",
          description: "The papers to be included in my doctoral dissertation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thesis/";
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
          description: "The courses that I have been assisting with and the master and bachelor theses that I have supervised.",
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
        },{id: "nav-xr",
          title: "XR",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/xr/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
      },{id: "books-我的精神家园-my-spiritual-homeland",
          title: '我的精神家园 My Spiritual Homeland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/00000_jiayuan/";
            },},{id: "books-沉默的大多数-the-silent-majority",
          title: '沉默的大多数 The Silent Majority',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/00001_silent/";
            },},{id: "books-青铜时代-the-bronze-age",
          title: '青铜时代 The Bronze Age',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/00002_qingtongshidai/";
            },},{id: "books-看见-insight",
          title: '看见 Insight',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/0001_kanjian/";
            },},{id: "books-送你一颗子弹-send-you-a-bullet",
          title: '送你一颗子弹 Send You A Bullet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/0002_zidan/";
            },},{id: "books-民主的细节-the-intricacies-of-democracy",
          title: '民主的细节 The Intricacies of Democracy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/0003_democracy/";
            },},{id: "books-观念的水位-the-waterline-of-thought",
          title: '观念的水位 The Waterline of Thought',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/0004_literacy/";
            },},{id: "books-天使升华在空中-sublimation-angels",
          title: '天使升华在空中 （Sublimation Angels）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/000_sublimation_angels/";
            },},{id: "books-welcome-home",
          title: 'Welcome Home',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/001_welcome_home/";
            },},{id: "books-eye-tracking",
          title: 'Eye Tracking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/002_eyetracking_guide/";
            },},{id: "books-participatory-design-principles-and-practices",
          title: 'Participatory Design Principles and Practices',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/098_participatory_design/";
            },},{id: "books-concepts-of-programming-languages",
          title: 'Concepts of Programming Languages',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/099_prog_lang/";
            },},{id: "books-experimentation-in-software-engineering",
          title: 'Experimentation in Software Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/100_experiment_SE/";
            },},{id: "books-the-programmer-39-s-brain",
          title: 'The Programmer&amp;#39;s Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/102_programmer_brain/";
            },},{id: "books-academic-teaching",
          title: 'Academic Teaching',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/103_academic_teaching/";
            },},{id: "books-developmental-cognitive-neuroscience",
          title: 'Developmental Cognitive Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/104_dev_cognitive_neuroscience/";
            },},{id: "books-cognitive-neuroscience",
          title: 'Cognitive Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/105_cog_neuro/";
            },},{id: "books-what-is-this-thing-called-science",
          title: 'What is this thing called science?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/106_what_is_science/";
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
          section: "News",},{id: "news-i-started-visiting-the-peach-lab-at-eth-zurich-hosted-by-a-prof-april-wang-snowman-snowflake",
          title: 'I started visiting the PEACH lab at ETH Zurich, hosted by A/Prof. April...',
          description: "",
          section: "News",},{id: "news-my-defense-planned-on-may-13-2026-is-officially-approved-by-the-internal-committee-at-lth-partying-face",
          title: 'My defense (planned on May 13, 2026) is officially approved by the internal...',
          description: "",
          section: "News",},{id: "news-i-formally-passed-the-mri-course-functional-and-structural-brain-imaging-sunglasses",
          title: 'I formally passed the MRI course - Functional and Structural Brain Imaging :sunglasses:...',
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
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7029-5655", "_blank");
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
