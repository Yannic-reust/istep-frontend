<template>
  <div id="blogAlbanien" v-if="result" class="margin-bottom-5">
    <div class="container">
      <h1 class="margin-top-5">{{ result.blog.data.attributes.Title }}</h1>
      <p class="text-h5">{{ result.blog.data.attributes.Text }}</p>

      <div class="row margin-top-5 equal">
        <div
          class="col-xs-12 col-md-4 margin-top-4"
          v-for="(blogItem, index) in result.blog.data.attributes.BlogBeitrag"
          :key="index"
        >
          <BlogPreview
            :data="blogItem"
            :readMore="result.blog.data.attributes.ReadMore"
            class="height-100 pointer"
            @click="openDetail(blogItem)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BlogPreview from "../../components/BlogPreview/BlogPreview.vue";
import BlogContent from "../../components/BlogContent/BlogContent.vue";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  name: "BlogAlbanien",
  components: {
    BlogPreview,
    BlogContent,
  },

  data() {
    return {
      store: useStore(),
    };
  },
  methods: {
    openDetail(e) {
      this.store.dispatch("setBlog", { blog: e });
      //@ts-ignore
      this.$router.push("/BlogAlbanien/detailBlog");
    },
  },
  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const blogAlbanien = gql`
      query Blog($locale: I18NLocaleCode) {
        blog(locale: $locale) {
          data {
            attributes {
              Title
              Text
              ReadMore
              BlogBeitrag {
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
                SectionBlog {
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
        }
      }
    `;
    const { result, loading, error } = useQuery(blogAlbanien, variables);

    return { result };
  },
};
</script>
<style scoped src="./BlogAlbanien.scss"></style>
