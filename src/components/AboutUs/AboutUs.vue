<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutUs",
  setup() {
 
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
            Hier ein Text Über uns
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        
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

<style scoped src="./AboutUs.scss"></style>
