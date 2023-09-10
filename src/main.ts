import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import { useAccordion } from 'vue3-rich-accordion'

// import 'vue3-rich-accordion/accordion-library-styles.css'
import '@/assets/base.css'
import '@/styles/index.sass'
import 'animate.css'
import 'v-calendar/dist/style.css'
import 'add-to-calendar-button'

const app = createApp(App)

app.use(VCalendar, {})

app.use(useAccordion)

app.use(router)

app.mount('#app')
