<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Values",
  props: ["values"],
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="values" class="padding-5 margin-b ">
    <div class="container margin-top-5 margin-bottom-5">
      <h2 class="text-center margin-bottom-2">{{ values.Title }}</h2>
      <div class="row equal">
        <div
          class="col-xs-12 col-md-4 margin-top-4"
          v-for="(valueItem, index) in values.ValueItem"
          :key="index"
        >
          <div class="bg-secondary radius-16 padding-4 height-100">
            <h4 class="text-center margin-bottom-2">{{ valueItem.Title }}</h4>
            <p>
              {{ valueItem.Text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Values.scss"></style>
