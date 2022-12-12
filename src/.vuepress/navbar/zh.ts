import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "山",
    icon: "code",
    prefix: "/docs/山/",
    children: [
      { text: "JAVA基础",icon: "build", link: "JAVA基础/" },
      { text: "Spring全家桶",icon: "leaf", link: "Spring全家桶/" },
      { text: "DevOps",icon: "operate", link: "DevOps/" },
      { text: "云原生",icon: "network", link: "云原生/" },
      { text: "架构设计",icon: "relation", link: "架构设计/" },
    ],
  },
  {
    text: "海",
    icon: "news",
    link: "/docs/海/",
  },
  {
    text: "经",
    icon: "read",
    link: "https://github.com/justjavac/free-programming-books-zh_CN",
  },
]);
