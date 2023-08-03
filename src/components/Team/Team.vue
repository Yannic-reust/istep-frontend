<template>
  <div id="team" class="bg-secondary padding-top-5">
    <div class="container">
      <h2 class="margin-bottom-2 text-center">{{ aboutUs.Title }}</h2>
      <p class="margin-bottom-5 ">{{ aboutUs.Text }}</p>
      <div class="width-80 margin-left-10 flex-center">
        <div class="row">
        <div
          class="col-md-4 col-xs-12"
          v-for="(teamMember, index) in team"
          :key="index"
        >
       
          <TeamMember
            :name="teamMember.attributes.Name"
            :text="teamMember.attributes.Text"
            :image="teamMember.attributes.Image.data.attributes.url"
            class="margin-bottom-4"
          />
        </div>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamMember from "./TeamMember/TeamMember.vue";
export default defineComponent({
  name: "Team",
  props: ["team", "aboutUs"],
  setup() {},
  data() {
    return {};
  },
  components: {
    TeamMember,
  },
});
</script>

<style scoped src="./Team.scss"></style>
