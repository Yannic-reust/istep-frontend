<template>
  <div id="blogPostAlbanien" v-if="result" class="margin-top-5">
    <div class="container margin-top-5">
      <div class="row">
        <div class="col-md-6 col-xs-12 margin-top-4">
          <div class="flex space-between align-bottom">
            <h2>{{ result.blogAlbanien.data.attributes.Title }}</h2>
            <p>{{ result.blogAlbanien.data.attributes.Date }}</p>
          </div>
          <p class="text-h5 margin-top-1">
            {{ result.blogAlbanien.data.attributes.Teaser }}
          </p>
        </div>
        <div class="col-md-6 col-xs-12 margin-top-4">
          <img
            :src="`https://istep-backend.blackbox-mit.ch${result.blogAlbanien.data.attributes.Image.data.attributes.url}`"
            alt=""
            class="xs-width-80 width-100 xs-margin-left-10 radius-8"
          />
        </div>
      </div>
      <div class=" margin-bottom-4">
        <div
          class="row margin-top-4"
          v-for="(item, index) in result.blogAlbanien.data.attributes.Section"
          :key="index"
        >
          <div class="col-xs-12 col-md-6">
            <Markdown :source="item.Text" />
          </div>
          <div class="col-xs-12 col-md-6">
            <img
              :src="`https://istep-backend.blackbox-mit.ch${item.Image.data.attributes.url}`"
              alt=""
              class="xs-width-80 width-100 xs-margin-left-10 radius-8"
            />
          </div>
        </div>
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
              Section {
                Text
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }

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
