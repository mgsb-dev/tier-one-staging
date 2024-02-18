<template>
  <div class="app" @scroll="checkLogoPosition">
    <div id="hero" class="Hero">
      <p class="Hero__text">"Cuando ser los mejores, no es suficiente"</p>
    </div>
    <header id="headerWrapper" class="Header">
      <span id="reference"></span>
      <div id="header" class="Header__content">
        <div class="Header__logo" @click.prevent="clickHandler">
          <RouterLink to="/" class="Header__logo__link">
            <img id="tieroneTitle" :src="Title" alt="tier one club" class="Header__logo__title" />
          </RouterLink>
        </div>
        <ul id="rrss" class="Header__rrss__container" >
          <li class="Header__rrss__item">
            <InstagramIcon
              :height="isDesktopScreen ? `25px` : `15px`"
              :width="isDesktopScreen ? `25px` : `15px`"
              color="white"
              stroke-width="2px"
              @click="openInstagram"
            />
          </li>
          <li class="Header__rrss__item">
            <FacebookIcon
              :height="isDesktopScreen ? `25px` : `15px`"
              :width="isDesktopScreen ? `25px` : `15px`"
              color="white"
              stroke-width="2px"
              @click="openFacebook"
            />
          </li>
        </ul>
      </div>
    </header>

    <div class="app__body">
      <div class="app__body-content" id="tieroneContent">
        <NavBarCopy v-if="isDesktopScreen" />
        <BurgerNavBar v-else @toggle-menu="toggleMenu" />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import checkIsDesktop from '@/helpers/ComponentHelper'
import NavBarCopy from '@/components/molecules/NavBar/NavBarCopy.vue'
import BurgerNavBar from '@/components/molecules/BurgerNavBar/BurgerNavBar.vue'
import Logo from '@/assets/logo_white.png'
import Title from '@/assets/tierone-long.png'
import { InstagramIcon, FacebookIcon } from '@zhuowenli/vue-feather-icons'

export default defineComponent({
  components: { NavBarCopy, BurgerNavBar, InstagramIcon, FacebookIcon },
  setup() {
    const isDesktopScreen = ref(false)
    const isOpen = ref(false)
    const isChrome = ref(false)

    onMounted(() => {
      window.addEventListener('load', checkScreenSize)

      checkIsChrome()
    })

    const checkLogoPosition = () => {
      const heroElement = document.getElementById('hero')
      const refElement = document.getElementById('reference')
      const rrssElement = document.getElementById('rrss')
      const titleElement = document.getElementById('tieroneTitle')
      const header = document.getElementById('header')
      const content = document.getElementById('tieroneContent')
      const headerWrapper = document.getElementById('headerWrapper')

      if (headerWrapper && heroElement && titleElement && refElement && header) {
        const { top } = refElement.getBoundingClientRect()
        const TOP_SPACING = 50;

        if (top > TOP_SPACING) {
          if (!isChrome.value) {
            titleElement.classList.remove('title')
            titleElement.classList.add('title-big')
          }
          
          rrssElement?.classList.remove('show')
          header.classList.remove('left')
          heroElement.style.display="grid"
          header.style.justifyContent="center"
          content?.classList.remove('show')
        } else {
          if (!isChrome.value) {
            titleElement.classList.remove('title-big')
            titleElement.classList.add('title')
          }
          heroElement.style.display="none"

          setTimeout(() => {
            if (isDesktopScreen.value) {
              rrssElement?.classList.add('show')
              header?.classList.add('left')
            } else {
              headerWrapper.style.display="none"
            }
          }, 150);

          setTimeout(() => {
            if (isDesktopScreen.value) {
              rrssElement?.classList.add('show')
            }
            content?.classList.add('show')
            header.style.justifyContent="space-between"

          }, 300)
        }
      }
    }

    const checkIsChrome = () => {
      isChrome.value = navigator.userAgent.indexOf('Chrome') !== -1
    }

    const checkScreenSize = () => {
      isDesktopScreen.value = checkIsDesktop()
    }

    const toggleMenu = (menuIsOpen: boolean) => {
      const viewPanel = document.getElementById('viewPanel')
      const generalTraining = document.getElementById('generalTraining')
      isOpen.value = menuIsOpen

      if (menuIsOpen && generalTraining) {
        generalTraining?.classList.add('active')
      } else {
        generalTraining?.classList.remove('active')
      }

      if (menuIsOpen && viewPanel) {
        viewPanel.classList.add('active')
      } else {
        viewPanel?.classList.remove('active')
      }
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
      Title,
      isOpen,
      isDesktopScreen,

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
@import '@/styles/colors'
@import '@/styles/base'
@import '@/styles/breakpoints'

$items: 4
$transition-duration: 0.5s
$transition-delay: 0.05s
.app
  overflow: auto
  overflow-x: hidden
  padding: 0
  padding-inline: 1rem
  background: -moz-linear-gradient(70deg, black 0%, #232625 20%, black 45%, black 100%)
  background: -webkit-linear-gradient(70deg, black 0%, #232625 20%, black 45%, black 100%)
  background: linear-gradient(70deg, black 0%, #232625 20%, black 45%, black 100%)
  width: 100vw
  height: 100vh
  @media only screen and (min-width: $tablet)
    padding: 2rem

  &__body
    width: 100%
    height: 100%
    @media only screen and (min-width: $tablet)
      height: calc(100% - 50px)
    &-content
      display: none
      &.show
        height: 100%
        width: 100%
        display: grid
        grid-template-rows: 6vh 1fr
        gap: 0
        @media only screen and (min-width: $tablet)
          display: flex
          flex-direction: row
          justify-content: flex-start
          align-items: center
          gap: 2%
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
  flex-direction: column
  justify-content: space-between
  align-items: center
  width: 100%
  animation: max-out linear both
  animation-timeline: view()
  animation-range-start: 80vh
  animation-range-end: 100vh
  position: sticky
  top: 0
  left: 0
  height: 4rem
  padding: 0    
  &__content
    width: 100%
    display: flex
    flex-direction: row
    justify-content: center
    transition: 300ms ease-in
    &.left
      justify-content: space-between
  &::after
    @media only screen and (min-width: $tablet)
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
      background: linear-gradient(66deg, white 0%, rgba(110,110,110,1) 47%, rgba(4,5,25,1) 100%)
  &__logo
    animation: zoom-out linear both
    animation-timeline: view()
    animation-range-start: 10vh
    animation-range-end: 100vh
    background: linear-gradient(45deg, hsl(0, 100%, 70%), hsl(30, 100%, 70%), hsl(60, 100%, 70%), hsl(90, 100%, 70%), hsl(120, 100%, 70%), hsl(150, 100%, 70%), hsl(180, 100%, 70%), hsl(210, 100%, 70%), hsl(240, 100%, 70%), hsl(270, 100%, 70%), hsl(300, 100%, 70%), hsl(330, 100%, 70%), hsl(360, 100%, 70%))
    background: linear-gradient(in hsl longer hue 40deg, #f66 0 0)
    background-clip: text
    color: #0000
    &-icon
      display: none
      width: 100px
      height: auto
      transition: 300ms ease-in
      &.show
        display: block
    &__title
      object-fit: contain
      width: 100%
  &__rrss
    &__container
      display: none
      &.show
        padding-right: 1em
        display: flex
        align-items: center
        margin: 0
        gap: 1rem        
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
  padding-block-end: 10%
  display: grid
  align-content: flex-end
  container-type: size
  &__text
    font-size: clamp(1rem, 2.5vw, 2rem)
    font-weight: 100
    color: white
    text-align: center

// more
.title
  width: 20%
  transition: 200ms linear
  &-big
    width: 100%
    transition: 300ms linear
    @media only screen and (min-width: $tablet)
      width: inherit
    
span#reference
  width: 10px
  height: 10px
  background: transparent

@supports(animation-timeline: view())
  @keyframes fade-out
    to
      background-size: 150%
      opacity: 0

  @keyframes zoom-out
    to
      width: 20%
      padding-left: .1em

  @keyframes appear
    to
      opacity: 1

  @keyframes max-out
    to
      max-width: 100%

</style>
