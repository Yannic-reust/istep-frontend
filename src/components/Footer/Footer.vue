<template>
  <div class="footer-dark bg-primary">
    <div class="container">
      <h3 class="text-center margin-top-5 secondary text-h3">iSTEP</h3>
      <div class="row">
        <div class="col-sm-12 col-md-6 item text text-center">
          <ul>
            <li class="padding-top-1 padding-bottom-1" v-for="(item, index) in footer" :key="index"> 
              <a :href="'https://istep.ch'+ item.Link" class="secondary decoration-none">
               {{item.Name}}
              </a>
            </li>
           
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 item text flex-center column">
          <ul>
            <li class="padding-top-1 padding-bottom-1">
              <a
                href="mailsto:info@istep.ch"
                class="secondary decoration-none margin-top-2"
              >
              info@istep.ch
              </a>
            </li>
          </ul>
          <selectLocale />
        </div>
      </div>
      <p class="copyright secondary">iSTEP © {{ year }}</p>
    </div>
  </div>
</template>

<style scoped src="./Footer.scss"></style>
<script lang="ts">
import { defineComponent } from "vue";
import selectLocale from "../../components/SelectLocale/SelectLocale.vue";

export default defineComponent({
  name: "Footer",
  props:["footer"],
  components: {
    selectLocale,
  },
  setup() {
    const year = new Date().getFullYear();
    return { year };
  },
  data() {
    return {};
  },
});
</script>
