<template>
  <div class="detail">
    <div class="banner-container">
      <swiper
        :auto="true"
        height="500px"
        :list="imgList"
        :loop="true"
        :show-dots="false"
        :threshold="0"
        v-model="bannerIndex"
        :min-moving-distance="0"
      ></swiper>
      <div class="dot">{{bannerIndex+1}}/{{imgList.length}}</div>
      <div class="icon">
        <div class="l">
          <svg-icon icon-class="light-left-arrow"/>
        </div>
        <div class="r">
          <svg-icon icon-class="light-3-point"/>
        </div>
      </div>
      <div class="tag-box">
        <div class="tag">AMO SWEET & COCKTAIL BAR</div>
        <div class="point"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="content-container">
      <div class="user">
        <div class="user-info">
          <div class="user-info-avatar">
            <div class="avatar-container">
              <img src="@/assets/avatar.jpg" alt>
            </div>
            <div class="name-time">
              <div class="name">
                pieroborgo
                <svg-icon icon-class="invalid-name"/>
              </div>
              <div class="time">2019.08.26</div>
            </div>
          </div>
          <div class="user-info-button">关注</div>
        </div>
        <div class="text" :class="{hide:hide}">
          {{content.length>60&&hide?content.substr(0,115)+'…':content}}
          <span
            class="show-more"
            @click="hide = !hide"
          >{{hide?'展开':'收起'}}</span>
        </div>
      </div>
      <div class="tags">
        <span>#本地攻略</span>
        <span>#上海旅行</span>
        <span>#上海魔都探店</span>
        <span>#上海</span>
        <span>#外滩</span>
        <span>#东方明珠广播电视塔</span>
      </div>
      <div class="link">
        <div class="img-wrapper">
          <img src="@/assets/avatar.jpg" alt>
        </div>
        <div class="title">
          <div class="t">
            <span>AMO SWEET & COCKTAILdsds...</span>
            <svg-icon icon-class="arrow-left-dark"/>
          </div>
          <div class="b">
            <Rate :fill="2.5"/>
            <span class="num">289条</span>
            <span class="cost">¥146/人</span>
          </div>
        </div>
        <div class="collect">
          <span>
            <svg-icon icon-class="star-o"/>
          </span>
          <span>38.4w</span>
        </div>
      </div>
    </div>
    <Comment @open="showAllComment=true"/>
    <TabBar/>
  </div>
</template>

<script>
import { Swiper } from "vux";
import Rate from "@/components/Rate";
import Comment from "./components/comment";
import TabBar from "./components/tabBar";
const List = [
  "http://img1.imgtn.bdimg.com/it/u=1683559170,526719403&fm=26&gp=0.jpg",
  "http://img4.imgtn.bdimg.com/it/u=2489069495,606509333&fm=26&gp=0.jpg",
  "http://img1.imgtn.bdimg.com/it/u=1012555161,2548874806&fm=11&gp=0.jpg"
];

const imgList = List.map((one, index) => ({
  url: "javascript:",
  img: one
}));
export default {
  props: {},
  data() {
    return {
      show: true,
      bannerIndex: 0,
      hide: true,
      showAllComment: false,
      imgList,
      content:
        "学生党2k内带你游遍魔都【附保姆式攻略】 ❤️本人一名学生党，放假之后到上海去玩了5天😄下面是我的分享哈哈～时间呢是6.24到6.28噢，这个时候上海还是蛮热的～最高37度呢😂所以各位小姐姐小哥哥们防晒不能少呀还有要带伞噢 学生党2k内带你游遍魔都【附保姆式攻略】 ❤️本人一名学生党，放假之后到上海去玩了5天😄下面是我的分享哈哈～时间呢是6.24到6.28噢，这个时候上海还是蛮热的～最高37度呢😂所以各位小姐姐小哥哥们防晒不能少呀还有要带伞噢 学生党2k内带你游遍魔都【附保姆式攻略】 ❤️本人一名学生党，放假之后到上海去玩了5天😄下面是我的分享哈哈～时间呢是6.24到6.28噢，这个时候上海还是蛮热的～最高37度呢😂所以各位小姐姐小哥哥们防晒不能少呀还有要带伞噢"
    };
  },
  computed: {},
  created() {
    window.addEventListener("resize", function() {
      if (
        document.activeElement.tagName == "INPUT" ||
        document.activeElement.tagName == "TEXTAREA"
      ) {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    });
  },
  mounted() {},
  watch: {},
  methods: {},
  components: { Rate, Comment, Swiper, TabBar }
};
</script>

<style scoped lang="scss">
@import "./style/index.scss";
</style>
