<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Vision",
  props: ["vision"],
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="vision">
    <div class="container">
      <h2 class="text-center margin-bottom-0">{{ vision.Title }}</h2>
      <div class="row">
        <div
          class="col-xs-12 col-md-6 margin-top-4"
          v-for="(visionItem, index) in vision.VisionItem"
          :key="index"
        >
          <div class="bg-secondary radius-16 padding-4">
            <div class="flex">
              <h3>{{ visionItem.Title }}</h3>
              <img src="" al="" class="" />
            </div>

            <p>
              {{ visionItem.Text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Vision.scss"></style>
