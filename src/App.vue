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
<div>
  <div class="content">
    <h2>Comming Soon</h2>
  </div>

  <p class="copyright">© 2023 iStep</p>
</div>
</template>
