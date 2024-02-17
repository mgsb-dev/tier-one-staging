<template>
  <div class="ViewPanel" :class="{ active: isOpen }">
    <div class="ViewPanel__spacer"></div>
    <div class="ViewPanel__container">
      <slot></slot>
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
