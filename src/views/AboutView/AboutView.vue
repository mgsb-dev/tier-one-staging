<template>
  <div class="About">
    <ViewPanel>
      <div class="About__wrapper">
        <img :src="Logo" class="About__image" />
        <div class="About__container--columns">
          <div class="About__content About__column">
            <h2 class="About__title">¿Quiénes somos?</h2>
            <p>
              <span class="About__name">TIER ONE CLUB</span> somos un pequeño grupo de profesionales
              unidos en un proyecto de formación.

              <br /><br />
              La gran mayoría de profesionales conoce las unidades Tier One, cuyo lema<br /><i
                >"Cuando ser los mejores, no es suficiente"</i
              >, <br />nos motivó a iniciar este proyecto.

              <br /><br />
              Un proyecto enfocado a esos compañeros que buscan entrenar con los medios disponibles
              a su alcance, para ser cada día mejor en su sector.

              <br /><br />
              Nuestro objetivo es facilitar a los profesionales armados de nuestro país, una forma
              de entrenar las habilidades en el tiro, mediante ejercicios y drills.

              <br /><br />
              Nos basamos en la siguiente premisa: “Haz lo que puedas, con lo que tengas, donde
              estés”.

              <br /><br />
              Para ello contamos con diversos acuerdos con instalaciones autorizadas para el
              desarrollo del tiro deportivo, en las cuales realizaremos las actividades del club.
            </p>
          </div>
          <div class="About__column">
            <div class="About__content">
              <h2 class="About__title">¿Cómo lo haremos?</h2>
              <p>
                Mediante entrenamientos controlados enfocados a los recorridos de tiro. Teniendo la
                opción de competir mensualmente en RRTT, organizar tiradas privadas del Club…

                <br /><br />
                Además contaremos con actividades formativas enfocadas a los profesionales, como:
                seminarios de tiro, cursos de armero, seminarios de TCCC y TECC, conducción…

                <br /><br />
                Poco a poco esperamos ir creciendo de la mano de nuestros socios y ampliando las
                actividades del Club.
              </p>
            </div>
            <div class="About__content">
              <h2 class="About__title">Para más información contáctanos:</h2>
              <div class="About__contact-content">
                <div class="About__contact-item">
                  <MailIcon height="1.5rem" width="1.5rem" color="#B59E86" />
                  <a class="About__contact-item-text" href="mailto: club@tierone.es"
                    >club@tierone.es</a
                  >
                </div>
                <div class="About__contact-item">
                  <InstagramIcon
                    height="1.5rem"
                    width="1.5rem"
                    color="#B59E86"
                    stroke-width="2px"
                    @click="openInstagram"
                  />
                  <span class="About__contact-item-text" @click="openInstagram"
                    >@tier.one.club</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPanel from '@/components/molecules/ViewPanel/ViewPanel.vue'
import { MailIcon, InstagramIcon } from '@zhuowenli/vue-feather-icons'
import Logo from '@/assets/full_logo.png'

export default defineComponent({
  components: { ViewPanel, MailIcon, InstagramIcon },
  setup() {
    const openInstagram = () => {
      const openWindow = window.open()
      if (openWindow) {
        openWindow.opener = null
        openWindow.location = 'https://www.instagram.com/tier.one.club/'
      }
    }

    return { Logo, openInstagram }
  }
})
</script>

<style lang="sass">
@import './AboutView.sass'
</style>
