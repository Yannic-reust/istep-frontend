import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import Markdown from 'vue3-markdown-it';
//@ts-ignore
import router from './router.js'
import './App.scss'
//@ts-ignore
import store from './store'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://istep-backend.bbmit-service.tech/graphql',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router).use(Markdown).use(store).mount('#app');