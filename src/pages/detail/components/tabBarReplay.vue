<template>
  <flexbox class="replay-tabbar" v-if="show">
    <flexbox-item :span="1/2">
      <span @click="focused">说点好听的…</span>
      <!-- <x-input v-model="value" placeholder=""></x-input> -->
    </flexbox-item>
    <flexbox-item>
      <i>
        <svg-icon icon-class="star-o"/>
      </i>
    </flexbox-item>
    <flexbox-item>
      <i>
        <svg-icon icon-class="leg-grey"/>
      </i>
    </flexbox-item>
    <flexbox-item>
      <i>
        <svg-icon icon-class="share"/>
      </i>
    </flexbox-item>
  </flexbox>
  <div class="replay-tabbar input-container" v-else>
    <x-textarea
      ref="inp"
      v-model="value"
      :height="18"
      autosize
      v-focus="focus"
      @on-blur="show=true"
      placeholder="说点好听的…"
    ></x-textarea>
    <span :class="{acrive:value}">发布</span>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XInput, XTextarea } from "vux";
export default {
  props: {},
  data() {
    return {
      value: "",
      show: true,
      focus: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    focused() {
      this.show = false;
      this.focus = true;
      this.$nextTick(function() {
        this.$refs.inp.focus();
      });
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    XInput,
    XTextarea
  },
  directives: {
    focus: {
      inserted: function(el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.replay-tabbar {
  z-index: 2020;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  padding: 0 16px;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  box-shadow: 0 -0.5px 0 0 #eeeeee;
  background-color: rgba(255, 255, 255, 0.9);
  border-top: 0.5px solid #eee; /*no*/
  .vux-flexbox-item {
    text-align: left;
    span {
      font-size: 13px;
      color: #bbbbbb;
    }
    i {
      font-size: 24px;
    }
  }
}
.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  height: auto;
  padding: 10px;
  min-height: 50px;
  box-shadow: 0 -0.5px 0 0 #dddddd;
  background-color: #ffffff;
  .weui-cell {
    padding: 5px;
  }
  .vux-x-input,
  .vux-x-textarea {
    width: 295px;
    border-radius: 5px;
    border: 1px solid #eee;
    // background-color: #f5f5f5;
  }
  span {
    width: 60px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #bbbbbb;
    &.acrive {
      color: #000;
    }
  }
}
</style>
