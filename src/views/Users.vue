<template>
  <v-container fluid class="px-6 px-sm-12">
    <div class="mx-auto" style="max-width: 1600px;">
      <v-card outlined>
        <dash-table
          title="Usuários"
          subtitle="Mostrando todos os usuários"
          :topActions="topActions"
        />
      </v-card>
    </div>
  </v-container>
</template>

<script>
import DashTable from '@/components/DashTable/DashTable'

export default {
  components: {
    DashTable
  },
  data: () => ({
    topActions: [
      {
        text: 'Adicionar usuário'
      }, {
        text: 'Fazer upload em massa de usuários'
      }, {
        text: 'Fazer download de usuários'
      }
    ]
  })
}
</script>
