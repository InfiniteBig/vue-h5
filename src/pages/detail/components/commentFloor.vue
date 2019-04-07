<template>
  <div class="comment-floor">
    <div class="header">
      <div class="l">
        <div class="avatar-container">
          <img src="@/assets/avatar.jpg" alt>
        </div>
        <div class="nick-name">
          风中凌乱的小笼包
          <svg-icon icon-class="invalid-name"/>
        </div>
      </div>
      <div class="r">
        <svg-icon icon-class="leg-orange"/>45
        <!-- <svg-icon icon-class="leg-grey"/> -->
      </div>
    </div>
    <div class="content">
      自古一楼出人才
      <span class="time">2019.08.26</span>
    </div>
    <div class="comment-list">
      <Replay/>
      <!-- <Replay/>
      <Replay/>-->
      <span class="open-more" @click="showReplayPop">
        展开3条回复
        <svg-icon icon-class="arrow-down-gray"/>
      </span>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup } from "vux";
import Replay from "./commentReply";
import { fixBgScroll } from "@/utils/fixPopupBug.js";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    showReplayPop() {
      this.$emit("open");
      this.$emit("close");
    }
  },
  components: { Replay, TransferDom, Popup },
  directives: {
    TransferDom
  }
};
</script>

<style scoped lang="scss">
.comment-floor {
  margin-bottom: 30px;
  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 27px;
    .l {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .nick-name {
        margin-left: 8px;
      }
    }
    .avatar-container {
      width: 27px;
      height: 27px;
      border-radius: 14px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .r {
      font-family: Roboto;
      font-size: 13px;
      color: #ef9325;
      .svg-icon {
        font-size: 20px;
      }
      &.grey {
        color: #373525;
      }
    }
  }
  & > .content {
    padding: 5px 0 15px 33px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #373525;
    .time {
      font-size: 10px;
      color: #bbbbbb;
    }
  }
  .comment-list {
    padding-left: 35px;
    .open-more {
      display: inline-block;
      margin-left: 28px;
      opacity: 0.5;
      font-family: PingFangSC;
      font-size: 12px;
      color: #373525;
      .svg-icon {
        transform: rotate(90deg);
      }
    }
  }
  &:last-child{
    margin-bottom: 0;
  }
}
</style>
