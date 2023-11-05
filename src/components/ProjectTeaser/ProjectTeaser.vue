<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectTeaser",
  props: ["project", "blog","TeaserText"],
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
      <div class="margin-top-5  margin-bottom-5">
        <h2 class="text-center margin-top-5">{{TeaserText}}</h2>
        <div class="row equal">
          <div class="col-xs-12 col-md-6">
            <div class="height-100 flex justify-center column margin-top-5">
              <h3 class="text-h3 margin-bottom-2">{{ blog.Title }}</h3>
              <p>{{ blog.Teaser }}</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <img
              :src="`https://istep-backend.blackbox-mit.ch${blog.Image.data.attributes.url}`"
              alt=""
              class="width-100 radius-8 margin-top-5"
            />
          </div>
        </div>
      </div>

      <a href="/BlogAlbanien">
        <button class="button-primary margin-top-5">Blog</button>
      </a>
    </div>
  </div>
</template>

<style scoped src="./ProjectTeaser.scss"></style>
