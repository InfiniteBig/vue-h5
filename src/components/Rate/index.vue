<template>
  <div class="star-container">
    <svg-icon icon-class="star-fill" v-for="n in filled" :key="`${n}1`"/><svg-icon icon-class="star-half" v-if="hasHalf"/><svg-icon icon-class="star-e" v-for="n in empty" :key="`${n}2`"/>
  </div>
</template>

<script>
export default {
  props: ["fill"],
  data() {
    return {
      hasHalf: false,
      filled: 5,
      empty: 0
    };
  },
  computed: {},
  created() {
      this.mathStar()
  },
  mounted() {},
  watch: {},
  methods: {
    mathStar() {
      const number = this.fill;
      const isInt = /^-?\\d+$/.test(number);
      if (isInt) {
        this.hasHalf = false;
        this.filled = number
        this.empty = 5 - number
      } else {
        this.hasHalf = true;
        this.filled = Math.floor(number) 
        this.empty = 4 - Math.floor(number)
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.star-container {
  display: inline-block;
  font-size: 14px;
}
</style>
