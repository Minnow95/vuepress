import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "山",
    icon: "code",
    children: [
      "JAVA基础",
      "Spring全家桶",
    ],
  },
  {
    text: "海",
    icon: "news",
    children: [
      "DevOps",
      "云原生",
    ],
  },
  {
    text: "经",
    icon: "read",
    link: "https://github.com/justjavac/free-programming-books-zh_CN",
  },
]);
