<template>
  <div class="comment-raplay"><div class="header">
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
      本来新海诚的电影除了画质，继秒5之后我就对其他再无期待，但是在看完君の名字这部作品后，让我称帝懵逼！故事的精彩程度和剧本的完成度之高远远超过了他之前的所有作品
      <span class="time">2019.08.26</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.comment-raplay {
    margin-bottom: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    .l {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .nick-name {
        margin-left: 8px;
      }
    }
    .avatar-container {
      width: 20px;
      height: 20px;
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
  .content {
    padding: 5px 15px 5px 28px;
    font-size: 14px;
    line-height: 1.71;
    color: #373525;
    .time {
      font-size: 10px;
      color: #bbbbbb;
    }
  }
}
</style>
