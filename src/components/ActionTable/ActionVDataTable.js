import VDataTable from 'vuetify/lib/components/VDataTable/VDataTable'

export default VDataTable.extend({
  name: 'testando',

  computed: {
    computedHeaders () {
      const headers = VDataTable.options.computed.computedHeaders.call(this)
      headers.push({
        text: '',
        value: 'actions',
        class: ['action-table-actions-header'],
        sortable: false,
        width: '1px'
      })

      return headers
    }
  },

  methods: {
    genDefaultSimpleRow (item) {
      const tr = VDataTable.options.methods.genDefaultSimpleRow.call(this, item)
      tr.children.pop()
      tr.children.push(this.$createElement('td', {
        class: { 'action-table-actions-row': true }
      }, 'actions here'))
      return tr
    }
  }
})
