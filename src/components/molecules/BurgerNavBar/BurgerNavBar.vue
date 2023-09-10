<template>
  <header>
    <nav class="BurgerNavBar" aria-expanded="false">
      <div class="BurgerNavBar__content">
        <input type="radio" name="navigation" id="home" checked="true" @click="goTo('home')" />
        <input type="radio" name="navigation" id="training" @click="goTo('training')" />
        <input type="radio" name="navigation" id="calendar" @click="goTo('calendar')" />
        <input type="radio" name="navigation" id="shop" @click="goTo('shop')" />
        <input type="radio" name="navigation" id="team" @click="goTo('about-us')" />
        <label class="BurgerNavBar__label" for="home">
          <img class="icon" :src="HomeIcon" alt="" />
        </label>

        <label class="BurgerNavBar__label" for="training">
          <img class="icon" :src="TrainingIcon" alt="" />
        </label>

        <label class="BurgerNavBar__label" for="calendar">
          <img class="icon" :src="CalendarIcon" alt="" />
        </label>

        <label class="BurgerNavBar__label" for="shop">
          <img class="icon" :src="ShopIcon" alt="" />
        </label>

        <label class="BurgerNavBar__label" for="team">
          <img class="icon" :src="TeamIcon" alt="" />
        </label>

        <div class="BurgerNavBar__content__circle"></div>
        <div class="BurgerNavBar__content__selected">
          <div class="BurgerNavBar__content__selected--bottom">
            <span class="BurgerNavBar__content__selected--indicator"></span>
          </div>
        </div>
      </div>
    </nav>
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
  setup() {
    const trainings = [
      { name: 'Nacional', id: '/training/national' },
      { name: 'Internacional', id: '/training/international' }
    ]

    const isTrainingsShow = ref(false)
    const isProgramsShow = ref(false)
    const lastActiveTab = ref<string | null>(null)
    const isMobileScreen = ref(false)

    onMounted(() => {
      window.addEventListener('resize', checkScreenSize)
    })

    onBeforeMount(() => {
      window.removeEventListener('resize', checkScreenSize)
    })

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

      showTraining,
      hideTraining,
      clickHandler,
      hideTabs,
      openInstagram,
      openFacebook,
      goTo
    }
  }
})
</script>

<style lang="sass">
@import './BurgerNavBar.sass'
</style>
