<script lang="ts">
import { defineComponent } from "vue";
import teamComp from "../../components/Team/Team.vue";
import titleBackground from "../../components/TitleBackground/TitleBackground.vue";
import contactForm from "../../components/ContactForm/ContactForm.vue";
import aboutUs from "../../components/AboutUs/AboutUs.vue";
import projectTeaser from "../../components/ProjectTeaser/ProjectTeaser.vue";
import values from "../../components/Values/Values.vue";
import vision from "../../components/Vision/Vision.vue";
import donate from "../../components/Donate/Donate.vue";

export default defineComponent({
  setup() {},
  components: {
    titleBackground,
    contactForm,
    aboutUs,
    projectTeaser,
    teamComp,
    values,
    vision,
    donate,
  },
});
</script>

<template>
  <div id="home">
    <div class="padding-bottom-5">
      <titleBackground></titleBackground>
    </div>

     <div class="margin-top-5">
      <teamComp />
    </div>
     <div class="margin-top-5">
      <values />
    </div>
     <div class="margin-top-5">
      <vision />
    </div>
    <div class="margin-top-5">
      <aboutUs />
    </div>

    <div class="margin-top-5 padding-bottom-5">
      <donate />
    </div>

    <div class="margin-top-5 padding-bottom-5">
      <projectTeaser />
    </div>

    <contactForm />
  </div>
</template>

<style scoped src="./Home.scss"></style>
