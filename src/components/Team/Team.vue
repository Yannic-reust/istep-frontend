<template>
  <div id="team">
    <h1 class="margin-bottom-2 text-center">Team</h1>
    <div class="container">
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
  props: ["team"],
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
