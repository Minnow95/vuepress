import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "山",
      icon: "code",
      prefix: "docs/山/",
      collapsible: true,
      children: [
        { text: "JAVA基础",icon: "build", prefix: "JAVA基础/", collapsible: true, children: "structure", },
        { text: "Spring全家桶",icon: "leaf", prefix: "Spring全家桶/", collapsible: true, children: "structure", },
        { text: "DevOps",icon: "operate", prefix: "DevOps/", collapsible: true, children: "structure", },
        { text: "云原生",icon: "network", prefix: "云原生/", collapsible: true, children: "structure", },
        { text: "架构设计",icon: "relation", prefix: "架构设计/", collapsible: true, children: "structure", },
      ],
    },
    {
      text: "海",
      icon: "news",
      prefix: "docs/海/",
      collapsible: true,
      children: "structure",
    },
  ],
});
