<template>
  <v-container fluid class="px-6 px-sm-12">
    <div class="mx-auto" style="max-width: 1600px;">
      <v-card outlined>
        <action-table
          title="Users"
          subtitle="Showing all users"
          :actions="actions"
          :groupActions="groupActions"
          :items="users"
          :headers="headers"
          @input="onTableInput"
          show-select
        >
          <template v-slot:item.name="{ item }">
            <v-avatar class="mr-3" size="36">
              <img
                :src="'https://i.pravatar.cc/150?u=' + item.email"
                :alt="item.name"
              >
            </v-avatar>
            <router-link v-if="!someSelected" :to="{name: 'user', params: {id: item.id}}" v-text="item.name" />
            <span v-else v-text="item.name" />
          </template>
        </action-table>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import ActionTable from '@/components/ActionTable/ActionTable.js'
import fakeUsers from './fakeUsers.json'

export default {
  components: {
    ActionTable
  },

  data: () => ({
    selection: [],

    actions: [
      {
        text: 'Add user'
      }, {
        text: 'Bulk upload users'
      }, {
        text: 'Download users'
      }, {
        text: 'Manage custom attributes'
      }
    ],

    groupActions: [
      {
        text: 'Send email to selected users'
      }, {
        text: 'Add selected users to groups'
      }, {
        text: 'Change organizational unit'
      }, {
        text: 'Delete selected users'
      }, {
        text: 'Assign licences'
      }, {
        text: 'Remove licenses'
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

    users: fakeUsers
  }),

  computed: {
    someSelected () {
      return this.selection.length > 0
    }
  },

  methods: {
    onTableInput (selection) {
      this.selection = selection
    }
  }
}
</script>
