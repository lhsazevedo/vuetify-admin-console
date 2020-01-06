<template>
  <v-container>
    <v-row class="home-panels-grid">
      <v-col
        v-for="card in cards"
        :key="card.title"
        class=""
        :class="{ 'home-panels-grid__col--custom-col': $vuetify.breakpoint.lgAndUp }"
        cols="2"
      >
        <vadmin-panel-card
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import VadminPanelCard from '@/components/VadminPanelCard/VadminPanelCard.vue'

export default {
  name: 'home',
  components: {
    VadminPanelCard
  },
  data: () => ({
    cards: [
      {
        icon: '//www.gstatic.com/apps/cpanel/resources/img/dashboard-googblue-48.png',
        title: 'Painel de controle',
        description: 'Ver insights relevantes sobre sua organização'
      }, {
        icon: '//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg',
        title: 'Usuários',
        description: 'Adicionar ou gerenciar usuários'
      }
    ]
  })
}
</script>

<style lang="scss">
.home-panels-grid__col--custom-col {
  width: 12%;
}
</style>
