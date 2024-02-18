<template>
  <nav class="NavBar" aria-expanded="false">
    <ul class="NavBar__content">
      <li
        id="training"
        class="NavBar__list-title"
        :class="{active: lastActiveTab === Sections.training}"
        @click.prevent="clickHandler"
      >
        <RouterLink to="/training" class="NavBar__list-title--dark">Formación</RouterLink>
      </li>
      <li
        id="survival"
        class="NavBar__list-title"
        @click.prevent="clickHandler"
        @mouseenter.prevent="hideTabs"
      >
        <RouterLink to="/survival" class="NavBar__list-title--dark">Supervivencia</RouterLink>
      </li>
      <!-- <li
        id="shop"
        class="NavBar__list-title"
        @click.prevent="clickHandler"
        @mouseenter.prevent="hideTabs"
      >
        <RouterLink to="/shop" class="NavBar__list-title--dark">Tienda</RouterLink>
      </li> -->
      <li
        id="clients"
        class="NavBar__list-title"
        @click.prevent="clickHandler"
        @mouseenter.prevent="hideTabs"
      >
        <RouterLink to="/clients" class="NavBar__list-title--dark">Soy socio</RouterLink>
      </li>
      <li
        id="about"
        class="NavBar__list-title"
        @click.prevent="clickHandler"
        @mouseenter.prevent="hideTabs"
      >
        <RouterLink to="/about-us" class="NavBar__list-title--dark">Nosotros</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, nextTick } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  setup() {
    enum Sections {
      training = "training",
      survival = "survival",
      shop = "shop",
      clients = "clients",
      aboutUs = "about",
    }
    
    const trainings = [
      { name: 'Nacional', id: '/training/national' },
      { name: 'Internacional', id: '/training/international' }
    ]

    const isTrainingsShow = ref(false)
    const isProgramsShow = ref(false)
    const lastActiveTab = ref<string | null>(Sections.training)


    onMounted(async() => {
      const route = useRoute();
      const router = useRouter();
      await router.isReady();
      nextTick(() => {
        if (route.path !== "/training") {
          lastActiveTab.value = route.path.replace('/', '');
          const activeEl = document.getElementById(lastActiveTab.value);
          if (activeEl) {
            activeEl.classList.add('active');
          }
        }
      })
    })

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

    return {
      trainings,
      isTrainingsShow,
      isProgramsShow,
      lastActiveTab,
      Sections,

      showTraining,
      hideTraining,
      clickHandler,
      hideTabs
    }
  }
})
</script>

<style lang="sass">
@import './NavBar.sass'
</style>
