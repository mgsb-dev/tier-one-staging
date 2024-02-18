<template>
  <div class="ClientsView">
    <ViewPanel>
      <h2>Clients Login</h2>
      <div class="ClientsView__content">
        <BuildingComponent />
      </div>
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
@import './ClientsView.sass'
</style>
