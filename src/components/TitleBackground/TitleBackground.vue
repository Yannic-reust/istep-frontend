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
    <h1>iStep</h1>
    <p>into my future</p>
  </div>
</template>

<style scoped src="./TitleBackground.scss"></style>
