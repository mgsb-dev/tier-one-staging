<template>
  <header>
    <div class="BurgerNavBar" aria-expanded="false" @click="handleClick">
      <input id="toggle" type="checkbox" class="BurgerNavBar__toggle" :class="{ active: isOpen }" />

      <label class="toggle__label" for="toggle">
        <span class="button button-toggle"></span>
      </label>

      <!-- The Nav Menu -->
      <nav class="nav">
        <a class="nav-item" href="">Dashboard</a>
        <a class="nav-item" href="">History</a>
        <a class="nav-item" href="">Statistics</a>
        <a class="nav-item" href="">Settings</a>
      </nav>

      <!-- Dummy Content -->
      <section class="dummy-content">
        <div class="circle"></div>
        <div class="text"><span></span><span></span></div>
        <div class="square-top"></div>
        <div class="square-behind"></div>
      </section>

      <!-- <div class="BurgerNavBar__content">
        <input type="radio" name="navigation" id="home" checked="true" @click="goTo('home')" />
        <input type="radio" name="navigation" id="training" @click="goTo('training')" />
        <input type="radio" name="navigation" id="calendar" @click="goTo('calendar')" />
        <input type="radio" name="navigation" id="shop" @click="goTo('shop')" />
        <input type="radio" name="navigation" id="team" @click="goTo('about-us')" />
      </div> -->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted } from 'vue'
import router from '@/router/index.js'
// import { InstagramIcon, FacebookIcon } from '@zhuowenli/vue-feather-icons'
import checkScreenIsNotDesktop from '@/helpers/ComponentHelper'
import HomeIcon from '@/assets/menu/home.png'
import TrainingIcon from '@/assets/menu/training.png'
import ShopIcon from '@/assets/menu/shop.png'
import TeamIcon from '@/assets/menu/team.png'
import CalendarIcon from '@/assets/menu/calendar.png'

export default defineComponent({
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

    onMounted(() => {
      window.addEventListener('resize', checkScreenSize)
    })

    onBeforeMount(() => {
      window.removeEventListener('resize', checkScreenSize)
    })

    const handleClick = (e: Event) => {
      e.preventDefault()
      isOpen.value = !isOpen.value
      emit('toggleMenu', isOpen.value)
      console.log('click', e)
    }

    const goTo = (id: string) => {
      router.push({ name: id })
    }

    const checkScreenSize = () => {
      isMobileScreen.value = checkScreenIsNotDesktop()
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
