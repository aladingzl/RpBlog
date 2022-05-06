<template>
  <div class="intro-container">
    <div class="intro-box">
      <h1 class="intro-title">MY BLOG</h1>
      <span class="intro-desc">
        「 跟昨天相比 我今天进步了吗？」
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookCover"
};
</script>

<style lang="less" scoped>
.intro-container {
  background: no-repeat center center;
  background-color: #a3a3a3;
  background-image: url(../../../images/bg6.jpg);
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 420px;
  .intro-box {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 99;
    .intro-title {
      color: @charaColor;
      font-family: lato, sans-serif;
      font-size: 3.5em;
      letter-spacing: 10px;
      margin-top: 0;
      margin-bottom: 0;
      // text-shadow: rgb(198, 221, 228) -1px -1px 1px,
      //   rgb(254, 254, 255) 1px 1px 1px;
      margin-bottom: 20px;
    }
    .intro-desc {
      color: @charaColor;
      font-size: 1em;
      font-weight: 400;
      padding: 0.2em 0;
      letter-spacing: 5px;
      text-transform: capitalize;
      margin-top: 0;
      margin-bottom: 0;
      // text-shadow: rgb(198, 221, 228) -1px -1px 1px,
      //   rgb(254, 254, 255) 1px 1px 1px;
    }
  }
  img {
    position: absolute;
    bottom: 0;
    object-fit: contain;
  }
}
</style>
