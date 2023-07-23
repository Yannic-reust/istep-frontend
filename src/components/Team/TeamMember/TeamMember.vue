<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TeamMemeber",
  props: ["name", "text", "image"],

  setup() {},
});
</script>

<template>
  <div id="teamMemeber">
    <div class="card">
      <div
        class="card__side card__side--front"
        :style="{
          backgroundImage: `url(https://istep-backend.blackbox-mit.ch${image})`,
        }"
      ></div>

      <div class="card__side card__side--back">
        <p class="text-small thin">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./TeamMember.scss"></style>
