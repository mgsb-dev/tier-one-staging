<template>
  <div class="NationalTraining">
    <ViewPanel>
      <h2>Formación Nacional</h2>
      <div class="NationalTraining__content"> 
        <AccordionList>
          <AccordionItem>
            <template #summary>LICENCIA F</template>
            <template #icon>+</template>

            <p class="NationalTraining__text">
              <span class="NationalTraining__title"
                >¿No tienes Licencia y quieres pertenecer al Club?</span
              >

              <br />
              <br />
              Desde Tier One Club queremos contar con todos los profesionales armados, FCS y FAS de
              todos los empleos.
              <br />
              <br />

              Por ello queremos ofrecer a la Tropa y Marinería que no disponga de Licencia de armas la
              opción de obtener la Licencia F con nosotros, para poder participar en las actividades y
              entrenamientos del Club.
              <br />
              <br />

              Para ello hemos preparado un curso de obtención de Licencia F para los socios del Club.
              <br />
              <br />

              El curso constará de una fase teórica, una fase práctica y un examen para la obtención
              de la Licencia F.
              <br />
              <br />

              Tendrá una duración de ______ Días en jornada presencial intensiva, donde te
              prepararemos para superar el examen.
              <br />
              <br />

              Una vez obtenida la Licencia, tendrás derecho a la utilización de las instalaciones
              además de participar en todas las actividades del Club.
            </p>
          </AccordionItem>
          <AccordionItem>
            <template #summary>HABILITACIÓN IPSC </template>
            <template #icon>+</template>
            <p class="NationalTraining__text">
              <span class="NationalTraining__title"
                >¿No tienes Licencia y quieres pertenecer al Club?</span
              >
              <br /><br />
              Además del resto de modalidades de tiro deportivo que se pueden practicar en nuestro
              país, queremos ofrecer la posibilidad a nuestros socios de participar en competiciones
              de Recorridos de Tiro.

              <br /><br />
              Para ello, hemos desarrollado un curso intensivo de habilitación de IPSC para aquellos
              socios que no dispongan de dicha habilitación y quieran practicar esta modalidad
              deportiva.

              <br /><br />
              El curso consta de una fase teórica, una fase práctica y un examen para poder obtener
              dicha habilitación.

              <br /><br />
              En dicho curso se habilitará al tirador para recorridos de tiro con arma corta,
              mini-rifle y PCC (carabina 9mm).
            </p>
          </AccordionItem>
          <AccordionItem>
            <template #summary>ENTRENAMIENTOS CONTROLADOS </template>
            <template #icon>+</template>
            <p class="NationalTraining__text">
              Estos entrenamientos controlados irán enfocados a todas las modalidades deportivas en
              las que puede participar el Club de tiro.

              <br /><br />
              <ul class="NationalTraining__list">
                <li>Pistola Standard.</li>
                <li>Fuego central.</li>
                <li>Pistola 25m.</li>
                <li>Carabina tendido.</li>
                <li>Carabina BR 50.</li>
                <li>F-Class Rimfire 50m.</li>
                <li>Carabina 9mm.</li>
                <li>Fusil 100m.</li>
                <li>Tiro dinámico Carabina.</li>
                <li>Recorridos de Tiro*.</li>
              </ul>

              <br /><br />

              *Para los entrenamientos de RRTT, en base a la normativa vigente, ya que no se puede
              salir de los puestos de tiro en las galerías, realizaremos los trámites para la
              obtención de los permisos necesarios y así poder realizar los entrenamientos controlados
              de esta modalidad. Necesitando un número mínimo de socios que asistan al entrenamiento.
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
@import './NationalTrainingView.sass'
</style>
