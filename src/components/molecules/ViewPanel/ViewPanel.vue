<template>
  <div id="viewPanel" class="ViewPanel" :class="{ active: isOpen }">
    <div class="ViewPanel__spacer"></div>
    <div class="ViewPanel__wrapper">
      <div class="screw"></div>
      <div class="screw screw-1"></div>
      <div class="screw screw-2"></div>
      <div class="screw screw-3"></div>
      <div class="ViewPanel__container">
        <div class="ViewPanel__container-content">
          <slot></slot>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: { isOpen: Boolean },
  setup() {}
})
</script>
<style lang="sass">
@import './ViewPanel.sass'
</style>
