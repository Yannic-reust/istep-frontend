<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectTeaser",
  props: ["project"],
  data() {
    return {
      detailsOpen: false,
    };
  },
});
</script>

<template>
  <div id="projectTeaser" class="bg-secondary padding-top-5 padding-bottom-5">
    <div class="container margin-bottom-5">
      <div class="row">
      
        <div
          class="col-xs-12 col-md-6 flex column justify-center mobile-center"
        >
          <h2>{{ project.Title }}</h2>
          <p class="margin-top-2">
            {{ project.Text }}
          </p>

          <button
            class="button-primary width-10 margin-top-4"
            @click="detailsOpen = !detailsOpen"
          >
            {{ project.ButtonText }}
          </button>
        </div>

        <div class="col-xs-12 col-md-6 margin-top-5">
          <img
          :src="`https://istep-backend.blackbox-mit.ch${project.Image.data.attributes.url}`"
            alt="Team Bild"
            class="width-80 margin-left-10 radius-16"
          />
        </div>


      </div>
    </div>
    <!------------------------------ Details ------------------------>
    <div class="container margin-top-5" v-if="detailsOpen">
      <div class="row">
        <div
          class="col-md-6 col-xs-12 margin-top-4"
          v-for="(ProjectDetailBox, index) in project.ProjectDetailBox"
          :key="index"
        >
          <h3>{{ ProjectDetailBox.Title }}</h3>
          <p>{{ ProjectDetailBox.Text }}</p>
          <img
            :src="`https://istep-backend.blackbox-mit.ch${ProjectDetailBox.Image.data.attributes.url}`"
            :alt="ProjectDetailBox.Title"
            class="Image radius-16 margin-top-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./ProjectTeaser.scss"></style>
