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
  <div id="values" class="padding-5 bg-secondary">
    <div class="container">
      <h2 class="text-center margin-bottom-2">{{ values.Title }}</h2>
      <div class="row">
        <div
          class="col-xs-12 col-md-4 margin-top-4"
          v-for="(valueItem, index) in values.ValueItem"
          :key="index"
        >
          <div class="bg radius-16 padding-4">
            <h3>{{ valueItem.Title }}</h3>
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
