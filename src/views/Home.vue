<template>
  <div>
    <v-container fluid class="px-6 px-sm-12">
      <v-row>
        <v-col lg="3">
          <v-card>
            <v-card-title class="primary--text pb-0">
              <v-icon color="primary" left>mdi-account</v-icon> Users
            </v-card-title>
            <v-list nav dense>
              <v-list-item to="">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Add an user or sign-in email</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Delete a user</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="">
                  <v-list-item-content>
                    <v-list-item-title class="primary--text">Update a user's name or email</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <div class="ml-2"><span class="body-2">With an email update, the previous email automatically becomes an alternate email address.</span></div>
              <v-list-item to="">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Create an alternate email address (email alias)</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="px-6 px-sm-12 white">
      <v-row class="home-panels-grid">
        <v-col
          v-for="card in cards"
          :key="card.title"
          class="d-flex flex-column align-center"
          :class="{ 'home-panels-grid__col--custom-col': $vuetify.breakpoint.lgAndUp }"
          cols="6"
          sm="4"
          md="3"
        >
          <panel-card
            :icon="card.icon"
            :title="card.title"
            :description="card.description"
            :to="card.action"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PanelCard from '@/components/PanelCard/PanelCard.js'

export default {
  name: 'home',
  components: {
    PanelCard
  },
  data: () => ({
    cards: [
      {
        icon: '//www.gstatic.com/apps/cpanel/resources/img/dashboard-googblue-48.png',
        title: 'Dashboard',
        description: 'See relevant insights about your organization',
        action: '/'
      }, {
        icon: '//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg',
        title: 'Users',
        description: 'Add or manage users',
        action: { name: 'users' }
      }
    ]
  })
}
</script>

<style lang="scss">
.home-panels-grid__col--custom-col {
  flex: 0 0 12%;
}
</style>
