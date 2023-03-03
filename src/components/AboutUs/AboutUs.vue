<script lang="ts">
import { defineComponent } from "vue";
import IconType from "../../types/IconType";
export default defineComponent({
  name: "AboutUs",
  setup() {
    const icons = [
      {
        iconName: "test",
        iconPath: "../../../public/icons/ente.png",
      },
      {
        iconName: "test",
        iconPath: "../../../public/icons/ente.png",
      },
      {
        iconName: "test",
        iconPath: "../../../public/icons/ente.png",
      },
      {
        iconName: "test",
        iconPath: "../../../public/icons/ente.png",
      },
    ] as Array<IconType>;
    return { icons };
  },
});
</script>

<template>
  <div id="aboutUs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 flex column justify-center height-100">
          <h2>Über Uns</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div class="icons margin-top-2 flex">
            <img
              v-for="(icon, index) in icons"
              :key="index"
              :src="icon.iconPath"
              :alt="icon.iconName"
              class="icon margin-1"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <img
            src="../../assets/components/titleBackground.jpg"
            alt="Team Bild"
            class="width-80 margin-left-10 radius-16"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./AboutUs.scss"></style>
