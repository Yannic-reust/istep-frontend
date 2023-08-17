import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    locale: [
      { code: "de", lang: "Deutsch" },
      { code: "en", lang: "Englisch" },
    ],
    currentLanguage: { code: "de", lang: "Deutsch" },
  },
  mutations: {
    langChange(state, payload) {
      state.currentLanguage = payload;
    },
  },
  actions: {
    setLanguage(context, { lang }) {
      context.commit("langChange", lang);
    },
  },
});

// export the store
export default store;
