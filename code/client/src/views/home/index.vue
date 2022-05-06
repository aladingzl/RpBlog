<template>
  <div class="home-wrapper">
    <intro></intro>
    <div class="home-body">
      <!-- 文章主体 -->
      <blog></blog>
      <!-- 侧边栏 -->
      <div class="side-wrapper">
        <myself></myself>
        <search :isCache="true"></search>
        <!-- 标签 -->
        <label-classify></label-classify>
        <side-article :sideClassify="BROWSE_STATUS"></side-article>
        <side-article :sideClassify="RECOMMEND_STATUS"></side-article>
      </div>
    </div>
  </div>
</template>
<script>
import Intro from "./components/intro";
import Blog from "./components/blog";
import Myself from "components/myself";
import Search from "components/search";
import LabelClassify from "components/labelClassify";
import SideArticle from "components/sideArticle";
import { BROWSE_STATUS, RECOMMEND_STATUS } from "src/constant/side";
export default {
  name: "indexComponent",
  components: {
    Intro,
    Blog,
    Myself,
    Search,
    LabelClassify,
    SideArticle,
  },
  data() {
    return {
      BROWSE_STATUS,
      RECOMMEND_STATUS,
    };
  },
};
</script>
<style lang="less" scoped>
</style>