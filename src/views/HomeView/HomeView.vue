<template>
  <main class="Home__wrapper">
    <section class="Home__section">
      <video autoplay muted loop src="training.mp4"></video>
      <h1 class="Home__title" data-text="Tierone">
        Tierone
        <span class="Home__title__glitch">Tierone</span>
        <span class="Home__title__glitch">Tierone</span>
      </h1>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import checkIsDesktop from '@/helpers/ComponentHelper'

export default defineComponent({
  setup() {
    const isDesktop = ref(false)
    const isChromeBrowser = ref(false)

    onMounted(() => {
      isDesktop.value = checkIsDesktop()

      const isChrome = navigator.userAgent.includes('Chrome')
      if (isChrome) {
        isChromeBrowser.value = isChrome
      }
    })

    return { isDesktop, isChromeBrowser }
  }
})
</script>

<style lang="sass">
@import './HomeView.sass'
</style>
