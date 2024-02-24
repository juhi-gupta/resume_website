// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Juhi",
  middleName: "",
  lastName: "Gupta",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/juhi-gupta",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/juhi-gupta-67a9aa85/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/juhi.jpeg"),
  imageSize: 375,
  message: "My name is Juhi Gupta. I have done my Masters of Computer Application (MCA) from Punjab Technical University, India. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like to continously upgrade myself.",
  resume: "https://docs.google.com/document/d/1hbOxIMOkS-4bHf0kIYOQMNLI6DGJAkVi/edit?usp=sharing&ouid=116043145104145956620&rtpof=true&sd=true",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  desc: "I always keeps on working on some personal projects in my free time to update myself. Please find some of my latest sample projects.",
  gitHubUsername: "juhi-gupta", //i.e."johnDoe12Gh"
  reposLength: 5,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "Typescript", value: 90 },
    { name: "Angular - All versions", value: 90 },
    { name: "Angular Material", value: 80 },
    { name: "NgRx", value: 80 },
    { name: "RxJS", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "Bootstrap", value: 90 },
    { name: "Node.Js", value: 75 },
    { name: "SQL", value: 80 },
    { name: "Oracle Server", value: 80 },
  ],
  softSkills: [
    { name: "Good-Communication", value: 80 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Team Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Frontend angular developer  opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "juhi.iacm@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
