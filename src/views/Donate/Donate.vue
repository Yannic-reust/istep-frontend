<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default defineComponent({
  name: "DonateView",
  props: ["donate"],
  data() {
    return {
      store: useStore(),
    };
  },
  setup() {
    const store = useStore();

    const variables = { locale: store.state.currentLanguage.code };

    const donate = gql`
      query donate($locale: I18NLocaleCode) {
        donate(locale: $locale) {
          data {
            attributes {
              Donate
              BankVerbindungen
              QrRechnung
              CreditcardDonation
            }
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(donate, variables);

    return { result };
  },
  components: {},
  created() {
    var scripts = ["https://tamaro.raisenow.com/istep-b7da/latest/widget.js"];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
  mounted() {
    setTimeout(() => {
      //@ts-ignore
      window.rnw.tamaro.runWidget(".rnw-widget-container", {
        language: this.store.state.currentLanguage.code,
      });
    }, 300);
  },
});
</script>

<template>
  <div id="donate" v-if="result">
    <div class="container margin-top-5 padding-top-5 margin-bottom-5">
      <div>
        <div class="margin-bottom-5">
          <p class="margin-bottom-2 text-h4">
            {{ result.donate.data.attributes.QrRechnung }}
          </p>
          <img
            src="/QR-Rechnung.png"
            alt="qr rechnung"
            class="width-100 margin-bottom-2"
          />
          <a href="/QR_Rechnung.pdf" download>Download</a>
        </div>

        <div class="margin-bottom-5">
          <p class="text-h4">
            {{ result.donate.data.attributes.BankVerbindungen }}
          </p>
          <p>CH68 0900 0000 1617 1693 4</p>
          <p>iSTEP</p>
          <p>Weingartenstrasse 6</p>
          <p>3417 Rüegsau</p>
        </div>
      </div>
      <div>
        <p class="text-h4">Donate via Twint</p>
        <div class="width-100 flex-center">
          <img src="/twint.png" alt="twint qr code" class="img" />
        </div>
      </div>

      <p class="text-h4 margin-bottom-2">
        {{ result.donate.data.attributes.CreditcardDonation }}
      </p>

      <p class="margin-bottom-5">
        {{ result.donate.data.attributes.Donate }}
      </p>
      <p class="margin-bottom-5">
        <a href="https://www.raisenow.com/" target="_blank">RaiseNow</a>
        <br />

        <a href="https://fairgive.org/" target="_blank">FairGive</a>
      </p>
      <div>
        <iframe
          src="https://donate.raisenow.io/zbvxd"
          height="1600px"
          width="100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Donate.scss"></style>
