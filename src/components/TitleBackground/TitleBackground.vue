<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleBackground",
  setup() {},
});
</script>

<template>
  <div id="titleBackground">
    <div class="image" />
    <div class="textBox">
      <h1 class="text-d1 secondary">iStep</h1>
      <p class="text-h4 secondary">into my future</p>
    </div>
  </div>
</template>

<style scoped src="./TitleBackground.scss"></style>
