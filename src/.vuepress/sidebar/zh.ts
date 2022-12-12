import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "山",
      icon: "creative",
      prefix: "docs/山/",
      children: "structure",
    },
    {
      text: "海",
      icon: "note",
      prefix: "docs/海/",
      children: "structure",
    },
  ],
});
