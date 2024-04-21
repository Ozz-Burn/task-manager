import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from './providers'

const app = createApp(App)

app.use(router)
app.use(store)

export default app
