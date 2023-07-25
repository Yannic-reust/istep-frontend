<template>
  <div id="selectLocale">
    <div class="wrapper">
      <select class="language-selector" v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang" >
          <p  v-if="lang === 'de'">Deutsch</p>
          <p  v-else>Englisch</p>
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectLocale",
  data() {
    return { langs: ["en", "de"] };
  },
};
</script>
<style scoped src="./SelectLocale.scss"></style>
