import GitHub from "./components/Icon/GitHub"
import Instagram from "./components/Icon/Instagram"
import LinkedIn from "./components/Icon/LinkedIn"
import Mail from "./components/Icon/Mail"
import Twitter from "./components/Icon/Twitter"
import YouTube from "./components/Icon/YouTube"

export const STW = {
  title: "Simplifying Technical Writing",
  link: "https://writing.dillionmegida.com",
  intro: "https://writing.dillionmegida.com/blog/introduction",
}

export const SITE_URL = "dillionmegida.com"

export const NEWSLETTER = {
  link: "http://newsletter." + SITE_URL,
  title: "Dillion Megida's Weekly Newsletter",
  description:
    "A weekly newsletter where I share resources around Tech, Career and Life",
}

export default {
  SITE_URL,

  meta: {
    TITLE: "Dillion Megida - Developer Advocate 🥑 and Content Creator ✨",
    DESC:
      "Dillion is a Developer Advocate and Content Creator passionate about learning, building, and simplifying topics around tech via articles and videos",
  },

  CURRENT_WORK_NAME: "Stream",
  CURRENT_WORK_LINK: "http://getstream.io/",

  RESUME: "https://bit.ly/3tE2eba",

  MY_PICTURE: "/img/deee.jpg",

  social: {
    YouTube: { link: "https://bit.ly/2RMfqfX", Icon: YouTube },
    Twitter: { link: "https://twitter.com/iamdillion", Icon: Twitter },
    GitHub: { link: "https://github.com/dillionmegida", Icon: GitHub },
    LinkedIn: {
      link: "https://www.linkedin.com/in/dillionmegida/",
      Icon: LinkedIn,
    },
    Instagram: { link: "https://instagram.com/deeecode", Icon: Instagram },
    "E-mail": { link: "mailto:dillionmegida@gmail.com", Icon: Mail },
    DeeeCode: {
      link: "https://www.youtube.com/channel/UCYcBEebHKfCZZKigbGa5Kpg",
      Icon: YouTube,
    },
  },

  CALENDLY: "https://calendly.com/dillionmegida",

  GATSBY_STARTER_ALL_CONTENT:
    "https://github.com/dillionmegida/gatsby-starter-all-content",

  pageLinks: {
    HOME: "/",
    CONTENT: "/content",
    BLOG: "/blog",
  },

  publications: [
    {
      label: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/news/author/dillionmegida/",
    },
    {
      label: "LogRocket",
      link: "https://blog.logrocket.com/author/dillion-megida/",
    },
    {
      label: "Soshace",
      link: "https://blog.soshace.com/author/dillionmegida/",
    },
    {
      label: "Vonage",
      link: "https://learn.vonage.com/authors/dillion-megida/",
    },
  ],
}
