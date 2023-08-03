<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "Donate",
  props: ["donate"],
  setup() {
    return {};
  },
  components: {
    Icon,
  },
});
</script>

<template>
  <div id="donate" class="bg-secondary padding-10">
    <div class="container">
      <div class="row equal">
       
        <div class="col-xs-12 col-md-6 margin-bottom-5">
          <img
            :src="`https://istep-backend.blackbox-mit.ch${donate.Image.data.attributes.url}`"
            alt="Team Bild"
            class="img radius-16 "
          />
        </div>
        <div class="col-xs-12 col-md-6 flex justify-center column">
          <h2 class="margin-bottom-2">{{ donate.Title }}</h2>
          <p>{{ donate.Text }}</p>
          <Icon icon="ep:arrow-up-bold" :rotate="2" width="32px" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
