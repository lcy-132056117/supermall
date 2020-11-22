<template>
  <div id="cart">
    <!-- cartCount -->
    <!-- <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar> -->
    <!-- <cart-list class="cart-list" :cart-list="cartList"></cart-list> -->
    <!-- <bottom-bar></bottom-bar> -->
  </div>
</template>

<script>
// import NavBar from "common/navbar/NavBar";
// import CartList from "./childComps/CartList";
// import BottomBar from "./childComps/BottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    // BottomBar,
  },
  // computed: {
  //   cartList() {
  //     return this.$store.getters.cartList;
  //   },
  //   cartCount() {
  //     return this.$store.getters.cartCount;
  //   },
  // },
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  /* background-color: var(--color-tint); */
  background-color: var(#ff8198);
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>
