import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  // 修改这里的 base 配置
  base: "/",  // 改为根路径
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "橙猫猫",
      description: "橙猫猫's blog",
    },
  },

  theme,

  plugins: [
    searchPlugin({
      // 你的选项
    })
  ]
});