<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutUs",
  props: ["aboutUs"],
  setup() {},
});
</script>

<template>
  <div id="aboutUs" class="bg-primary padding-5">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 flex column justify-center height-100">
          <h2 class="margin-bottom-2 secondary">{{ aboutUs.Title }}</h2>
          <p class="secondary">
            {{ aboutUs.Text }}
          </p>
        </div>
        <div class="col-xs-12 col-md-6 margin-top-5">
          <img
          :src="`https://istep-backend.blackbox-mit.ch${aboutUs.Image.data.attributes.url}`"
            alt="Team Bild"
            class="img margin-left-10 radius-16 "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./AboutUs.scss"></style>
