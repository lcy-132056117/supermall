<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

    <!-- <img src="../../assets/img/tabbar/shouye.svg" />
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red,",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      //  /home->
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // console.log("itemClick");
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 2px;
}
.active {
  color: red;
}
</style>