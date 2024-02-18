<template>
  <header>
    <div class="BurgerNavBar" aria-expanded="false" @click="handleClick">
      <input id="toggle" type="checkbox" class="BurgerNavBar__toggle" :class="{ active: isOpen }" />

      <label class="toggle__label" for="toggle">
        <span class="button button-toggle"></span>
      </label>

      <!-- The Nav Menu -->
      <nav class="nav">
        <RouterLink to="/training" class="nav-item">Formación</RouterLink>
          
        <RouterLink to="/survival" class="nav-item">Supervivencia</RouterLink>
          
        <!-- <RouterLink to="/shop" class="nav-item">Tienda</RouterLink> -->
          
        <RouterLink to="/clients" class="nav-item">Soy socio</RouterLink>
          
        <RouterLink to="/about-us" class="nav-item">Nosotros</RouterLink>

      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router/index.js'
import HomeIcon from '@/assets/menu/home.png'
import TrainingIcon from '@/assets/menu/training.png'
import ShopIcon from '@/assets/menu/shop.png'
import TeamIcon from '@/assets/menu/team.png'
import CalendarIcon from '@/assets/menu/calendar.png'

export default defineComponent({
  components: { RouterLink },
  setup(_,{ emit }) {
    const trainings = [
      { name: 'Nacional', id: '/training/national' },
      { name: 'Internacional', id: '/training/international' }
    ]

    const isTrainingsShow = ref(false)
    const isProgramsShow = ref(false)
    const lastActiveTab = ref<string | null>(null)
    const isMobileScreen = ref(false)
    const isOpen = ref(false)

    const handleClick = (e: Event) => {
      e.preventDefault()
      isOpen.value = !isOpen.value
      emit('toggleMenu', isOpen.value)
    }

    const goTo = (id: string) => {
      router.push({ name: id })
    }

    const showTraining = (): void => {
      isProgramsShow.value = false
      ;(isTrainingsShow.value = true), CalendarIcon
    }

    const hideTraining = (): void => {
      isTrainingsShow.value = false
    }

    const hideTabs = (): void => {
      isProgramsShow.value = false
      isTrainingsShow.value = false
    }

    const clickHandler = (e: Event): void => {
      const eventTarget = e.currentTarget as HTMLSelectElement
      const id = eventTarget.getAttribute('id')
      hideTabs()

      if (!lastActiveTab.value) {
        lastActiveTab.value = id
        eventTarget.classList.add('active')
        return
      }

      const previousElement = document.getElementById(lastActiveTab.value)
      if (previousElement) {
        lastActiveTab.value = id
        previousElement.classList.remove('active')
        eventTarget.classList.add('active')
      }
    }

    const openInstagram = () => {
      window.location.href = 'https://www.instagram.com/tier.one.club/'
    }

    const openFacebook = () => {
      window.location.href = ''
    }

    return {
      HomeIcon,
      TrainingIcon,
      ShopIcon,
      TeamIcon,
      CalendarIcon,
      trainings,
      isTrainingsShow,
      isProgramsShow,
      isMobileScreen,
      isOpen,

      showTraining,
      hideTraining,
      clickHandler,
      hideTabs,
      openInstagram,
      openFacebook,
      goTo,
      handleClick
    }
  }
})
</script>

<style lang="sass">
@import './BurgerNavBarCopy.sass'
</style>
