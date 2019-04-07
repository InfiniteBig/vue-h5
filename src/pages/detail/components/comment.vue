<template>
  <div class="comment-container">
    <div class="f-tag">
      <div class="l" id="scrollTag">
        评论
        <span>(30)</span>
      </div>
      <div class="r" @click="checkAll">
        <span>查看全部</span>
        <svg-icon icon-class="arrow-left"/>
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <Sticky :disabled="disabled">
        <div class="s-tag">人气评论</div>
      </Sticky>
      <div class="hot-comment-list">
        <Floor @open="outRepaly"/>
        <Floor @open="outRepaly"/>
        <Floor @open="outRepaly"/>
        <div class="all" @click="checkPopular">
          全部精彩评论
          <svg-icon icon-class="arrow-down-gray"/>
          <div class="line"></div>
        </div>
      </div>
      <Sticky :disabled="disabled">
        <div class="s-tag">最新评论</div>
      </Sticky>
      <div class="new-comment-list">
        <Floor @open="outRepaly"/>
        <Floor @open="outRepaly"/>
        <Floor @open="outRepaly"/>
      </div>
    </van-list>
    <!-- 全部评论弹框 -->
    <div v-show="showAllComment" v-transfer-dom class="com-popup all-comment">
      <van-popup v-model="showAllComment" position="bottom">
        <div class="loading" v-if="loadData">
          <Spinner/>
          <!-- <span>加载中</span> -->
        </div>
        <van-list
          v-else
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="s-tag">人气评论</div>
          <div class="hot-comment-list">
            <Floor @close="close"/>
            <Floor @close="close"/>
            <Floor @close="close"/>
          </div>
          <div class="s-tag">最新评论</div>
          <div class="new-comment-list">
            <Floor @close="close"/>
            <Floor @close="close"/>
            <Floor @close="close"/>
          </div>
        </van-list>
      </van-popup>
      <TabBar/>
    </div>
    <!-- 全部人气评论弹框 -->
    <div v-transfer-dom class="com-popup popular-comment">
      <van-popup v-model="showPopularComment" position="bottom">
        <div class="loading" v-if="loadData">
          <Spinner/>
          <!-- <span>加载中</span> -->
        </div>
        <van-list
          v-else
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="s-tag">人气评论</div>
          <div class="hot-comment-list">
            <Floor @close="close"/>
            <Floor @close="close"/>
            <Floor @close="close"/>
          </div>
        </van-list>
      </van-popup>
    </div>
    <!-- 回复弹框 -->
    <div v-show="showReplay" v-transfer-dom class="com-popup replay-comment">
      <van-popup v-model="showReplay" position="bottom">
        <div class="floor">
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
        </div>
        <div class="loading" v-if="loadData">
          <Spinner/>
          <!-- <span>加载中</span> -->
        </div>
        <div class="replay-list" v-else>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </van-popup>
      <TabBar/>
    </div>
  </div>
</template>

<script>
import Floor from "./commentFloor";
import Spinner from "@/components/Loading";
import { Sticky, TransferDom } from "vux";
import TabBar from "./tabBarReplay";
// import { fixBgScroll } from "@/utils/fixPopupBug.js";

export default {
  props: {},
  data() {
    return {
      loadData: true,
      loading: false,
      finished: false,
      showAllComment: false,
      showPopularComment: false,
      showReplay: false,
      disabled:
        typeof navigator !== "undefined" &&
        /iphone/i.test(navigator.userAgent) &&
        /ucbrowser/i.test(navigator.userAgent)
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    //获取所有评论
    checkAll() {
      this.loadDataApi();
      this.showAllComment = true;
    },
    // 获取人气评论
    checkPopular() {
      this.loadDataApi();
      this.showPopularComment = true;
    },
    close(v) {
      this.loadDataApi();
      this.showAllComment = false;
      this.showReplay = true;
    },
    outRepaly() {
      this.loadDataApi();
      this.showReplay = true;
    },
    onLoad() {
      // 异步更新数据
      this.loading = true;
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        this.finished = true;
        // 数据全部加载完成
      }, 500);
    },
    loadDataApi() {
      this.loadData = true;
      setTimeout(() => {
        this.loadData = false;
      }, 2000);
    }
  },
  components: { Floor, Sticky, Spinner, TabBar },
  directives: {
    TransferDom
  }
};
</script>

<style scoped lang="scss">
.comment-container {
  padding: 0 16px 20px;
  .f-tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
    .l {
      font-size: 20px;
      font-weight: 600;
      color: #373525;
      span {
        font-size: 14px;
        color: #bbbbbb;
      }
    }
    .r {
      opacity: 0.15;
      font-size: 12px;
      color: #373525;
    }
  }
  .s-tag {
    height: 35px;
    margin-top: 20px;
    margin-bottom: 14px;
    // border-bottom: 1px solid #eee;
    font-size: 14px;
    line-height: 35px;
    background-color: #fff;
    font-weight: 600;
    color: #373525;
  }
  .hot-comment-list {
    .all {
      position: relative;
      width: 146px;
      height: 30px;
      margin: 0 auto;
      opacity: 0.5;
      font-size: 14px;
      text-align: center;
      line-height: 30px;
      color: #373525;
      border-radius: 22px;
      border: solid 0.5px #dddddd;
      .svg-icon {
        transform: rotate(90deg);
      }
      &::before {
        position: absolute;
        left: -98px;
        top: 15px;
        content: "";
        width: 90px;
        height: 0.5px; /*no*/
        background-color: #ddd;
      }
      &::after {
        position: absolute;
        right: -98px;
        top: 15px;
        content: "";
        width: 90px;
        height: 0.5px; /*no*/
        background-color: #ddd;
      }
    }
  }
}
</style>
