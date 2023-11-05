<script lang="ts">
import { defineComponent } from "vue";
import teamComp from "../../components/Team/Team.vue";
import titleBackground from "../../components/TitleBackground/TitleBackground.vue";
import contactForm from "../../components/ContactForm/ContactForm.vue";
import projectTeaser from "../../components/ProjectTeaser/ProjectTeaser.vue";
import values from "../../components/Values/Values.vue";
import vision from "../../components/Vision/Vision.vue";
import donate from "../../components/Donate/Donate.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const home = gql`
      query home($locale: I18NLocaleCode) {
        home(locale: $locale) {
          data {
            attributes {
              TitleSite
              TitleText
              Values {
                Title
                ValueItem {
                  Title
                  Text
                }
              }
              Vision {
                Title
                VisionItem {
                  Title
                  Text
                }
              }
              AboutUs {
                Title
                Text
                teamMember {
                  Name
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
              Donate {
                Title
                Text
                ButtonText
              }
              Project {
                Title
                Text

                ProjectDetailBox {
                  Title
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
        contactForm(locale: $locale) {
          data {
            attributes {
              Title
              FirstInput
              SecondInput
              ThirdInput
              FourthInput
              Message
              ButtonText
              SuccessText
              FailedText
              contactFormWhyItem {
                Name
              }
            }
          }
        }
        blog(locale: $locale) {
          data {
            attributes {
              Title
              Text
              Title_Teaser_Home
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
    const { result, loading, error } = useQuery(home, variables);

    return { result };
  },

  components: {
    titleBackground,
    contactForm,
    projectTeaser,
    teamComp,
    values,
    vision,
    donate,
  },
});
</script>

<template>
  <div id="home" v-if="result">
    <div>
      <titleBackground
        :title="result.home.data.attributes.TitleSite"
        :text="result.home.data.attributes.TitleText"
      />
    </div>
    <div class="padding-bottom-5">
      <projectTeaser
        :project="result.home.data.attributes.Project"
        :TeaserText="result.blog.data.attributes.Title_Teaser_Home"
        :blog="
          result.blog.data.attributes.BlogBeitrag[
            result.blog.data.attributes.BlogBeitrag.length - 1
          ]
        "
      />
    </div>

    <div class="padding-top-5 padding-bottom-5">
      <vision :vision="result.home.data.attributes.Vision" />
    </div>
    <div class="">
      <values :values="result.home.data.attributes.Values" />
    </div>

    <teamComp
      :team="result.home.data.attributes.AboutUs.teamMember"
      :aboutUs="result.home.data.attributes.AboutUs"
    />

    <div class="margin-top-5 padding-bottom-5">
      <donate :donate="result.home.data.attributes.Donate" />
    </div>

    <contactForm :contactForm="result.contactForm.data.attributes" />
  </div>
</template>

<style scoped src="./Home.scss"></style>
