<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Navbar",
  props: ["navbar"],
  data() {
    return {
      store: useStore(),
    };
  },
  methods: {
    changelang(e: string) {
      this.store.dispatch("setLanguage", { lang: e });
      window.location.reload();
    },
  },
  setup() {
    const navItems = [
      { name: "Donate", link: "/Donate" },
      { name: "Blog", link: "/BlogAlbanien" },
      { name: "Elbasan Course Websites", link: "/elbasanACourse" },
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
    <div class="languageSwitch">
      <div class="flex margin-left-5">
        <div
          v-for="(lang, index) in store.state.locale2"
          :key="index"
          class="flex"
        >
          <a @click="changelang(lang)" class="pointer">{{ lang.code }}</a>

          <p v-if="index !== store.state.locale2.length - 1">|</p>
        </div>
      </div>
    </div>
    <div class="navContainer flex space-between ">
      <div class="width-80 margin-left-5 flex align-center">
        <div class="baseline flex">
          <router-link to="/" class="none secondary text-h2 bold"
            >iSTEP</router-link
          >
          <p class="secondary margin-left-1">into my future</p>
        </div>
      </div>
      <div class="width-20 flex justify-end height-100">
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
          <a :href="navItem.link" class="text-h1 secondary decoration-none">
            {{ navbar[index].Name }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./NavBar.scss"></style>
