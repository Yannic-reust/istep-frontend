<script lang="ts">
import navBar from "./components/NavBar/NavBar.vue";
import test from "./components/Footer/Footer.vue";
import { defineComponent } from "vue";


export default defineComponent({
  setup() {},
  components: {
    navBar,
    test,
 
  },
});
</script>

<template>
  <navBar />
  <router-view></router-view>
  <test />
</template>
