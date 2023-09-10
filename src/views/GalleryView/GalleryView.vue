<template>
  <div class="Gallery">
    <ViewPanel>
      <h2 class="Gallery__title">Galería</h2>
      <BuildingComponent />
    </ViewPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPanel from '@/components/molecules/ViewPanel/ViewPanel.vue'
import BuildingComponent from '@/components/organisms/Building/BuildingComponent.vue'

export default defineComponent({
  components: { ViewPanel, BuildingComponent },
  setup() {
    return
  }
})
</script>

<style lang="sass">
@import './GalleryView.sass'
</style>
