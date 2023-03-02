<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const navItems = ["Home", "About", "Projects", "Contact"];
    const showNav = ref(false);
    return {
      navItems,
      showNav,
    };
  },
});
</script>

<template>
  <div id="navBar">
    <div class="navContainer flex space-between height-100">
      <div class="width-10 margin-left-5">
        <img
          src="../../assets/vue.svg"
          alt=""
          class="height-60 margin-top-20"
        />
      </div>
      <div class="width-90 flex justify-end height-100">
        <div
          class="flex column justify-center margin-right-5 pointer"
          @click="showNav = !showNav"
        >
          <span class="line margin-bottom-2" />
          <span class="line" />
        </div>
      </div>
    </div>
    <div
      class="navContent flex cloumn justify-center align-center"
      v-if="showNav"
    >
      <img
        src="../../assets/general/cross_white.png"
        class="cross pointer"
        alt="corss"
        @click="showNav = !showNav"
      />
      <div>
        <p
          v-for="(navItem, index) in navItems"
          :key="index"
          class="text-center text-h2 secondary"
        >
          {{ navItem }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./NavBar.scss"></style>
