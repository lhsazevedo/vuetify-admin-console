<template>
  <div>
    <v-container fluid class="px-6 px-sm-12">
      <v-row>
        <v-col lg="3">
          <v-card style="height: 100%;" outlined>
            <v-card-title class="primary--text pb-0 d-flex">
              <v-icon color="primary" size="28" left>mdi-account</v-icon>
              <div class="flex-grow-1 d-flex">
                <div class="flex-grow-1">Users</div>
                <div>
                  <v-icon color="grey">mdi-chevron-right</v-icon>
                </div>
              </div>
            </v-card-title>
            <v-list nav dense>
              <v-list-item to="/404">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Add an user or sign-in email</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/404">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Delete a user</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/404">
                  <v-list-item-content>
                    <v-list-item-title class="primary--text">Update a user's name or email</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <div class="ml-2"><span class="body-2">With an email update, the previous email automatically becomes an alternate email address.</span></div>
              <v-list-item to="/404">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Create an alternate email address (email alias)</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card style="height: 100%;" outlined>
            <v-card-title class="primary--text pb-0 d-flex">
              <div class="mr-2 primary--text" style="">
                <svg class="d-block" width="28px" height="28px" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z">
                    </path>
                </svg>
              </div>
              <div class="flex-grow-1 d-flex">
                <div class="flex-grow-1">Users</div>
                <div>
                  <v-icon color="grey">mdi-chevron-right</v-icon>
                </div>
              </div>
            </v-card-title>
            <v-list nav dense>
              <v-list-item to="/404">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Update user profile editing options </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <div class="ml-2"><span class="body-2">Allow users to update their own profile, including the profile photo.</span></div>
            </v-list>
          </v-card>
        </v-col>

        <v-col lg="3">
          <v-card style="height: 100%;" outlined>
            <v-card-title class="primary--text pb-0 d-flex">
              <v-icon color="primary" size="28" left>mdi-domain</v-icon>
              <div class="flex-grow-1 d-flex">
                <div class="flex-grow-1">Domains</div>
                <div>
                  <v-icon color="grey">mdi-chevron-right</v-icon>
                </div>
              </div>
            </v-card-title>
            <v-list nav dense>
              <v-list-item to="/404" disabled>
                <v-list-item-content>
                  <v-list-item-title>Change your primary domain</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <div class="ml-2"><span class="body-2 text--disabled">This option isn't available for your organization.</span></div>
              <v-list-item to="/404">
                <v-list-item-content>
                  <v-list-item-title class="primary--text">Add an email-only domain (domain alias)</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <div class="ml-2"><span class="body-2">A good option if you need a domain for additional email addresses.</span></div>
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
        icon: 'https://img.icons8.com/material/96/4184f3/view-quilt.png',
        title: 'Dashboard',
        description: 'See relevant insights about your organization',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/material-sharp/96/4184f3/user.png',
        title: 'Users',
        description: 'Add or manage users',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/conference-foreground-selected.png',
        title: 'Groups',
        description: 'Create groups and mailing lists',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/tree-structure.png',
        title: 'Organizational units',
        description: 'Add, remove, rename, move or search for an organizational unit',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/company.png',
        title: 'Buildings and resources',
        description: 'Manage and monitor buildings, rooms and resources',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/multiple-devices.png',
        title: 'Devices',
        description: 'Secure corporate data on devices',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/circled-menu.png',
        title: 'Apps',
        description: 'Manage apps and their settings',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/shield.png',
        title: 'Security',
        description: 'Configure security settings',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/area-chart.png',
        title: 'Reports',
        description: 'Monitor usage across your organization',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/bank-card-back-side.png',
        title: 'Billing',
        description: 'Manage subscriptions and billing',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/settings.png',
        title: 'Account settings',
        description: 'Update information about your company',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/lock-landscape.png',
        title: 'Admin roles',
        description: 'Manage administrative roles',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/domain-name.png',
        title: 'Domains',
        description: 'Manage your domains',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/drawer.png',
        title: 'Data migration',
        description: 'Manage migration',
        action: '/404'
      },
      {
        icon: 'https://img.icons8.com/color/96/000000/help--v1.png',
        title: 'Support',
        description: 'Talk to our support team',
        action: '/404'
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
