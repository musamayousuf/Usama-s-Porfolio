import emoji from "react-easy-emoji";

export const greetings = {
  name: "Usama Yousuf",
  title: "Hello, My Name is Usama Yousuf",
  description:
    "Innovative frontend developer 1+year of experience in building and maintaining websites.I have extensive knowledge and Experience of MERN STACK, VueJs, NextJS, HTML, CSS. and JavaScript. Combined with my communication and problem-solving skills",
  resumeLink: "https://brendanglancy.github.io/Resume/",
};

export const openSource = {
  githubUserName: "brendanglancy",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/musamayousuf",
  linkedin: "https://linkedin.com/in/usama-yousuf-6899b1203",
  instagram: "https://www.instagram.com/musamayousuf/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Mern Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      // skills: [
      //   emoji(
      //     "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
      //   ),
      //   emoji(
      //     "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."
      //   ),
      //   emoji(
      //     "⚡ Cyber Security, HackTheBox Globally Ranked 534, Top 2% in PicoCTF 2022"
      //   ),
      // ],
      softwareSkills: [
        // {
        //   skillName: "python",
        //   fontAwesomeClassname: "logos:python",
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "logos:java",
        // },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "vuejs",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        // {
        //   skillName: "astro",
        //   fontAwesomeClassname: "vscode-icons:file-type-astro",
        // },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        // {
        //   skillName: "cpp",
        //   fontAwesomeClassname: "logos:c-plusplus",
        // },
        // {
        //   skillName: "php",
        //   fontAwesomeClassname: "logos:php",
        // },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "logos:postgresql",
        // },
        // {
        //   skillName: "MySQL-icon",
        //   fontAwesomeClassname: "logos:mysql-icon",
        // },
        // {
        //   skillName: "Vercel",
        //   fontAwesomeClassname: "logos:vercel-icon",
        // },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
        },
        // {
        //   skillName: "spring-boot",
        //   fontAwesomeClassname: "logos:spring-icon",
        // },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "Bahria University Karachi Campus",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "Feb 2018 - Feb 2022",
    // grade: "3.8 GPA",
    desc: "Programming CIS degree",
    descBullets: [
      "The Bachelor of Science in Computer Science (BSCS) - Programming degree option allows students to attain knowledge of effective software application development, client/server application development, and database application development and management for businesses.",
      "The CS - Programming degree option is designed to prepare students for careers in the field of software engineering and development.",
    ],
    github: "https://github.com/BrendanGlancy/akron/",
  },
  // {
  //   schoolName: "Tech Elevator",
  //   subHeader: "Full Stack Development",
  //   duration: "September 2020 - December 2020",
  //   desc: "Programming Bootcamp to learn Full Stack Development",
  //   descBullets: [
  //     "  Object-Oriented Programming: Java",
  //     "  Web Application Development: HTML, CSS, JavaScript, Vue.js, APIs using Spring Boot, Tomcat",
  //     "  Database Programming: Spring JDBC/DAO, Table Design, SQL, PostgreSQL, E/R diagrams",
  //     "  Completed 1000+ hours of Java, Spring, SQL, and JavaScript training",
  //     "  Completed 100+ hours of pair programming on group projects",
  //   ],
  //   github: "https://github.com/BrendanGlancy/BreweryLocater",
  // },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Devtronics",
    companylogo: "",
    date: "May 2022 – Present",
    descBullets: [
      "  Identified web-based user interactions and developed highly-responsive user interface components via React concepts.",
      "  Translated designs & wireframes into high-quality code and wrote application interface code via Javascript following React js , Next js  workflows.  ",
    ],
  },
  {
    role: "Jr. Software Engineer",
    company: "KCompute (Pvt) Ltd",
    companylogo: "/img/icons/common/kcomp.png",
    date: "Jan 2022 - May 2022 ",
    descBullets: [
      "  As a Jr. Software Engineer at KCOMPUTE (PRIVATE) LIMITED , I am responsible for creating new features, functionality, and capabilities on the website in React Js.",
      " I work with team to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Akseer Research (Pvt) Ltd",
    companylogo:
      "https://www.akseerresearch.com/wp-content/themes/research_wp/assets/images/logo.png",
    date: "December 2022",
    descBullets: [
      "  As a Software Developer Intern at Akseer Research (Pvt) Ltd, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Front-End.",
      " Creating reusable UI components using React.",
    ],
  },
];

export const projects = [
  {
    name: "Stretto",
    img: "https://www.stretto.com/wp-content/uploads/2020/11/logo.svg",
    // desc: "A web application that allows users to search and review breweries in the United States. Users can search for breweries by name, city, state, or zip code. Users can also add breweries to their favorites list and leave reviews for breweries.",
    screen: "/img/icons/common/stretto.png",
    link: "https://stretto.com",
    tags: ["React Js", ".net", "PostgreSQL"],
  },
  {
    name: "MicahGuru",
    // desc: "Contributor on Empyrial, Empyrial is a Python-based open-source quantitative investment library dedicated to financial institutions and retail investors, officially released in March 2021. Already used by thousands of people working in the finance industry, Empyrial aims to become an all-in-one platform for portfolio management, analysis, and optimization.",
    link: "https://micahguru.co.uk",
    screen: "https://ziaarsalan.github.io/static/media/Micahguru.58eeb7ce.png",
    img: "https://micahguru.co.uk/wp-content/uploads/2022/12/logo-1.png",
    tags: ["Vue Js", "Node Js", "NoSql"],
  },
  {
    name: "AirTap",
    // desc: "Personal Website built with Astro, Svelte, and JavaScript. Collaborated with a fellow Akron University student to build a website for a friend. Contains a blog of writeups for challenges done by the CTF team",
    link: "https://airtap.ca",
    img: "https://devtronics.co/assets/img/demo/vodafone.png",
    screen: "https://ziaarsalan.github.io/static/media/airtap.1754ad98.png",
    tags: ["React Js", "Node Js", "NoSql"],
  },
  {
    name: "Takaful Bazaar",
    // desc: "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    link: "https://takafulbazaar.pk",
    img: "https://takafulbazaar.pk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4eecf003.png&w=256&q=75",
    screen: "/img/icons/common/takaful.png",
    tags: ["Next Js", "Node Js", "NoSql"],
  },
  {
    name: "Anastomosis",
    // desc: "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    img: "http://anastomosisdesignlab.com/static/media/footer.c6a5c87f01415ac23a86.png",
    link: "http://anastomosisdesignlab.com/",
    tags: ["React Js"],
    // screen: "/img/icons/common/anastomosis.png",
  },
  {
    name: "Tradexco",
    // desc: "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    img: "https://tradexco.com.au/wp-content/uploads/2022/03/tradex-logo-custom-sportswear-in-australia.webp",
    link: "https://tradexco.com.au/",
    tags: ["React Js"],
    screen: "https://ziaarsalan.github.io/static/media/tradexco.d271c83e.png",
  },
];

export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
];

export const seoData = {
  title: "Usama's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image:
    "https://img.freepik.com/premium-photo/islamic-ramadan-kareem-eid-greeting-background_91957-55.jpg?w=740",
  url: "https://brendanglancy.software/",
  keywords: [
    "Brendan Glancy",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Developer",
    "web developer",
    "Empyrial",
    "OVS Knife Co.",
    "Canton Regional Chamber of Commerce",
    "Akron",
    "Ohio",
  ],
};
