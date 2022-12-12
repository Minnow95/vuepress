import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://minnow95.github.io/vuepress-note",

  author: {
    name: "Minnow",
    url: "https://minnow.top",
  },

  iconAssets: "iconfont",

  logo: "/logo.jpeg",

  repo: "Minnow95/vuepress-note",

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: "Minnow",
    description: "专注、克制、展望",
    avatar: "/ai-self.jpeg",
    roundAvatar: true,
    medias: {
      Gitee: "https://gitee.com/minnow",
      GitHub: "https://github.com/Minnow95",
      QQ: "https://minnow95.github.io/vuepress-note/qq.jpg",
      WeChat: "https://minnow95.github.io/vuepress-note/wechat.png",
      Email: "mailto:2491562126@qq.com",
      Gmail: "mailto:minnow950501@gamil.com",
      BiliBili: "https://space.bilibili.com/4506316?spm_id_from=333.1007.0.0",
    },
  },

  // navbar
  navbar: zhNavbar,

  // sidebar
  sidebar: zhSidebar,

  displayFooter: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  plugins: {
    blog: {
      excerpt: true,
    },
    
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "Minnow95/vuepress-note",
      repoId: "R_kgDOIlZccg",
      category: "Q&A",
      categoryId: "DIC_kwDOIlZccs4CTBmF",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
