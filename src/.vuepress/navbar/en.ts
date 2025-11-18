import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "前端学习路线",
    icon: "guide",
    link:"/learning",
  },
  {
    text: "时间轴",
    icon: "time",
    link:"/timeline",
  },
  {
    text: "分类",
    icon: "categoryselected",
    children: [
      { text: "HTML", icon: "html", link: "/category/HTML" },
      { text: "CSS", icon: "css", link: "/category/CSS" },
      { text: "JavaScript", icon: "javascript", link: "/category/JavaScript" },
      { text: "TypeScript", icon: "typescript", link: "/category/TypeScript" },
      { text: "Vue", icon: "vue", link: "/category/Vue" },
      { text: "Nginx", icon: "nginx", link: "/category/Nginx" },
      { text: "其他", icon: "others", link: "/category/其他" },
    ],
  },
  {
    text: "框架",
    icon: "frame",
    children: [
      { text: "Vue", icon: "vue", link: "https://cn.vuejs.org/" },
      { text: "React", icon: "react", link: "https://zh-hans.react.dev/" },
      { text: "Angular", icon: "angular", link: "https://angular.cn/" },
    ],
  },
  {
    text: "JavaScript",
    icon: "javascript",
    link:'https://www.javascript.com/'
  },
  {
    text: "Nginx",
    icon: "nginx",
    link:'https://www.nginx-cn.net/'
  },
  {
    text: "NodeJS",
    icon: "nodeJS",
    link:'https://nodejs.cn/'
  },
  {
    text: "关于",
    icon: "people",
    link:'/intro'
  },
]);
