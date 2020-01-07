<template>
  <v-data-table

  >
    <template v-slot:top>
      <div class="p-data-table-header grey lighten-4 py-2 px-5 d-flex align-center">
        <div class="d-flex" style="flex: 0 0 auto;">
          <div class="subtitle-1 font-weight-medium text--secondary mr-6">
            <span class="subtitle-1 font-weight-medium text--primary">{{ title }}</span> | {{ subtitle }}
          </div>
        </div>
        <div class="d-flex" style="flex: 1 1 auto;">
          <v-btn
            v-for="action in topActions"
            :key="action.title"
            class="dash-tabe__button font-weight-regular text-none"
            text
            color="primary"
            @click="dialog = true"
          >
            {{ action.text }}
          </v-btn>
        </div>
      </div>
      <v-divider />
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    topActions: Array
  }
}
</script>

<style lang="scss">
  .dash-tabe__button {
    letter-spacing: 0;
  }
</style>
