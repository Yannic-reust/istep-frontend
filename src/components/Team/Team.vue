<template>
  <div id="team">
    <div class="container">
      <h1 class="margin-bottom-2 text-center">{{ aboutUs.Title }}</h1>
      <p class="margin-bottom-5 text-center">{{ aboutUs.Text }}</p>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-xs-12"
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
