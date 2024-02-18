<template>
  <div class="Calendar">
    <h2 class="Calendar__title">Calendar</h2>
    <Calendar
      locale="es"
      :attributes="attributes"
      is-dark
      is-expanded
      :columns="columns"
      :step="1"
      @dayclick="clicked"
    >
      <template #day-popover>
        <div v-if="showDate" class="Calendar__popover-container">
          <popover-row>
            Add this event to your calendar
            <add-to-calendar-button
              name="Calendar"
              :startDate="showDate"
              startTime="10:15"
              endTime="23:30"
              timeZone="America/Los_Angeles"
              location="World Wide Web"
              hideBackground
              hideCheckmark
              description="Add to calendar"
              options="'Apple','Google','iCal','Outlook.com','Microsoft 365','Microsoft Teams','Yahoo'"
              lightMode="bodyScheme"
            >
            </add-to-calendar-button>
          </popover-row>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Calendar } from 'v-calendar'
import { useScreens } from 'vue-screen-utils'

export default defineComponent({
  components: { Calendar },
  setup() {
    const importantDate = 'Important date'
    const availableDate = 'Available date'
    const showDate = ref()

    const { mapCurrent } = useScreens({ xs: '0px', sm: '480', md: '720px' })
    const columns = mapCurrent({ md: 2 }, 1)

    const dateInformation = [
      {
        key: 'data',
        highlight: 'gray',
        dates: new Date(),
        description: 'Today'
      },
      {
        description: importantDate,
        dates: 'March 22, 2023',
        dot: 'red'
      },
      {
        description: availableDate,
        dates: 'March 27, 2023',
        dot: 'green'
      }
    ]

    const attributes = dateInformation.map((el) => ({
      key: el.dates,
      dates: new Date(el.dates),
      dot: el.dot,
      highlight: el.highlight,
      popover: {
        label: el.description,
        isInteractive: true,
        visibility: 'focus'
      }
    }))

    const clicked = (date: { id: Date }) => {
      showDate.value = date.id
    }

    return { attributes, showDate, columns, clicked }
  }
})
</script>

<style lang="sass">
@import './CalendarView.sass'
</style>
