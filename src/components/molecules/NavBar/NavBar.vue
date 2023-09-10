<template>
  <header>
    <nav class="NavBar" aria-expanded="false">
      <div
        id="home"
        class="NavBar__logo"
        @click.prevent="clickHandler"
        @mouseenter.prevent="hideTabs"
      >
        <RouterLink to="/" class="NavBar__logo__link">
          <img :src="Logo" class="NavBar__logo__link__image" />
        </RouterLink>
      </div>

      <ul class="NavBar__content">
        <li
          id="training"
          class="NavBar__list-title"
          @mouseenter.prevent="showTraining"
          @click.prevent="clickHandler"
        >
          <RouterLink to="/training" class="NavBar__list-title--dark">Formación</RouterLink>
          <ul class="NavBar__list" v-if="isTrainingsShow" @mouseleave.prevent="hideTraining">
            <li class="NavBar__list-item" v-for="training in trainings" :key="training.id">
              <RouterLink :to="training.id">{{ training.name }}</RouterLink>
            </li>
          </ul>
        </li>
        <li
          id="calendar"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/calendar" class="NavBar__list-title--dark">Calendario</RouterLink>
        </li>
        <!-- <li
          id="gallery"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/gallery" class="NavBar__list-title--dark">Media</RouterLink>
        </li> -->
        <li
          id="shop"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/shop" class="NavBar__list-title--dark">Tienda</RouterLink>
        </li>
        <li
          id="aboutUs"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/about-us" class="NavBar__list-title--dark">Sobre Nosotros</RouterLink>
        </li>
        <li>
          <ul class="NavBar__rrss__container">
            <li class="NavBar__rrss__item">
              <InstagramIcon
                :height="isMobileScreen ? `15px` : `20px`"
                :width="isMobileScreen ? `15px` : `20px`"
                color="white"
                stroke-width="2px"
                @click="openInstagram"
              />
            </li>
            <li class="NavBar__rrss__item">
              <FacebookIcon
                :height="isMobileScreen ? `15px` : `20px`"
                :width="isMobileScreen ? `15px` : `20px`"
                color="white"
                stroke-width="2px"
                @click="openFacebook"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { InstagramIcon, FacebookIcon } from '@zhuowenli/vue-feather-icons'
import checkScreenIsNotDesktop from '@/helpers/ComponentHelper'
import Logo from '@/assets/logo.png'

export default defineComponent({
  components: { RouterLink, InstagramIcon, FacebookIcon },
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

    const checkScreenSize = () => {
      isMobileScreen.value = checkScreenIsNotDesktop()
    }

    const showTraining = (): void => {
      isProgramsShow.value = false
      isTrainingsShow.value = true
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
      Logo,
      trainings,
      isTrainingsShow,
      isProgramsShow,
      isMobileScreen,

      showTraining,
      hideTraining,
      clickHandler,
      hideTabs,
      openInstagram,
      openFacebook
    }
  }
})
</script>

<style lang="sass">
@import './NavBar.sass'
</style>
