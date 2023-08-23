<template>
  <div id="blogPostAlbanien" v-if="result" class="margin-top-5">
    <div class="container margin-top-5">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="flex space-between align-bottom">
            <h2>{{ result.blogAlbanien.data.attributes.Title }}</h2>
            <p>{{ result.blogAlbanien.data.attributes.Date }}</p>
          </div>
          <p class="text-h5 margin-top-1">
        {{ result.blogAlbanien.data.attributes.Teaser }}
      </p>
        </div>
        <div class="col-md-6 col-xs-12">
          <img
            :src="`https://istep-backend.blackbox-mit.ch${result.blogAlbanien.data.attributes.Image.data.attributes.url}`"
            alt=""
            class="width-80 margin-left-10 radius-8"
          />
        </div>
      </div>

     
      <div class="margin-top-2">
        <Markdown :source="result.blogAlbanien.data.attributes.Text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import Markdown from "vue3-markdown-it";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "BlogAlbanien",
  components: {
    Markdown,
  },

  data() {
    return {};
  },

  setup() {
    const store = useStore();

    const route = useRoute();
    const uid = route.params.id;

    const variables = { locale: store.state.currentLanguage.code, id: uid };

    const blogAlbanientest = gql`
      query blogAlbanien($locale: I18NLocaleCode, $id: ID) {
        blogAlbanien(id: $id, locale: $locale) {
          data {
            id
            attributes {
              Title
              Teaser
              Date
              Text

              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(blogAlbanientest, variables);

    return { result };
  },
};
</script>
<style scoped src="./BlogPostAlbanien.scss"></style>
