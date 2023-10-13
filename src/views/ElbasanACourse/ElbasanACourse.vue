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
      websites:[
        {
          link:"",
          name:""
        }
      ]
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
      <a href="/websitesElbasan2023/Mond/Mond/Mond.html
      ">Mond</a>
      <ul>
        <!-- <li v-for=""></li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped src="./ElbasanACourse.scss"></style>
