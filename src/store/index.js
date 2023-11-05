import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    currentBlog:{},
    locale2: [
      { code: "de", lang: "Deutsch" },
      { code: "en", lang: "Englisch" },
      { code: "sq", lang: "Albanisch" },
    ],
    currentLanguage: { code: "de", lang: "Deutsch" },
  },
  mutations: {
    langChange(state, payload) {
      state.currentLanguage = payload;
    },
    changeBlog(state, payload){
      state.currentBlog = payload
      
    }
  },
  actions: {
    setLanguage(context, { lang }) {
      context.commit("langChange", lang);
      context.commit("changeBlog", {});
    },
    setBlog(context, {blog}){
      context.commit("changeBlog", blog);
      console.log("asd")
      
    }
  },
});

// export the store
export default store;
