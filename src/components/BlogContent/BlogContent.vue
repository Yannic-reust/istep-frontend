<template>
  <div class="container margin-top-5">
    <div class="row">
      <div class="col-md-6 col-xs-12 margin-top-4">
        <div class="flex space-between align-bottom">
          <h2>{{ data.Title }}</h2>
          <p>{{ data.Date }}</p>
        </div>
        <p class="text-h5 margin-top-1">
          {{ data.Teaser }}
        </p>
      </div>
      <div class="col-md-6 col-xs-12 margin-top-4">
        <img
          :src="`https://istep-backend.blackbox-mit.ch${data.Image.data.attributes.url}`"
          alt=""
          class="xs-width-80 width-100 xs-margin-left-10 radius-8"
        />
      </div>
    </div>
    <div class="margin-bottom-5">
      <div class="row">
        <div v-for="(item, index) in data.SectionBlog" :key="index">
          <div class="col-xs-12 col-md-6 margin-top-5" v-if="item.Text">
            <p>{{ item.Text }}</p>
          </div>
          <div class="col-xs-12 col-md-6 margin-top-5" v-if="item.Image.data">
            <img
              :src="`https://istep-backend.blackbox-mit.ch${item.Image.data.attributes.url}`"
              :alt="item.Text"
              class="xs-width-80 width-100 xs-margin-left-10 radius-8"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BlogContent",
  components: {},
  props: ["data"],
  data() {
    return {};
  },
};
</script>
<style scoped src="./BlogContent.scss"></style>
