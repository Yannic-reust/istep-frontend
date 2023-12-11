<template>
  <div id="team" class="bg-secondary padding-top-5">
    <div class="container">
      <h2 class="margin-bottom-2 text-center">{{ aboutUs.Title }}</h2>
      <p class="margin-bottom-5">{{ aboutUs.Text }}</p>
      <div v-for="(team, index) in teams" :key="index">
        <p class="text-h4 bold text-center margin-bottom-4">{{ team.Title }}</p>

        <div class="width-80 margin-left-10 flex-center">
          <div class="row width-100 margin-0">
            <div
              class="col-md-4 col-xs-12"
              v-for="(member, index) in team.teamMember"
              :key="index"
            >
              <TeamMember
                :name="member.Name"
                :text="member.Text"
                :image="member.Image.data.attributes.url"
                class="margin-bottom-4"
              />
            </div>
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
  props: ["teams", "aboutUs"],
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
