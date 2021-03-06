import ActionTableButton from './ActionTableButton'
import VMenu from 'vuetify/lib/components/VMenu'
import VIcon from 'vuetify/lib/components/VIcon'
import { VList, VListItem, VListItemTitle } from 'vuetify/lib/components/VList'
import ActionTableHeading from './ActionTableHeading'

import Vue from 'vue'

export default Vue.component('action-table-header', {
  props: {
    actions: Array
  },

  methods: {
    genInlineActions () {
      const children = this.actions.slice(0, 3).map(action => {
        return this.$createElement(
          ActionTableButton, action.text
        )
      })

      return this.$createElement('div', {
        class: { 'action-table__inline-actions': true }
      }, children)
    },

    genMoreActions () {
      const MenuElement = this.$createElement(VMenu, {
        attrs: {
          'offset-y': true,
          'left': true
        },

        scopedSlots: {
          activator: ({ on }) => {
            const data = {
              on: on
            }

            const icon = this.$createElement(VIcon, {
              attrs: {
                right: true,
                size: 'x-large'
              }
            }, 'mdi-menu-down')

            const children = [
              'More',
              icon
            ]

            return this.$createElement(ActionTableButton, data, children)
          },

          default: () => this.genMoreActionsList()
        }
      })

      return [ MenuElement ]
    },

    genMoreActionsList () {
      const listItemsNodes = this.actions.slice(3).map(action => {
        const titleNode = this.$createElement(VListItemTitle, action.text)
        return this.$createElement(VListItem, [titleNode])
      })

      return this.$createElement(VList, listItemsNodes)
    },

    genActionGroup () {
      const data = {
        class: {
          'action-table__actions': true
        }
      }
      const actions = this.genInlineActions()
      const children = [ actions ]

      if (this.actions.length > 3) {
        children.push(this.genMoreActions())
      }

      return this.$createElement('div', data, children)
    },

    genActionHeading () {
      const heading = this.$createElement(ActionTableHeading, {
        attrs: this.$attrs
      })

      const actionGroup = this.genActionGroup()

      return [ heading, actionGroup ]
    }
  },

  render (h) {
    return h('div', {
      class: {
        'action-table__header': true
      }
    }, [
      this.genActionHeading()
    ])
  }
})
