<template>
  <div id="impressum" class="margin-top-4" v-if="result">
    <div class="container wrapper">
      <h3 class="primary margin-top-5">{{result.impressum.data.attributes.Title}}</h3>
      <div>
        <p class="primary">iSTEP</p>
        <p class="primary">Weingartenstrasse 6</p>
        <p class="primary">3417 Rüegsau</p>
        <p class="primary">Schweiz</p>

        <a href="mailto:info@istep.ch" class="primary">info@istep.ch</a>

        <p class="primary margin-top-4 bold">{{result.impressum.data.attributes.TitlePerson}}</p>
        <p class="primary">{{result.impressum.data.attributes.ContactPerson}}</p>
      </div>
      <div class="margin-bottom-5">
        <p class="primary bold margin-top-4">{{result.impressum.data.attributes.HaftungsausschlussTitle}}</p>
        <p class="primary text-small margin-top-1">
          {{result.impressum.data.attributes.HaftungsausschlussText}}
        </p>
      

        <p class="primary bold margin-top-2">
          {{result.impressum.data.attributes.HaftungsausschlussfLTitle}}
        </p>
        <p class="primary text-small margin-top-1">
          {{result.impressum.data.attributes.HaftungsausschlussLText}}
        </p>

        <p class="primary bold margin-top-2">  {{result.impressum.data.attributes.UrheberrechteTitle}}</p>
        <p class="primary text-small margin-top-1">
          {{result.impressum.data.attributes.UrheberrechteText}}
        </p>
        <p class="primary margin-top-5 text-small">
          Quelle:
          <a
            href="https://www.swissanwalt.ch"
            target="_blank"
            rel="noopener"
            class="primary margin-top-5 text-small"
            >SwissAnwalt</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Impressum",
  setup() {
    const store = useStore();
    const variables = { locale: store.state.currentLanguage.code };

    const impressum = gql`
      query impressum($locale: I18NLocaleCode) {
        impressum(locale: $locale) {
          data {
            attributes {
              Title
              TitlePerson
              ContactPerson
              HaftungsausschlussTitle
              HaftungsausschlussText
              HaftungsausschlussfLTitle
              HaftungsausschlussLText
              UrheberrechteTitle
              UrheberrechteText
            }
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(impressum, variables);

    return { result };
  },
});
</script>
<style scoped src="./Impressum.scss"></style>
