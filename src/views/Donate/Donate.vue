<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default defineComponent({
  name: "DonateView",
  props: ["donate"],
  data() {
    return {
      store: useStore(),
    };
  },
  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const donate = gql`
      query donate($locale: I18NLocaleCode) {
        donate(locale: $locale) {
          data {
            attributes {
             Donate
            }
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(donate, variables);

    return { result };
  },
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
    }, 100);
  },
});
</script>

<template>
  <div>
    <div class="container margin-top-5 padding-top-5 margin-bottom-5" >
      <p class="margin-bottom-5" v-if="result">{{result.donate.data.attributes.Donate}}</p>
      <div class="rnw-widget-container width-100"></div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
