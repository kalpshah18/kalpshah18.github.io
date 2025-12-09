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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Dont have any publications right now! Come back later to see some.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Interesting Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-dynamic-image-compression",
        
          title: "Dynamic Image Compression",
        
        description: "Dynamic Image Compression using Singular Value Decomposition",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ImageCompression/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-cache-db",
          title: 'Cache DB',
          description: "Redis-Compatible Key-Value Store",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CacheDB/";
            },},{id: "projects-eii-website",
          title: 'EII Website',
          description: "EII Team Website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EIIWebsite/";
            },},{id: "projects-dynamic-image-compression",
          title: 'Dynamic Image Compression',
          description: "Dynamic Image Compression using Singular Value Decomposition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ImageCompression/";
            },},{id: "projects-insurance-policy-analysis-application",
          title: 'Insurance Policy Analysis Application',
          description: "Analyzing Insurance Policies, Emails, etc. using Large Language Models and creating a Query-Answer Interface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/InsurancePolicyAnalysis/";
            },},{id: "projects-monte-carlo-engine",
          title: 'Monte Carlo Engine',
          description: "Efficient Monte Carlo Simulation using Geometric Brownian Motion in C++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MonteCarloEngine/";
            },},{id: "projects-orderbook",
          title: 'Orderbook',
          description: "Creating a Low Latency, Multi-threaded Security Exchange Orderbook",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Orderbook/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%6C%70%73%68%61%68%31%38%30%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kalpshah18", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kalpshah18", "_blank");
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
