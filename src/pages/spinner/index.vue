<template>
  <div class="spinner-demo">
    <Spinner/>
    <Spinner1/>
    <Spinner2/>
    <Spinner3/>
    <Spinner4/>
    <Spinner5/>
    <Spinner6/>
  </div>
</template>

<script>
import Spinner from "@/components/Loading";
import Spinner1 from "@/components/Loading/index.1.vue";
import Spinner2 from "@/components/Loading/index.2.vue";
import Spinner3 from "@/components/Loading/index.3.vue";
import Spinner4 from "@/components/Loading/index.4.vue";
import Spinner5 from "@/components/Loading/index.5.vue";
import Spinner6 from "@/components/Loading/index.6.vue";
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
  components: {
    Spinner,
    Spinner1,
    Spinner2,
    Spinner3,
    Spinner4,
    Spinner5,
    Spinner6
  }
};
</script>

<style scoped lang="scss">
.spinner-demo {
  width: 100%;
  height: 100%;
}
</style>
