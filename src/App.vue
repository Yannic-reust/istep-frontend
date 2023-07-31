<script lang="ts" setup>
import navBar from "./components/NavBar/NavBar.vue";
import FooterComp from "./components/Footer/Footer.vue";
</script>
<script lang="ts">
export default {
  components: {
    navBar,
    FooterComp,
  },
};
</script>
<template>
  <navBar />
  <router-view></router-view>
  <FooterComp />
</template>
