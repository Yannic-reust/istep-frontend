<template>
  <div id="angebot" class="margin-bottom-5" v-if="result">
    <h2 class="text-h2 margin-top-5 text-center">
      {{ result.angebot.data.attributes.Title }}
    </h2>
    <div class="container margin-top-5 padding-bottom-5">
      <div class="row">
        <div
          class="col-xs-12 col-md-6 margin-top-5"
          v-for="(item, index) in result.angebot.data.attributes.offerItem"
          :key="index"
        >
          <div class="bg-secondary padding-4 radius-8">
            <p class="text-center bold text-h5 padding-bottom-2">
              {{ item.Title }}
            </p>
            <div class="margin-top-1">
              <p class="bold">
                {{ result.angebot.data.attributes.StaticText.When }}
              </p>
              <p>{{ item.When }}</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">
                {{ result.angebot.data.attributes.StaticText.Where }}
              </p>
              <p>{{ item.Where }}</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">
                {{ result.angebot.data.attributes.StaticText.TargetAudience }}
              </p>
              <p>{{ item.TargetAudience }}</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">{{ item.QuestionsOrInterested }}</p>
            
                <p>{{result.angebot.data.attributes.contact }}:</p>
            
                <a href="mailto:info@istep.ch" >info@istep.ch</a>
              
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-secondary padding-4 radius-8">
        <h2 class="text-h3 margin-bottom-2">
          {{ result.angebot.data.attributes.requirements.Title }}
        </h2>
        <ul class="margin-left-2 marign-top-4 ">
          <li
            class="text-standard"
            v-for="(item, index) in result.angebot.data.attributes.requirements
              .requirementsItem"
            :key="index"
          >
            {{ item.Text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";
export default {
  name: "angebot",
  components: {},

  data() {
    return {};
  },

  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const angebot = gql`
       query angebot($locale: I18NLocaleCode) {
        angebot(locale: $locale) {
          data {
            attributes {
              Title
              offerItem {
                Title
                When
                Where
                TargetAudience
              }
              StaticText {
                When
                Where
                TargetAudience
                QuestionsOrInterested
              }
              requirements {
                Title
                requirementsItem {
                  Text
                }
                
              }
              contact
            }
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(angebot, variables);

    return { result };
  },
};
</script>
<style scoped src="./Angebot.scss"></style>
