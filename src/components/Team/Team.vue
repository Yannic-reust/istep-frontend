<template>
  <div id="team">
    <h1>Team</h1>
    <div class="container" v-if="result">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-xs-12"
          v-for="(teamMember, index) in result.teamMembers.data"
          :key="index"
        >
        <p></p>
          <TeamMember
            :name="teamMember.attributes.Name"
            :text="teamMember.attributes.Text"
            :image="teamMember.attributes.Image.data.attributes.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamMember from "./TeamMember/TeamMember.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
export default defineComponent({
  name: "Team",
  setup() {
    const { result, loading, error } = useQuery(teamMembers_QUERY);
    return {
      result,
      loading,
      error,
    };
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Adrian",
          text: "Text Adrian",
        },
        {
          name: "Matt",
          text: "Text Matt",
        },
        {
          name: "Dominic",
          text: "Text Dominic",
        },
        {
          name: "Aline",
          text: "Text Aline",
        },
        {
          name: "Yannic",
          text: "Text Yannic",
        },
      ],
    };
  },
  components: {
    TeamMember,
  },
});

const teamMembers_QUERY = gql`
  query teamMembers {
    teamMembers {
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
  }
`;
</script>

<style scoped src="./Team.scss"></style>
