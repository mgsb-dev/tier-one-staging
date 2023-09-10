<template>
  <div class="GeneralTraining">
    <div class="GeneralTraining__card__list">
      <div class="GeneralTraining__card__wrapper" @click="goTo('national')">
        <div class="GeneralTraining__card__content">
          <div class="GeneralTraining__card__blurbContainer">
            <span class="GeneralTraining__card__title">Tierone Club</span>
            <span class="GeneralTraining__acr"
              >ATA CGD CSAPGM LDD WZF ATA CGD CSAPGM LDD WZFATA CGD CSAPGM LDD WZF</span
            >
          </div>
          <span class="GeneralTraining__textOuter">Entrenamiento</span>
          <div class="GeneralTraining__modal">
            <span class="GeneralTraining__textInner">Nacional</span>
            <div class="GeneralTraining__inner"></div>
            <div class="GeneralTraining__screenGlare"></div>
          </div>
          <span class="GeneralTraining__extra"></span>
        </div>
      </div>

      <div class="GeneralTraining__card__wrapper" @click="goTo('international')">
        <div class="GeneralTraining__card__content">
          <div class="GeneralTraining__card__blurbContainer">
            <span class="GeneralTraining__card__title">Tierone Club</span>
            <span class="GeneralTraining__acr"
              >ATA CGD CSAPGM LDD WZF ATA CGD CSAPGM LDD WZFATA CGD CSAPGM LDD WZF</span
            >
          </div>
          <span class="GeneralTraining__textOuter">Entrenamiento</span>
          <div class="GeneralTraining__modal">
            <span class="GeneralTraining__textInner">Internacional</span>
            <div class="GeneralTraining__inner"></div>
            <div class="GeneralTraining__screenGlare"></div>
          </div>
          <span class="GeneralTraining__extra"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router/index.js'

export default defineComponent({
  setup() {
    const goTo = (id: string) => {
      router.push({ name: id })
    }
    return { goTo }
  }
})
</script>

<style lang="sass">
@import './GeneralTrainingView.sass'
</style>
