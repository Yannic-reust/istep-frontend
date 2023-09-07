<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectTeaser",
  props: ["project"],
  data() {
    return {
      // detailsOpen: false,
    };
  },
});
</script>

<template>
  <div id="projectTeaser" class="bg-secondary padding-top-5 padding-bottom-5">
    <div class="container padding-top-5">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">{{ project.Title }}</h2>
          <p class="margin-top-2">
            {{ project.Text }}
          </p>
        </div>
      </div>
    </div>
    <!------------------------------ Details ------------------------>

    <div class="container flex-center">
      <div class="row">
        <div
          v-for="(ProjectDetailBox, index) in project.ProjectDetailBox"
          :key="index"
          class="col-xs-12 col-md-6 margin-top-5 flex column space-between"
        >
          <h3 class="margin-bottom-2 text-center margin">
            {{ ProjectDetailBox.Title }}
          </h3>
          <img
            :src="`https://istep-backend.blackbox-mit.ch${ProjectDetailBox.Image.data.attributes.url}`"
            :alt="ProjectDetailBox.Title"
            class="Image radius-16 margin-bottom-5"
          />

          <p>{{ ProjectDetailBox.Text }}</p>
        </div>
      </div>
      <button class="button-primary margin-top-5">Blog</button>
    </div>
  </div>
</template>

<style scoped src="./ProjectTeaser.scss"></style>
