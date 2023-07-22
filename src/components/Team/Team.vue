<template>
  <div id="team">
    <h1>Team</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-xs-12" v-for="(teamMember, index) in teamMembers" :key="index">
          <TeamMember :name="teamMember.name" :text="teamMember.text"/>
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
  data() {
  return{
    teamMembers:[
      {
        name:"Adrian",
        text:"Text Adrian"
      },
      {
        name:"Matt",
        text:"Text Matt"
      },
      {
        name:"Dominic",
        text:"Text Dominic"
      },
      {
        name:"Aline",
        text:"Text Aline"
      },
      {
        name:"Yannic",
        text:"Text Yannic"
      }
    ]
  }
  
  },
  components:{
    TeamMember,
  }
});
</script>

<style scoped src="./Team.scss"></style>
