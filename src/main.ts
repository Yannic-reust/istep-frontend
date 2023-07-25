import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
//@ts-ignore

import router from './router.js'
import './App.scss'

const i18n = createI18n({
  locale: 'en',
  // something vue-i18n options here ...
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://istep-backend.blackbox-mit.ch/graphql',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router).use(i18n).mount('#app');