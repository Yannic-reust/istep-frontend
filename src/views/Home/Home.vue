<script lang="ts">
import { defineComponent } from "vue";
import titleBackground from "../../components/TitleBackground/TitleBackground.vue";

export default defineComponent({
  setup() {},
  components: {
    titleBackground,
  },
});
</script>

<template>
  <div id="home">
    <titleBackground></titleBackground>
    <h1>Home</h1>
  </div>
</template>

<style scoped src="./Home.scss"></style>
