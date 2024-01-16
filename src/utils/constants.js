import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJava,
  FaLinux
} from "react-icons/fa";

import {RiOpenaiFill} from "react-icons/ri";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql, BiLogoGmail } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiPowerapps,
  SiPowerautomate,
  SiPowerbi,
  SiPowervirtualagents,
  SiPowerpages
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Artificial Intelligence",
    icon: RiOpenaiFill,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
];

export const skillsData = [
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Linux",
    icon: FaLinux,
  },

  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MySQL",
    icon: GrMysql,
  },
  {
    name: "Power Apps",
    icon: SiPowerapps,
  },
  {
    name: "Power Automate",
    icon: SiPowerautomate,
  },
  {
    name: "Power BI",
    icon: SiPowerbi,
  },
  {
    name: "Power Virtual Agents",
    icon: SiPowervirtualagents,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: RiOpenaiFill,
  },
];

export const workData = [
  {
    company: "Zelarsoft Private Limited",
    designation: "Software Engineer",
    duration: "June 2023 - Present",
    companyImg: "zelarsoft.jpg",
    description: (
      <>
        <ul>
          <li>
            I work on Reviniti, an analytics product designed for e-commerce
            players in the bid management domain. Solely migrated the old
            codebase from a templating engine (PugJS) to React with TypeScript.
          </li>
          <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "TechDimension IT Solutions LLP",
    designation: "Associate Software Engineer",
    duration: "August 2022 - May 2023",
    companyImg: "techd.jpg",
    description: (
      <>
        <ul>
          <li>
            Engaged in creating comprehensive client-specific and syndicated
            research reports, along with SEO-focused articles and collateral
            materials within the domains of chemicals, materials, consumer
            goods, and industrial goods.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: "https://github.com/vaheedsk36/movie-magnet",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/SaiVittal",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/sai-vittal-0201/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/vittal18918",
    icon: FaTwitter,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "mailto:vickysaivittal@gmail.com",
    icon: BiLogoGmail,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
