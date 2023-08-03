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
      <div class="row equal">
        <div
          class="col-xs-12 col-md-6 margin-top-4"
          v-for="(visionItem, index) in vision.VisionItem"
          :key="index"
        >
          <div class="bg-secondary height-100 radius-16 padding-4">
    
              <h4 class="text-center margin-bottom-2">{{ visionItem.Title }}</h4>
          
     

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
