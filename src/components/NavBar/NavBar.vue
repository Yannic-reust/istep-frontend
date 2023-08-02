<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const navItems = [
      { name: "Team", link: "team" },
      { name: "Unsere Werte", link: "values" },
      { name: "Vision", link: "vision" },
      { name: "Über Uns", link: "aboutUs" },
      { name: "Spenden", link: "donate" },
      { name: "Projekt", link: "projectTeaser" },
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
      <div class="width-10 margin-left-5 flex align-center">
        <h2 class="secondary thin">iSTEP</h2>
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
          @click="showNav = !showNav "
          
        >
        <a :href="'/#'+navItem.link" class="text-h1 secondary decoration-none">
          {{ navItem.name }}
        </a>
        
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./NavBar.scss"></style>
