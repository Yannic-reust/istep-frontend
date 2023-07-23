<template>
  <div id="contactForm" class="margin-top-5 margin-bottom-5">
    <h2 class="primary text-center">Kontaktiere uns!</h2>

    <div >
      <form ref="form" id="myForm" @submit.prevent="sendEmail">
        <div class="container">
        
          <div class="row margin-top-2">
            <div class="col-sm-12 col-md-6 margin-top-2">
              <label class="primary text-h4">Dein Name</label>
              <input type="text" name="user_name" class="input-text" required />
            </div>
            <div class="col-sm-12 col-md-6 margin-top-2">
              <label class="primary text-h4">Deine Email Adresse</label>
              <input
                type="email"
                name="user_email"
                class="input-text"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 margin-top-2 marginbottom-2">
              <p class="text-h4">Warum möchtest du mit uns in kontakt treten?</p>
            </div>
         
          <div class="col-xs-12 col-md-4 flex">
            <input type="radio" id="goenner" name="radio_input" value="30" />
            <label for="goenner"><p class="margin-left-2 text-h4">Gönner</p></label><br />
          </div>
          <div class="col-xs-12 col-md-4 flex">
            <input type="radio" id="helfer" name="radio_input" value="30" />
            <label for="helfer"><p class="margin-left-2 text-h4">Helfer</p></label><br />
          </div>
          <div class="col-xs-12 col-md-4 flex">
            <input type="radio" id="kurs_interessenten" name="radio_input" value="30" />
            <label for="kurs_interessenten"><p class="margin-left-2 text-h4">Kurs Interessierte</p></label><br />
          </div>
        </div>
          <div class="row">
            <div class="col-sm-12 padding-top-2">
              <label class="primary text-h4">Deine Nachricht</label>
              <textarea
                name="message"
                class="input-text textarea padding-2"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex-center">
          <input
            type="submit"
            value="Nachricht Senden"
            class="button-primary margin-top-4 button"
          />
        </div>
      </form>
    </div>

    <div class="container margin-top-5" v-if="success">
      <h5 class="success text-center">Deine Nachricht wurde gesendet!</h5>
    </div>
    <div class="container" v-if="fail">
      <h5 class="fail text-center">
        Es ist leider ein Fehler aufgetetten, versuche es nochmal oder sende uns
        direkt eine Nachricht.
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
