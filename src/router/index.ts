import { createRouter, createWebHistory } from 'vue-router'
import InternationalTrainingView from '@/views/InternationalTrainingView/InternationalTrainingView.vue'
import NationalTrainingView from '@/views/NationalTrainingView/NationalTrainingView.vue'
import GeneralTrainingView from '@/views/GeneralTrainingView/GeneralTrainingView.vue'
import GalleryView from '@/views/GalleryView/GalleryView.vue'
import ShopView from '@/views/ShopView/ShopView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'

const router = createRouter({
  history: createWebHistory('/tier-one-staging/'),
  routes: [
    {
      path: '/',
      redirect: 'training',
      name: 'home'
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
