<template>
  <div id="blogPreview" v-if="data">
    <div class="radius-8 bg-secondary">
     
        <img
        :src="`https://istep-backend.blackbox-mit.ch${data.attributes.Image.data.attributes.url}`"
        :alt="data.attributes.Title"
        class="width-100 radius-8 margin-bottom-2"
        v-if="data.attributes.Image"
      />
      <div class="padding-2 padding-bottom-4">
        <div class="flex base-line space-between ">
          <h2 v-if=" data.attributes.Title " class="primary decoration-none">{{ data.attributes.Title }}</h2>
          <p v-if="data.attributes.Date" >{{ data.attributes.Date.replace(/-/g, " ") }}</p>
        </div>

        <p class="primary decoration-none" v-if="data.attributes.Teaser">{{ data.attributes.Teaser }}</p>
      </div>

    
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BlogAlbanien",
  props: ["data"],
  data() {
    return {};
  },
};
</script>
<style scoped src="./BlogPreview.scss"></style>
