<template>
  <div class="home-wrapper">
    <div class="side-title">
      <Icon name="icon-me"></Icon>
      关于我
    </div>
    <div class="home-body">
      <div class="myself-main">
        <div class="main-desc">
          <p>目前技术水平尚浅，正在持续努力学习中...</p>
        </div>
        <div class="main-footer">
          ◐ 本博客是采用 Vue2.5 + Node15.14.0 + Mongodb4.2.0
          前后端完全分离模式来搭建。 💪 💪 💪
        </div>
      </div>
      <div class="side-main">
        <div class="side-wrapper">
          <div class="side-img">
            <img src="../../images/avatar.jpg" class="avatar" alt="" />
          </div>
          <div class="side-content">
            <div class="content-item">网名：</div>
            <div class="content-item">职业：</div>
            <div class="content-item">邮箱：</div>
            <div class="content-item">个人微信：</div>
          </div>
        </div>
        <div class="side-wrapper">
          <div class="side-title">
            <Icon name="icon-wetchat"></Icon>
            个人微信
          </div>
          <div class="side-img">
            <img src="../../images/qrcode.jpg" class="qrcode" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myself",
};
</script>
<style lang="less" scoped>
.home-body {
  background-color: #fff;
}
.side-title {
  width: 1200px;
  background-color: #fff;
  margin: 20px auto 0;
  padding-left: 20px;
  &::after {
    width: 8.4%;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
}
.myself-main {
  width: 70%;
  padding: 24px;
  border-right: 1px solid @borderColor;
  .main-desc {
    font-size: 14px;
    line-height: 32px;
    color: @thinColor;
  }
  .main-img {
    margin-top: 10px;
    max-height: 300px;
    object-fit: contain;
    box-shadow: 12px 12px 12px @shadowColor;
    border-radius: 12px;
  }
  .main-footer {
    background: @thinBgColor;
    padding: 10px;
    text-align: left;
    line-height: 32px;
    margin: 20px auto;
    color: #0609308a;
    box-shadow: 6px 6px 12px @shadowColor;
    border-radius: 12px;
    a {
      color: #0609308a;
      text-decoration: underline;
    }
  }
}
.side-main {
  flex: 1;
  .side-wrapper {
    margin-top: 24px;
    .side-title {
      width: 92%;
      margin: 0;
      padding-left: 0;
      svg {
        font-size: 24px;
      }
      &::after {
        width: 10%;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
    .side-img {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding: 4px;
        box-shadow: 0px 4px 32px @shadowColor;
      }
      .qrcode {
        width: 80%;
        height: 80%;
        border-radius: 12px;
        margin-top: 24px;
        box-shadow: 0px 6px 12px @shadowColor;
      }
    }
    .side-content {
      .content-item {
        width: 92%;
        padding: 5px 10px;
        margin: 8px 0;
        border-radius: 5px;
        font-size: 14px;
        color: @thinColor;
        background-color: @thinBgColor;
        box-shadow: 4px 4px 5px @shadowColor;
      }
    }
  }
}
</style>
