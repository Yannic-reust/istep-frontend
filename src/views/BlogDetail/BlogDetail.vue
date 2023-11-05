<template>
  <div id="BlogDetails">
    <div class="container">
      <img
        src="../../assets/general/arrow-back.svg"
        alt="back icon"
        class="margin-top-5 pointer"
        @click="back()"
        style="width: 20px"
      />
      <div v-if="blog.Title">
        <BlogContent :data="blog" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BlogContent from "../../components/BlogContent/BlogContent.vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "BlogDetail",
  components: {
    BlogContent,
  },

  data() {
    return {};
  },
  methods:{
    back(){
        this.$router.push('/BlogAlbanien')
    }
  },
  mounted(){
    window.scrollTo(0,0)
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const blog = store.state.currentBlog;
    if (!blog.Title) {
      router.push("/BlogAlbanien");
    }

    return { blog };
  },
};
</script>
<style scoped src="./BlogDetail.scss"></style>
