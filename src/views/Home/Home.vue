<script lang="ts">
import { defineComponent } from "vue";
import titleBackground from "../../components/TitleBackground/TitleBackground.vue";
import contactForm from "../../components/ContactForm/ContactForm.vue";
import aboutUs from "../../components/AboutUs/AboutUs.vue";
import projectTeaser from "../../components/ProjectTeaser/ProjectTeaser.vue";

export default defineComponent({
  setup() {},
  components: {
    titleBackground,
    contactForm,
    aboutUs,
    projectTeaser,
  },
});
</script>

<template>
  <div id="home">
    <div class="padding-bottom-5">
      <titleBackground></titleBackground>
    </div>

    <div class="margin-top-5 padding-bottom-5">
      <aboutUs />
    </div>

    <div class="margin-top-5 padding-bottom-5">
      <projectTeaser />
    </div>

    <contactForm />
  </div>
</template>

<style scoped src="./Home.scss"></style>
