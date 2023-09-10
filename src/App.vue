<template>
  <div class="App__background"></div>
  <NavBar v-if="!isMobile" />
  <RouterView v-slot="{ Component }">
    <transition
      name="custom-classes-transition"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </RouterView>
  <BurgerNavBar v-if="isMobile" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import NavBar from './components/molecules/NavBar/NavBar.vue'
import BurgerNavBar from './components/molecules/BurgerNavBar/BurgerNavBar.vue'

export default defineComponent({
  components: { NavBar, BurgerNavBar },
  setup() {
    const isMobile = computed(() => {
      return window.innerWidth <= 1280
    })

    return { isMobile }
  }
})
</script>

<style lang="sass" scoped>
.App__background
  position: absolute
  top: 0
  left: 0
  background: url('@/assets/background.jpg') no-repeat center
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  background-position: bottom
  filter: saturate(0)
  height: 100vh
  width: 100vw
.fade-enter-to, .fade-leave
  opacity: 1
.fade-enter-active, .fade-leave-active
  transition: opacity 0.2s ease-out
.fade-enter, .fade-leave-to
  opacity: 0
</style>
