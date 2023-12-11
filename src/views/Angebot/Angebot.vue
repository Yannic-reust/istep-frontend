<template>
  <div id="angebot" class="margin-bottom-5">
    <h2 class="text-h2 margin-top-5 text-center">Unsere Angebote</h2>
    <div class="container margin-top-5 padding-bottom-5">
      <div class="row">
        <div class="col-xs-12 col-md-6 margin-top-5">
          <div class="bg-secondary padding-2 radius-8">
            <p class="text-center bold text-h5">HTML, CSS, JavaScript</p>
            <div class="margin-top-1">
              <p class="bold">When:</p>
              <p>Ab 10.1.2024 bis 12.4.2024</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">Where:</p>
              <p>Online / on site (High School Lezha)</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">Target audience:</p>
              <p>Advanced</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">questions or interested</p>
              <a href="mailto:info@istep.ch">info@istep.ch</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 margin-top-5">
          <div class="bg-secondary padding-2 radius-8">
            <p class="text-center bold text-h5">HTML, CSS, JavaScript</p>
            <div class="margin-top-1">
              <p class="bold">When:</p>
              <p>Ab 10.1.2024 bis 12.4.2024</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">Where:</p>
              <p>Online / on site (High School Lezha)</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">Target audience:</p>
              <p>Advanced</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">questions or interested</p>
              <a href="mailto:info@istep.ch">info@istep.ch</a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 margin-top-5">
          <div class="bg-secondary padding-2 radius-8">
            <p class="text-center bold text-h5">HTML, CSS, JavaScript</p>
            <div class="margin-top-1">
              <p class="bold">When:</p>
              <p>Ab 10.1.2024 bis 12.4.2024</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">Where:</p>
              <p>Online / on site (High School Lezha)</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">Target audience:</p>
              <p>Advanced</p>
            </div>
            <div class="margin-top-1">
              <p class="bold">questions or interested</p>
              <a href="mailto:info@istep.ch">info@istep.ch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "angebot",
  components: {},

  data() {
    return {};
  },

  /*setup() {
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
    },*/
};
</script>
<style scoped src="./Angebot.scss"></style>
