<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "Donate",
  setup() {
    return {};
  },
  components: {
    Icon,
  },
});
</script>

<template>
  <div id="donate">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <h2>Donate</h2>
          <p>Short Donate Text</p>
          <Icon icon="ep:arrow-up-bold" :rotate="2" width="32px" />
        </div>
        <div class="col-xs-12 col-md-6">
          <img
            src="../../assets/components/titleBackground.jpg"
            alt="Team Bild"
            class="img margin-left-10 radius-16"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
