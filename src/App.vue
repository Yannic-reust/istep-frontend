<script lang="ts">
import navBar from "./components/NavBar/NavBar.vue";
import FooterComp from "./components/Footer/Footer.vue";

import { defineComponent } from "vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const home = gql`
      query home($locale: I18NLocaleCode) {
        navigation(locale: $locale) {
          data {
            attributes {
              Item {
                Name
              }
            }
          }
        }
        footer(locale: $locale) {
          data {
            attributes {
              FooterItem{
                Name
                Link
              }
      
            }
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(home, variables);

    return { result };
  },

  components: {
    navBar,
    FooterComp,
  },
});
</script>
<template>
  <div v-if="result">
    <navBar :navbar="result.navigation.data.attributes.Item" />

    <router-view></router-view>
    <FooterComp :footer="result.footer.data.attributes.FooterItem" />
  </div>
</template>
