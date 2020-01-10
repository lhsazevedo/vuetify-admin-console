<template>
  <v-data-table

  >
    <template v-slot:top>
      <div class="p-data-table-header grey lighten-4 py-2 px-5 d-flex align-center">
        <div class="dash-table__title-wrapper">
          <div class="subtitle-1 font-weight-medium text--secondary mr-6">
            <span class="subtitle-1 font-weight-medium text--primary">{{ title }}</span> | {{ subtitle }}
          </div>
        </div>
        <div class="dash-table__actions d-flex" style="flex: 1 1 auto;">
          <v-btn
            v-for="action in topActions"
            :key="action.title"
            class="dash-table__button font-weight-regular text-none"
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
  .dash-table__button {
    letter-spacing: 0;
  }

  .dash-table__title-wrapper {
    display: flex;
    flex: 0 0 auto;
    max-width: 40%;
  }

  .dash-table__actions {
    min-width: 0;
    flex: 1 1 auto;

    .v-btn {
      padding: 0 8px !important;
      margin: 0 4px;
      min-width: 40px;
    }

    .v-btn, .v-btn__content {
      flex-shrink: 1;
    }

    .v-btn__content {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: block;
      min-width: 0 !important;
    }
  }
</style>
