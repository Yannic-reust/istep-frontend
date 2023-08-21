<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  props: ["navbar"],
  setup() {
    const navItems = [
      { name: "Projekte", link: "projectTeaser" },
      { name: "Vision", link: "vision" },
      { name: "Unsere Werte", link: "values" },
      { name: "Über uns", link: "team" },
      { name: "Spenden", link: "donate" },
      { name: "Kontaktiere Uns", link: "contactForm" },
    ];

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
      <div class="width-30 margin-left-5 flex align-center">
        <div class="test flex">
          <router-link to="/" class="none secondary text-h2 bold">iSTEP</router-link>
          <p class="secondary margin-left-1">into my future</p>
        </div>
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
          class="text-center text-h2 secondary margin-5"
          @click="showNav = !showNav"
        >
          <a
            :href="'/#' + navItem.link"
            class="text-h1 secondary decoration-none"
          >
            {{ navbar[index].Name }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./NavBar.scss"></style>
