import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import InternationalTrainingView from '@/views/InternationalTrainingView/InternationalTrainingView.vue'
import NationalTrainingView from '@/views/NationalTrainingView/NationalTrainingView.vue'
import GeneralTrainingView from '@/views/GeneralTrainingView/GeneralTrainingView.vue'
import CalendarView from '@/views/CalendarView/CalendarView.vue'
import GalleryView from '@/views/GalleryView/GalleryView.vue'
import ShopView from '@/views/ShopView/ShopView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'

const router = createRouter({
  history: createWebHistory('/tier_one_staging/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/training',
      name: 'training',
      component: GeneralTrainingView
    },
    {
      path: '/training/international',
      name: 'international',
      component: InternationalTrainingView
    },
    {
      path: '/training/national',
      name: 'national',
      component: NationalTrainingView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView
    }
  ]
})

export default router
