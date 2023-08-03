<script lang="ts">
import { defineComponent,ref } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "Donate",
  props: ["donate"],
  setup() {
    const open = ref(false);
    return {
      open
    };
  },
  components: {
    Icon,
  },
  beforecreated() {
    var scripts = [
     
    "https://tamaro.raisenow.com/istep-b7da/latest/widget.js",
      "./tamaro.js",
    ];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
});
</script>

<template>
  <div>
    <div id="donate" class="bg-secondary padding-10">
      <div class="container">
        <div class="row equal">
          <div class="col-xs-12 col-md-6 ">
            <img
              :src="`https://istep-backend.blackbox-mit.ch${donate.Image.data.attributes.url}`"
              alt="Team Bild"
              class="img radius-16"
            />
          </div>
          <div class="col-xs-12 col-md-6 flex justify-center column margin-top-5 margin-bottom-5">
            <h2 class="">{{ donate.Title }}</h2>
            <p>{{ donate.Text }}</p>
            
            <button class="button-primary width-50 margin-top-2" @click="open = !open">Jetzt Spenden</button>
            <!-- <Icon icon="ep:arrow-up-bold" :rotate="2" width="32px" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container margin-top-5" >
      <div class="rnw-widget-container width-100"></div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
