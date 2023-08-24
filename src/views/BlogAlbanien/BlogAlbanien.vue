<template>
  <div id="blogAlbanien" v-if="result" class="margin-bottom-5">
    <div class="container">
      <h1 class="margin-top-5">{{ result.blog.data.attributes.Title }}</h1>
      <p class="text-h5">{{ result.blog.data.attributes.Text }}</p>
      <div class="row margin-top-5">
        <div
          class="col-xs-12 col-md-4 margin-top-2"
          v-for="(blogItem, index) in result.blogAlbaniens.data"
          :key="index"
        >
     
          <a :href="'/BlogAlbanien/'+blogItem.id" class="primary decoration-none">
            <BlogPreview :data="blogItem" />
          </a>
        </div>
      </div>

      <!-- <Markdown :source="result.blog.data.attributes.Text" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import BlogPreview from "../../components/BlogPreview/BlogPreview.vue";
import Markdown from "vue3-markdown-it";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default {
  name: "BlogAlbanien",
  components: {
    BlogPreview,
  },

  data() {
    return {};
  },
  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const blogAlbanien = gql`
      query blogAlbanien($locale: I18NLocaleCode) {
        blog(locale: $locale) {
          data {
            attributes {
              Title
              Text
            }
          }
        }
        blogAlbaniens(locale: $locale) {
          data {
            id
            attributes {
              Title
              Teaser
              Date
              
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
    const { result, loading, error } = useQuery(blogAlbanien, variables);

    return { result };
  },
};
</script>
<style scoped src="./BlogAlbanien.scss"></style>
