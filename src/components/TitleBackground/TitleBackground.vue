<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: "TitleBackground",
  props: ['title', 'text'],
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
      <h1 class="text-d3 secondary thin ">{{title}}</h1>
      <!-- <p class="text-h4 secondary margin-bottom-2 margin-top-1">{{text}}</p> -->
      <div class="margin-top-4">
        <a href="#projectTeaser">
        <Icon icon="mdi:arrow-down" color="white" width="72" height="72" />
      </a>
      </div>
     
    
      <!-- <p class="text-h4 font-secondary secondary">into my future</p> -->
    </div>
  </div>
</template>

<style scoped src="./TitleBackground.scss"></style>
