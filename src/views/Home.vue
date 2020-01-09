<template>
  <v-container fluid class="px-6 px-sm-12">
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
        title: 'Painel de controle',
        description: 'Ver insights relevantes sobre sua organização',
        action: '/'
      }, {
        icon: '//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg',
        title: 'Usuários',
        description: 'Adicionar ou gerenciar usuários',
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
