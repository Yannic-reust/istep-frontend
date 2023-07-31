<template>
  <div id="selectLocale">
    <p>{{ store.state.currentLanguage }}</p>
    <!-- <div class="wrapper">
      <select class="language-selector">
        <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
          <p v-if="lang === 'de'">Deutsch</p>
          <p v-else>Englisch</p>
         
        </option>
      </select>
    </div> -->
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
export default {
  name: "SelectLocale",

  data() {
    return { 
      langs: ["en", "de"],
    store: useStore(),};

  },
  methods: {
    changelang(e: string) {
      this.store.state.setLanguage(e);
      window.location.reload();
    },
  },
};
</script>
<style scoped src="./SelectLocale.scss"></style>
