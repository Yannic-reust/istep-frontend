<template>
  <div id="contactForm" class=" padding-bottom-5 bg-secondary">
    <h2 class="primary text-center margin-bottom-5 padding-top-5">{{ contactForm.Title }}</h2>
    <div>
      <form ref="form" id="myForm" @submit.prevent="sendEmail">
        <div class="container">
          <div class="row ">
            <div class="col-xs-12 col-md-6 margin-top-4">
              <input
                type="text"
                name="user_name"
                class="input-text"
                :placeholder="contactForm.FirstInput"
                required
              />
              <input
                type="text"
                name="user_name2"
                class="input-text margin-top-2"
                :placeholder="contactForm.SecondInput"
                required
              />
              <input
                type="email"
                name="user_email"
                class="input-text margin-top-2 padding-1"
                :placeholder="contactForm.ThirdInput"
                required
              />

              <textarea
                name="message"
                class="input-text textarea padding-2 margin-top-2"
                required
                :placeholder="contactForm.Message"
              ></textarea>
            </div>
            <div class="col-xs-12 col-md-6 margin-top-4">
              <p class="bold">{{ contactForm.FourthInput }}</p>
              <div
                class="flex margin-top-2 margin-bottom-2"
                v-for="(item, index) in contactForm.contactFormWhyItem"
                :key="index"
              >
                <input
                  type="radio"
                  id="goenner"
                  name="radio_input"
                  class=""
                  :value="item.Name"
                />
                <label for="goenner"
                  ><p class="margin-left-2 text-h4 t">{{ item.Name }}</p></label
                >
              </div>
            </div>
          </div>

          <!--------- old ------------>
        </div>
        <div class="flex-center">
          <input
            type="submit"
            :value="contactForm.ButtonText"
            class="button-primary margin-top-4 button text-standard"
          />
        </div>
      </form>
    </div>

    <div class="container margin-top-5" v-if="success">
      <h5 class="success text-center">{{contactForm.SuccessText}}</h5>
    </div>
    <div class="container" v-if="fail">
      <h5 class="fail text-center">
        {{contactForm.FailedText}}
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore
import emailjs from "@emailjs/browser";
export default defineComponent({
  name: "ContactFrom",
  props: ["contactForm"],
  data() {
    return {
      success: false,
      fail: false,
      openForm: false,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_jq3nxlz",
          "template_omcf3a3",
          //@ts-ignore
          this.$refs.form,
          "9Fwh4_-6GU9R1g5_r"
        )
        .then(
          () => {
            this.success = true;
            document.forms[0].reset();
          },
          () => {
            this.fail = true;
          }
        );
    },
  },
});
</script>
<style scoped src="./ContactForm.scss"></style>
