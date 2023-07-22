<script lang="ts">
import navBar from "./components/NavBar/NavBar.vue";
import FooterComp from "./components/Footer/Footer.vue";
import { defineComponent } from "vue";


export default defineComponent({
  setup() {},
  components: {
    navBar,
    FooterComp,
 
  },
});
</script>

<template>
  <navBar />
  <router-view></router-view>
  <FooterComp />
</template>
