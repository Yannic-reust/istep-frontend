<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjectTeaser",
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="projectTeaser" class="bg-secondary padding-top-5 padding-bottom-5">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <img
            src="../../assets/components/titleBackground.jpg"
            alt="Team Bild"
            class="width-80 margin-left-10 radius-16"
          />
        </div>
        <div class="col-xs-12 col-md-6 flex column justify-center height-100">
          <h2>Projekte</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <button class="button-primary width-10 margin-top-4">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./ProjectTeaser.scss"></style>
