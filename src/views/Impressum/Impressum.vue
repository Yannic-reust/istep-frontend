<template>
  <div id="impressum" class="margin-top-4">
    <div class="container wrapper">
      <h3 class="primary">Kontakt-Adresse</h3>
      <div>
        <p class="primary">iStep</p>
        <p class="primary">Adresse</p>
        <p class="primary">PLZ / Ort</p>
        <p class="primary">Schweiz</p>

        <a href="mailto:info@istep.ch" class="primary">info@istep.ch</a>

        <p class="primary margin-top-4 bold">Vertretungsberechtigte Person</p>
        <p class="primary">Adrian Burkhalter</p>

        <p class="primary margin-top-4 bold">Handelsregister-Eintrag</p>
        <p class="primary margin-top-1 text-small">
          Eingetragener Firmenname: iStep
        </p>

        <p class="primary margin-top-1 text-small">
          Unternehmens-Nr (UID):CHE-xxx.xxx.xxx
        </p>
      </div>
      <div class="margin-bottom-5">
        <p class="primary bold margin-top-4">Haftungsausschluss</p>
        <p class="primary text-small margin-top-1">
          Der Autor &uuml;bernimmt keinerlei Gew&auml;hr hinsichtlich der
          inhaltlichen Richtigkeit, Genauigkeit, Aktualit&auml;t,
          Zuverl&auml;ssigkeit und Vollst&auml;ndigkeit der Informationen.
        </p>
        <p class="primary text-small margin-top-1">
          Haftungsanspr&uuml;che gegen den Autor wegen Sch&auml;den materieller
          oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
          Nichtnutzung der ver&ouml;ffentlichten Informationen, durch Missbrauch
          der Verbindung oder durch technische St&ouml;rungen entstanden sind,
          werden ausgeschlossen.
        </p>
        <p class="primary text-small margin-top-1">
          Alle Angebote sind unverbindlich. Der Autor beh&auml;lt es sich
          ausdr&uuml;cklich vor, Teile der Seiten oder das gesamte Angebot ohne
          besondere Ank&uuml;ndigung zu ver&auml;ndern, zu erg&auml;nzen, zu
          l&ouml;schen oder die Ver&ouml;ffentlichung zeitweise oder
          endg&uuml;ltig einzustellen.
        </p>

        <p class="primary bold margin-top-2">
          Haftungsausschluss f&uuml;r Links
        </p>
        <p class="primary text-small margin-top-1">
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Es wird jegliche Verantwortung f&uuml;r solche
          Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
          erfolgen auf eigene Gefahr des jeweiligen Nutzers.
        </p>

        <p class="primary bold margin-top-2">Urheberrechte</p>
        <p class="primary text-small margin-top-1">
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
          anderen Dateien auf dieser Website, geh&ouml;ren ausschliesslich oder
          den speziell genannten Rechteinhabern. F&uuml;r die Reproduktion
          jeglicher Elemente ist die schriftliche Zustimmung des
          Urheberrechtstr&auml;gers im Voraus einzuholen.
        </p>
        <p class="primary margin-top-5 text-small">
          Quelle:
          <a
            href="https://www.swissanwalt.ch"
            target="_blank"
            rel="noopener"
            class="primary margin-top-5 text-small"
            >SwissAnwalt</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Impressum",
});
</script>
<style scoped src="./Impressum.scss"></style>
