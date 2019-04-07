<template>
  <flexbox class="bottom-tabbar">
    <flexbox-item>
      <i @click="scrollToMsg">
        <svg-icon icon-class="message"/>
      </i>
      <span>30</span>
    </flexbox-item>
    <flexbox-item>
      <i>
        <svg-icon icon-class="star-o"/>
      </i>

      <span>100</span>
    </flexbox-item>
    <flexbox-item>
      <i>
        <svg-icon icon-class="leg-grey"/>
      </i>
      <span>60</span>
    </flexbox-item>
    <flexbox-item>
      <i>
        <svg-icon icon-class="share"/>
      </i>
      <span>50</span>
    </flexbox-item>
  </flexbox>
</template>

<script>
import { Flexbox, FlexboxItem } from "vux";
import { scrollTo } from "@/utils/scrollTo";
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
    scrollToMsg() {
      const oT = document.getElementById('scrollTag').offsetTop
      scrollTo(oT-100, 800);
    }
  },
  components: {
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped lang="scss">
.bottom-tabbar {
  z-index: 501;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  box-shadow: 0 -0.5px 0 0 #eeeeee;
  background-color: rgba(255, 255, 255, 0.9);
  border-top: 0.5px solid #eee; /*no*/
  .vux-flexbox-item {
    text-align: center;
    i {
      font-size: 24px;
    }
    span {
      opacity: 0.65;
      font-family: Roboto-Regular;
      font-size: 13px;
      color: #373525;
    }
  }
}
</style>
