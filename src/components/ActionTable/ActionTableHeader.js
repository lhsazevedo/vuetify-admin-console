import VBtn from 'vuetify/lib/components/VBtn'
import VMenu from 'vuetify/lib/components/VMenu'
import VIcon from 'vuetify/lib/components/VIcon'
import ActionTableHeading from './ActionTableHeading'

import Vue from 'vue'

export default Vue.component('action-table-header', {
  props: {
    actions: Array
  },

  methods: {
    genActions () {
      return this.actions.slice(0, 3).map(action => {
        return this.$createElement(
          VBtn, {
            class: {
              'action-table__button': true,
              'font-weight-regular': true,
              'text-none': true
            },
            attrs: {
              text: true,
              color: 'primary'
            }
          }, action.text
        )
      })
    },

    genMoreActions () {
      const MenuElement = this.$createElement(VMenu, {
        scopedSlots: {
          activator: ({ on }) => {
            return this.$createElement(VBtn, {
              class: {
                'action-table__button': true,
                'font-weight-regular': true,
                'text-none': true
              },
              attrs: {
                text: true,
                color: 'primary'
              },
              on: on
            }, [
              'Mais',
              this.$createElement(VIcon, {
                attrs: {
                  right: true
                }
              }, 'mdi-menu-down')
            ])
          },
          default: () => this.$createElement('div', 'ola')
        }
      })

      return [
        MenuElement
      ]

      // return this.actions.slice(3).map(action => {
      //   return this.$createElement(VSelect)
      // })
    },

    genActionGroup () {
      const data = {
        class: {
          'action-table__actions': true,
          'd-flex': true
        }
      }
      const actions = this.genActions()
      const children = [
        actions
      ]

      if (this.actions.length > 3) {
        actions.push(this.genMoreActions())
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
        'action-table__header': true,
        'grey': true,
        'lighten-4': true
      }
    }, [
      this.genActionHeading()
    ])
  }
})
