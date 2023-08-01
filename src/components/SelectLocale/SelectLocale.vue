<template>
  <div id="selectLocale">
    <h1>{{ open }}</h1>
    <div class="dropdown">
      <div class="flex align-center space-between" @click="open = !open">
        <span class="selected padding-2">
          {{ store.state.currentLanguage }}</span
        >
        <div class="caret margin-right-2"></div>
      </div>

      <div class="menu" v-if="open">

        <p v-for="(lang, index) in store.state.locale" :key="index" class="padding-2" @click="changelang(lang.)">
          {{ lang.lang }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "SelectLocale",

  data() {
    return {
      open: false,
      store: useStore(),
    };
  },
  methods: {
    changelang(e: string) {
      console.log(e)
      this.store.state.setLanguage(e);
      window.location.reload();
    },
  },
};
</script>
<style scoped src="./SelectLocale.scss"></style>
