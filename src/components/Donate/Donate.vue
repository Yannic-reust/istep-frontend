<script lang="ts">
import { defineComponent, ref } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "Donate",
  props: ["donate"],
  setup() {},
  components: {
    Icon,
  },
 });
</script>

<template>
  <div>
    <div id="donate" class="bg-secondary padding-10">
      <div class="container">
        <div class="row equal">
          <div class="col-xs-12 col-md-6">
            <img
              :src="`https://istep-backend.blackbox-mit.ch${donate.Image.data.attributes.url}`"
              alt="Team Bild"
              class="img radius-16"
            />
          </div>
          <div
            class="col-xs-12 col-md-6 flex justify-center column margin-top-5 margin-bottom-5"
          >
            <h2 class="">{{ donate.Title }}</h2>
            <p>{{ donate.Text }}</p>
            <a href="/donate">
              <button class="button-primary width-50 margin-top-2">
                {{ donate.ButtonText }}
              </button>
            </a>

            <!-- <Icon icon="ep:arrow-up-bold" :rotate="2" width="32px" /> -->
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container margin-top-5">
        <div class="rnw-widget-container width-100"></div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
