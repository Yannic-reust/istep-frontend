<script lang="ts" setup>
import navBar from "./components/NavBar/NavBar.vue";
import FooterComp from "./components/Footer/Footer.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

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
          }
        }
      }
    }
  }
`;
const variables = { locale: "de" };
const { result, loading, error } = useQuery(home, variables);

</script>
<script lang="ts">
export default {
  components: {
    navBar,
    FooterComp,
  },
};
</script>
<template>
  <navBar />
  <router-view></router-view>
  <FooterComp />
</template>
