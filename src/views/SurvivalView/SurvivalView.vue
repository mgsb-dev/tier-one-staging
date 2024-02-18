<template>
  <div class="SurvivalView">
    <ViewPanel>
      <h2>Survival</h2>
      <BuildingComponent />
    </ViewPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPanel from '@/components/molecules/ViewPanel/ViewPanel.vue'
import BuildingComponent from '@/components/organisms/Building/BuildingComponent.vue'


export default defineComponent({
  components: { ViewPanel, BuildingComponent},
  setup() {
    return
  }
})
</script>

<style lang="sass">
@import './SurvivalView.sass'
</style>
