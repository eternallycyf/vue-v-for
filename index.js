import { createApp } from './app.js'
import TestA from './components/TestA/index.js'
import TestB from './components/TestB/index.js'

const app = createApp({
  components: [TestA, TestB]
})

app.mount('#app')
