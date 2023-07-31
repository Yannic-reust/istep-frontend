import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    locale: [
      { code: "de", lang: "Deutsch" },
      { code: "en", lang: "Englisch" },
    ],
    currentLanguage:"Deutsch"
  },
  mutations: {
    langChange(lang) {
      this.currentLanguage = lang;
    },
  },
  actions: {
    setLanguage(lang) {
      context.commit("langChange", lang);
    },
  },
});

// export the store
export default store;
