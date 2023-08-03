<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "DonateView",
  props: ["donate"],
  data() {
    return {
      store: useStore(),
    };
  },
  setup() {},
  components: {},
  created() {
    var scripts = ["https://tamaro.raisenow.com/istep-b7da/latest/widget.js"];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
  mounted() {
    var scripts = ["./tamaro.js"];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });

    setTimeout(() => {
      //@ts-ignore
      window.rnw.tamaro.runWidget(".rnw-widget-container", {
        language: this.store.state.currentLanguage.code,
      });
    },100);
  },
});
</script>

<template>
  <div>
    <div class="container margin-top-5 padding-top-5 margin-bottom-5">
      <div class="rnw-widget-container width-100"></div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
