<script lang="ts">
import navBar from "./components/NavBar/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  components: {
    navBar,
  },
});
</script>

<template>
  <navBar />
  <router-view></router-view>
</template>
