<template>
  <div class="app" @scroll="checkLogoPosition">
    <div class="Hero">
      <p class="Hero__text">"Cuando ser los mejores, no es suficiente"</p>
    </div>
    <header id="header" class="Header">
      <img id="tieroneLogo" class="Header__logo-icon" :src="Logo" alt="Tier one logo" />
      <div id="home" class="Header__logo" @click.prevent="clickHandler">
        <RouterLink to="/" class="Header__logo__link">
          <!-- <img :src="Logo" class="Header__logo__link__image" /> -->
          <!-- <div class="Header__logo__link__image"> -->
            <h1 id="tieroneTitle">TIER ONE CLUB</h1>
          <!-- </div> -->
        </RouterLink>
      </div>
      <ul class="Header__rrss__container">
        <li class="Header__rrss__item">
          <InstagramIcon
            :height="isMobileScreen ? `15px` : `20px`"
            :width="isMobileScreen ? `15px` : `20px`"
            color="white"
            stroke-width="2px"
            @click="openInstagram"
          />
        </li>
        <li class="Header__rrss__item">
          <FacebookIcon
            :height="isMobileScreen ? `15px` : `20px`"
            :width="isMobileScreen ? `15px` : `20px`"
            color="white"
            stroke-width="2px"
            @click="openFacebook"
          />
        </li>
      </ul>
    </header>

    <div class="app__body" >
      <div class="app__body-content" id="tieroneContent">
        <NavBarCopy />
      </div>
      
      <!-- <BurgerNavBar else @toggle-menu="toggleMenu" /> -->
      <!-- <RouterView /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import checkIsDesktop from '@/helpers/ComponentHelper'
import NavBarCopy from './components/molecules/NavBar/NavBarCopy.vue'
import Logo from '@/assets/logo_white.png'
import { InstagramIcon, FacebookIcon } from '@zhuowenli/vue-feather-icons'

export default defineComponent({
  components: { NavBarCopy, InstagramIcon, FacebookIcon },
  setup() {
    const isMobileScreen = ref(false)
    const isOpen = ref(false)
    const isChrome = ref(false)

    onMounted(() => {
      window.addEventListener('load', checkScreenSize);
      checkIsChrome();
    })

    const checkIsChrome = () => {
      isChrome.value = navigator.userAgent.indexOf("Chrome") !== -1;
    }

    const checkLogoPosition = () => {
      const titleElement = document.getElementById('tieroneTitle');
      const logoElement = document.getElementById('tieroneLogo');
      const header = document.getElementById('header');
      const content = document.getElementById('tieroneContent');

      if (titleElement && logoElement && header) {
        const { top } = titleElement.getBoundingClientRect();

        if (top > 0) {
          if (!isChrome.value) {
            titleElement?.classList.remove('title')
            titleElement?.classList.add('title-big')
          }
          logoElement.classList.remove('show')
          header?.classList.remove('left')
          content?.classList.remove('show')
          
        } else {
          if (!isChrome.value) {
            titleElement?.classList.remove('title-big')
            titleElement?.classList.add('title')
          }
          logoElement.classList.add('show')
          header?.classList.add('left')
          content?.classList.add('show')
        }
      }
    }

    const checkScreenSize = () => {
      isMobileScreen.value = checkIsDesktop()
    }
    
    const toggleMenu = (menuIsOpen: boolean) => {
      isOpen.value = menuIsOpen
      console.log('--toggle', menuIsOpen)
    }

    const openInstagram = () => {
      window.location.href = 'https://www.instagram.com/tier.one.club/'
    }

    const openFacebook = () => {
      window.location.href = ''
    }

    const clickHandler = (e: Event): void => {
      const eventTarget = e.currentTarget as HTMLSelectElement
      const id = eventTarget.getAttribute('id')
      // hideTabs()

      // if (!lastActiveTab.value) {
      //   lastActiveTab.value = id
      //   eventTarget.classList.add('active')
      //   return
      // }

      // const previousElement = document.getElementById(lastActiveTab.value)
      // if (previousElement) {
      //   lastActiveTab.value = id
      //   previousElement.classList.remove('active')
      //   eventTarget.classList.add('active')
      // }
    }

    return {
      Logo,
      isOpen,
      isMobileScreen,
      toggleMenu,
      clickHandler,
      openInstagram,
      openFacebook,
      checkLogoPosition
    }
  }
})
</script>

<style lang="sass" scoped>
.app
  overflow: auto
  overflow-x: hidden
  padding: 2rem
  background: -moz-linear-gradient(70deg, black 0%, #232625 20%, black 45%, black 100%)
  background: -webkit-linear-gradient(70deg, black 0%, #232625 20%, black 45%, black 100%)
  background: linear-gradient(70deg, black 0%, #232625 20%, black 45%, black 100%)
  width: 100vw
  height: 100vh
  &__body
    height: calc(100% - 2rem)
    &-content
      display: none
      &.show
        height: 100%
        width: 100%
        display: flex
        flex-direction: row
.fade-enter-to, .fade-leave
  opacity: 1
.fade-enter-active, .fade-leave-active
  transition: opacity 0.2s ease-out
.fade-enter, .fade-leave-to
  opacity: 0

#container
  position: relative
  margin: 35px auto 0
  overflow: hidden

.Header
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  width: 100%
  animation: max-out linear both
  animation-timeline: view()
  animation-range-start: 80vh
  animation-range-end: 100vh
  position: sticky
  top: 0
  left: 0
  height: 2.5rem
  padding: 0
  &.left
    justify-content: flex-start
  &::after
    justify-content: flex-end
    animation: appear linear both
    animation-timeline: view()
    animation-range-start: 60vh
    animation-range-end: 100vh
    content: ''
    position: absolute
    opacity: 0
    height: .05em
    width: 100%
    bottom: 0
    background: -moz-linear-gradient(66deg, white 0%, rgba(110,110,110,1) 47%, rgba(4,5,25,1) 100%)
    background: linear-gradient(66deg, white 0%, rgba(110,110,110,1) 47%, rgba(4,5,25,1) 100%)
  &__logo
    animation: zoom-out linear both
    animation-timeline: view()
    animation-range-start: 10vh
    animation-range-end: 100vh
    font-weight: 900
    font-size: 12cqi
    background: -moz-linear-gradient(45deg, hsl(0, 100%, 70%), hsl(30, 100%, 70%), hsl(60, 100%, 70%), hsl(90, 100%, 70%), hsl(120, 100%, 70%), hsl(150, 100%, 70%), hsl(180, 100%, 70%), hsl(210, 100%, 70%), hsl(240, 100%, 70%), hsl(270, 100%, 70%), hsl(300, 100%, 70%), hsl(330, 100%, 70%), hsl(360, 100%, 70%))
    background: -moz-linear-gradient(in hsl longer hue 40deg, #f66 0 0)
    background: linear-gradient(45deg, hsl(0, 100%, 70%), hsl(30, 100%, 70%), hsl(60, 100%, 70%), hsl(90, 100%, 70%), hsl(120, 100%, 70%), hsl(150, 100%, 70%), hsl(180, 100%, 70%), hsl(210, 100%, 70%), hsl(240, 100%, 70%), hsl(270, 100%, 70%), hsl(300, 100%, 70%), hsl(330, 100%, 70%), hsl(360, 100%, 70%))
    background: linear-gradient(in hsl longer hue 40deg, #f66 0 0)
    background-clip: text
    color: #0000
    &-icon
      display: none
      width: 100px
      height: auto
      transition: 100 ease-in
      &.show
        display: block
  &__rrss
    &__container
      display: none
      padding-right: 1em
      margin: 0
      gap: 1rem
      &::after
        display: inline-flex
    &__item
      list-style: none
      display: inline-block
      cursor: pointer
      transition: .5s linear

.Hero
  animation: fade-out linear both
  animation-timeline: view()
  animation-range: exit -100px
  min-height: 50vh
  display: grid
  align-content: center
  container-type: size
  &__text
    font-size: clamp(1rem, 2.5vw, 2rem)
    font-weight: 100
    color: white
    text-align: center

@supports(animation-timeline: view())
  @-moz-keyframes fade-out
    to
      background-size: 150%
      opacity: 0

  @keyframes fade-out
    to
      background-size: 150%
      opacity: 0

  @-moz-keyframes zoom-out
    to
      font-size: 2rem
      padding-left: .1em

  @keyframes zoom-out
    to
      font-size: 2rem
      padding-left: .1em

  @-moz-keyframes appear
    to
      opacity: 1

  @-moz-keyframes max-out
    to
      max-width: 100%

  @keyframes appear
    to
      opacity: 1

  @keyframes max-out
    to
      max-width: 100%
.title
  font-size: 2rem
  transition: 200ms linear
  &-big
    font-size: inherit
    transition: 300ms linear
</style>
