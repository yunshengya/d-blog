import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "前端学习路线",
      icon: "guide",
      prefix: "learning/",
      link: "learning/",
      children: "structure",
    },
    {
      text: "HTML",
      icon: "html",
      prefix: "category/HTML",
      children: "structure",
    },
    {
      text: "CSS",
      icon: "css",
      prefix: "category/CSS",
      children: "structure",
    },{
      text: "JavaScript",
      icon: "javascript",
      prefix: "category/JavaScript",
      children: "structure",
    },{
      text: "TypeScript",
      icon: "typescript",
      prefix: "category/TypeScript",
      children: "structure",
    },{
      text: "Vue",
      icon: "vue",
      prefix: "category/Vue",
      children: "structure",
    },{
      text: "Nginx",
      icon: "nginx",
      prefix: "category/Nginx",
      children: "structure",
    },{
      text: "其他",
      icon: "others",
      prefix: "category/其他",
      children: "structure",
    },
  ],
});
