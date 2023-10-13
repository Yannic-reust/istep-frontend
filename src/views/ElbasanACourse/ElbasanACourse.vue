<script lang="ts">
import { defineComponent } from "vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";
export default defineComponent({
  setup() {},
  data() {
    return {
      store: useStore(),
      websites: [
        {
          link: "https://istep.ch/websitesElbasan2023/Alisa/tasks/index.html",
          name: "Alisa",
        },
        {
          link: "https://istep.ch/websitesElbasan2023/Emanuel/Emanuel/feedback.html",
          name: "Emanuel",
        },
        {
          link: "https://istep.ch/websitesElbasan2023/Mikaeli/mikael.HTML",
          name: "Mikaeli",
        },
        {
          link: "https://istep.ch/websitesElbasan2023/Mond/Mond/mond.html",
          name: "Mond",
        },
      ],
    };
  },
  components: {},
});
</script>

<template>
  <div id="elbasanCourse">
    <div class="container margin-top-5 margin-bottom-5">
      <h2>Title</h2>
      <p>Intorduction Text</p>

      <ul class="margin-top-5">
        <li v-for="(item, index) in websites" :key="index">
          <a :href="item.link"> {{ item.name }}</a>
    
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped src="./ElbasanACourse.scss"></style>
