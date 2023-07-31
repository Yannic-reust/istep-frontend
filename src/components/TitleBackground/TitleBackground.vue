<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: "TitleBackground",
  props: ['title'],
  components:{
    Icon,
  },
  setup() {},
});
</script>

<template>
  <div id="titleBackground">
    <div class="image" />
    <div class="textBox">
      <h1 class="text-d1 secondary thin">{{title}}</h1>
      <Icon icon="mdi:arrow-down" color="white" width="72" height="72" />
      <!-- <p class="text-h4 font-secondary secondary">into my future</p> -->
    </div>
  </div>
</template>

<style scoped src="./TitleBackground.scss"></style>
