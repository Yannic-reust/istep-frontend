<template>
  <div id="blogAlbanien" v-if="result" class="margin-bottom-5">
    <div class="container">
      <div v-if="!detail">
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
              class="height-100 pointer"
              @click="openDetail(index)"
            />
          </div>
        </div>
      </div>

      <div class="" v-if="detail" >
        <img
          src="../../assets/general/arrow-back.svg"
          alt="back icon"
          class="margin-top-5 pointer"
          @click="goback()"
          style="width: 20px;"
        />
        <BlogContent :data="result.blog.data.attributes.BlogBeitrag[0]" />
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
      tempIndex: -1,
      detail: false,
    };
  },
  methods: {
    openDetail(e) {
      this.detail = true;
      this.tempIndex = e;
    },
    goback() {
      this.detail = false;
      this.tempIndex = -1;
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
