<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  setup() {
    console.log("props.jobs");
  },
});
</script>

<template>
  <div id="titleBackground">
    <div class="image" />
    <div class="text">
      <h1 class="text-d1 secondary">iStep</h1>
      <p class="text-h4 secondary">into my future</p>
    </div>
  </div>
</template>

<style scoped src="./TitleBackground.scss"></style>
