import { createApp } from 'vue'
import 'virtual:svg-icons-register';
import App from './App.vue';

const app = createApp(App)

// your custom styles here
import './assets/css/main.css'

// install all plugins under `plugins/`
Object.values(import.meta.globEager('./plugins/*.ts')).map(i => i.install?.({ app }))

app.mount('#app')
