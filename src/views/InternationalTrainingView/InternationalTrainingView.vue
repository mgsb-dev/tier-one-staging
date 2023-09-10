<template>
  <div class="InternationalTraining">
    <ViewPanel>
      <h2>Formación Internacional</h2>
      <div class="InternationalTraining__content">
        <AccordionList>
          <AccordionItem>
            <template #summary>Formación táctica</template>
            <template #icon>+</template>
            <div>
              <p>
                Estamos cerrando acuerdos de colaboración con diversos centros de formación en el
                extranjero, con el fin de poder ofrecer cursos de interés para nuestros socios.
              </p>
              <ul class="InternationalTraining__list">
                <li>Curso fundamentos de arma corta. Nivel I.</li>
                <li>Curso de arma corta. Nivel II.</li>
                <li>Curso arma corta. Nivel III.</li>
                <li>Curso de arma corta con baja luminosidad.</li>
                <li>Curso fundamentos fusil. Nivel 1.</li>
                <li>Curso fusil. Nivel 2.</li>
                <li>Cursos Privados de interés para los socios, (vehículos, CQB…).</li>
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem>
            <template #summary>Formación deportiva</template>
            <template #icon>+</template>
            <p>
              Para los socios que deseen mejorar su rendimiento deportivo y entrar en alta
              competición cerraremos acuerdos con centros de alto rendimiento en el extranjero.
            </p>
          </AccordionItem>
        </AccordionList>
      </div>
    </ViewPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPanel from '@/components/molecules/ViewPanel/ViewPanel.vue'
import { AccordionList, AccordionItem } from 'vue3-rich-accordion'

export default defineComponent({
  components: { ViewPanel, AccordionList, AccordionItem },
  setup() {
    return
  }
})
</script>

<style lang="sass">
@import './InternationalTrainingView.sass'
</style>
