<template>
  <v-container fluid class="px-6 px-sm-12">
    <div class="mx-auto" style="max-width: 1600px;">
      <v-card outlined>
        <action-table
          title="Usuários"
          subtitle="Mostrando todos os usuários"
          :topActions="topActions"
          :items="users"
          :headers="headers"
          show-select
        >
          <template v-slot:item.name="{ item }">
            <v-avatar class="mr-3" size="36">
              <img
                :src="'https://i.pravatar.cc/150?u=' + item.email"
                :alt="item.name"
              >
            </v-avatar>
            <router-link :to="{name: 'user', params: {id: item.id}}" v-text="item.name" />
          </template>
        </action-table>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import ActionTable from '@/components/ActionTable/ActionTable.js'

export default {
  components: {
    ActionTable
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
    ],

    headers: [
      {
        text: 'Nome',
        value: 'name'
      }, {
        text: 'E-mail',
        value: 'email'
      }
    ],

    users: [
      {
        id: 1,
        name: 'Jonh Doe',
        email: 'john.doe@example.com'
      }, {
        id: 2,
        name: 'Mary Doe',
        email: 'mary.doe@example.com'
      }
    ]
  })
}
</script>
