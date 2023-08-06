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
    <div id="donate" class="padding-5">
      <div class="container flex-center">
        <h2 class="margin-bottom-1">{{ donate.Title }}</h2>
        <p>{{ donate.Text }}</p>
        <a href="https://istep.ch/donate">
          <button class="button-primary margin-top-2">
            <p>{{ donate.ButtonText }}</p>
          </button>
        </a>
        <!-- <Icon icon="ep:arrow-up-bold" :rotate="2" width="32px" /> -->
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
