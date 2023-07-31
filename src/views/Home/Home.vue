<script lang="ts">
import { defineComponent } from "vue";
import teamComp from "../../components/Team/Team.vue";
import titleBackground from "../../components/TitleBackground/TitleBackground.vue";
import contactForm from "../../components/ContactForm/ContactForm.vue";
import aboutUs from "../../components/AboutUs/AboutUs.vue";
import projectTeaser from "../../components/ProjectTeaser/ProjectTeaser.vue";
import values from "../../components/Values/Values.vue";
import vision from "../../components/Vision/Vision.vue";
import donate from "../../components/Donate/Donate.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  setup() {
    const home = gql`
      query home($locale: I18NLocaleCode) {
        teamMembers(locale: $locale) {
          data {
            attributes {
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
        }
        home(locale: $locale) {
          data {
            attributes {
              TitleSite
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
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              Donate {
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
              Project {
                Title
                Text
                ButtonText
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
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
      }
    `;
    const variables = { locale: "de" };
    const { result, loading, error } = useQuery(home, variables);

    return { result };
  },

  components: {
    titleBackground,
    contactForm,
    aboutUs,
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
    <div class="padding-bottom-5">
      <titleBackground :title="result.home.data.attributes.TitleSite" />
    </div>

    <div class="margin-top-5">
      <teamComp :team="result.teamMembers.data" />
    </div>
    <div class="margin-top-5">
      <values :values="result.home.data.attributes.Values" />
    </div>
    <div class="margin-top-5">
      <vision :vision="result.home.data.attributes.Vision" />
    </div>
    <div class="margin-top-5">
      <aboutUs :aboutUs="result.home.data.attributes.AboutUs" />
    </div>

    <div class="margin-top-5 padding-bottom-5">
      <donate :donate="result.home.data.attributes.Donate" />
    </div>

    <div class="margin-top-5 padding-bottom-5">
      <projectTeaser :project="result.home.data.attributes.Project" />
    </div>

    <contactForm />
  </div>
</template>

<style scoped src="./Home.scss"></style>
