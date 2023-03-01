<template>
  <footer class="footer-dark bg-primary">
    <div class="container">
      <h3 class="text-center margin-top-5 secondary text-h3">iStep</h3>
      <div class="row">
        <div class="col-sm-12 col-md-6 item text text-center">
          <ul>
            <li class="padding-top-1 padding-bottom-1">
              <a href="/Impressum" class="secondary decoration-none">
                Footer
              </a>
            </li>
            <li class="padding-top-1 padding-bottom-1">
              <a
                href="/AGBS-Blackbox_MIT_GmbH.pdf"
                class="margin-top-1 secondary decoration-none"
                >AGB's</a
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 item text text-center">
          <ul>
            <li class="padding-top-1 padding-bottom-1">
              <a
                href="/Impressum"
                class="secondary decoration-none margin-top-2"
              >
                Impressum
              </a>
            </li>
            <li class="padding-top-1 padding-bottom-1">
              <a
                href="/AGBS-Blackbox_MIT_GmbH.pdf"
                class="margin-top-1 secondary decoration-none"
                >AGB's</a
              >
            </li>
          </ul>
        </div>
      </div>
      <p class="copyright secondary">iStep © 2023</p>
    </div>
  </footer>
</template>

<style scoped src="./Footer.scss"></style>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Footer",

  data() {
    return {};
  },
});
</script>
