/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Parthiv Akbari",
  title: "Hi all, I'm Parth",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Ethers / Solidity and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-Ko7Ut1LfI6aE-UvwcPC8GFIEYFkRJ7f/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/parth-5097",
  linkedin: "https://www.linkedin.com/in/parthiv-akbari/",
  gmail: "parthivakbari11@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@parthivakbari11",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK WHICH IS ASSOCIATED WITH BLOCKCHAIN DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop highly interactive MEAN Stack for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean / Meta Mask / Truffle"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Web3js",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Etherjs",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "hardhat",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Truffle",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Ganache",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Blockchain Tech",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Concordia University",
      logo: require("./assets/images/concordiaLogo.png"),
      subHeader: "Master of Applied Computer Science {MACS}",
      duration: "September 2021 - August 2023",
      desc: "Participated in the research of IOT projects/Blockchain tech and published 2 papers.",
      descBullets: [
        "In the capacity of a graduate student, led a class of nearly 150 undergraduate students, guiding them through labs, actively resolving challenges, and enhancing the overall session interactivity.",
        "Successfully crafted competitive algorithms within constrained timeframes, engaging in friendly competition with classmates. This experience underscored the significance of time management and sharpened problem-solving skills.",
        "Collaborated with 4 to 5 professors, providing valuable assistance in their projects. Gained substantial skills by learning from their expertise, receiving meaningful advice, and making notable advancements in the field."
      ]
    },
    {
      schoolName: "Uka Tarsadia University",
      logo: require("./assets/images/ukatarsadiaLogo.png"),
      subHeader: "Bachelor of Technology in Computer Engineering {B.Tech}",
      duration: "July 2016 - June 2020",
      desc: "Took courses about Advance programming practices, Computer vision, Operating Systems, ...",
      descBullets: [
        "Secured victory in a state-level hackathon by creating an Automated Guided Vehicle within the domains of IoT and Advanced Driver Assistance Systems (ADS).",
        "Participated in a national-level hackathon with the aim of making a significant impact on personal career growth and enhancing the university's reputation.",
        "Demonstrated excellence in various subjects, actively contributing to practical learning by taking charge of labs and teaching fellow junior students. This experience not only strengthened public speaking skills but also deepened understanding of the subjects."  
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr. Software Developer",
      company: "Dhameliya Infotech",
      companylogo: require("./assets/images/dhameliyaLogo.png"),
      date: "Aug 2020 – Aug 2021",
      desc: "Throughout this timeframe, I engaged in client interactions, handling requests on behalf of the company. This resulted in the successful completion of two major projects and three minor projects, including maintenance tasks.",
      // descBullets: [
      //   "Orchestrated agile scrum ceremonies, including sprint planning and daily stand-up, in collaboration with cross-functional teams, ensuring seamless project execution and timely delivery of optimized features.",
      //   "Re-engineered full-stack development of web app resulting in bug-free releases deployed promptly and within standards, which improved performance and led to a 35% rise in sales."
      // ]
    },
    {
      role: "Software Developer Intern",
      company: "Dhameliya Infotech",
      companylogo: require("./assets/images/dhameliyaLogo.png"),
      date: "Jan 2020 – june 2020",
      desc: "I initiated the process of learning how to efficiently build both backend and frontend, enabling me to design various large-scale applications.",
      // descBullets: [
      //   "Collaborated with the development team to design and implement software solutions.",
      //   "Wrote clean and efficient code using Node and Angular."
      // ]
    },
    {
      role: "Blockchain developer Intern",
      company: "AtoZ Infoway LLP",
      companylogo: require("./assets/images/atozinfowayLogo.png"),
      date: "June 2019 – Dec 2019",
      desc: "This marks my inaugural significant internship, during which I acquired knowledge about blockchain and its related technological concepts.",
      // descBullets: [
      //   "Implemented smart contracts using languages such as Solidity.",
      //   "Assisted in researching and implementing blockchain protocols and consensus algorithms."
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to hire me? My Inbox is open for all.",
  number: "4389281035",
  email_address: "parthivakbari11@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "PAkbari5097", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
