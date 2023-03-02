<script lang="ts">
import { defineComponent } from "vue";
import titleBackground from "../../components/TitleBackground/TitleBackground.vue";
import contactForm from "../../components/ContactForm/ContactForm.vue";
import aboutUs from "../../components/AboutUs/AboutUs.vue";

export default defineComponent({
  setup() {},
  components: {
    titleBackground,
    contactForm,
    aboutUs,
  },
});
</script>

<template>
  <div id="home">
    <titleBackground></titleBackground>
    <h1>Home</h1>
    <aboutUs />
    <contactForm />
  </div>
</template>

<style scoped src="./Home.scss"></style>
