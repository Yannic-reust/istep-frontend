<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TeamMemeber",
  props:  [ "name",
    "text"],
   
  
  setup() {},
});
</script>

<template>
  <div id="teamMemeber">
    <div class="card">
      <div class="card__side card__side--front">
        <p>{{name}}</p>
      </div>

      <div class="card__side card__side--back">
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./TeamMember.scss"></style>
