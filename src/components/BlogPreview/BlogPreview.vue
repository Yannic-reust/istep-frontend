<template>
  <div id="blogPreview" v-if="data" class="height-100">
    <div class="radius-8 bg-secondary height-100">
      <img
        :src="`https://istep-backend.bbmit-service.ch${data.Image.data.attributes.url}`"
        :alt="data.Title"
        class="width-100 radius-8 margin-bottom-2"
        v-if="data.Image"
      />
      <div class="padding-2 padding-bottom-4">
        <div class="flex base-line space-between">
          <h2 v-if="data.Title" class="primary decoration-none">
            {{ data.Title }}
          </h2>
          <p v-if="data.Date">{{ data.Date.replace(/-/g, ".") }}</p>
        </div>

        <p class="primary decoration-none margin-top-2" v-if="data.Teaser">
          {{ data.Teaser }}
        </p>
      </div>
      <div class="width-100 flex-center padding-bottom-5">
        <button class="button-primary margin-top-5 text-standard">
          {{ readMore }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BlogAlbanien",
  props: ["data", "readMore"],
  data() {
    return {};
  },
};
</script>
<style scoped src="./BlogPreview.scss"></style>
