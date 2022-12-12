import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  
  lang: "zh-CN",

  title: "山海不是经",

  description: "Minnow 的博客",

  base: "/vuepress-note/",

  theme,

  shouldPrefetch: false,

});
