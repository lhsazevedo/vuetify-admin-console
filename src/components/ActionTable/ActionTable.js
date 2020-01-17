// Style
import './ActionTable.scss'

// Components
import { VDataTable } from 'vuetify/lib/components/VDataTable'
import { VDivider } from 'vuetify/lib/components/VDivider'
import { VSimpleCheckbox } from 'vuetify/lib/components/VCheckbox'
import ActionTableHeader from './ActionTableHeader'

import Vue from 'vue'

import ripple from 'vuetify/lib/directives/ripple'

export default Vue.component('action-table', {
  // props: {
  //   actions: Array,
  //   title: String,
  //   subtitle: String,
  //   items: Array
  // },

  data () {
    return {
      selection: []
    }
  },

  directives: {
    ripple
  },

  computed: {
    classes () {
      return {
        'action-table--has-selection': this.hasSelection
      }
    },

    hasSelection () {
      return this.selection.length > 0
    }
  },

  methods: {
    genActionHeader () {
      const data = {
        attrs: { ...this.$attrs }
      }
      return this.$createElement(ActionTableHeader, data)
    },

    // genDataTableContent () {
    // },

    genSelectAll (data) {
      return this.$createElement(VSimpleCheckbox, {
        ...data,
        props: {
          ...data.props,
          color: 'primary'
        }
      })
    },

    genItemSelect (data) {
      return this.$createElement(VSimpleCheckbox, {
        staticClass: 'v-data-table__checkbox',
        props: {
          value: data.isSelected,
          color: 'primary'
        },
        on: {
          input: (val) => data.select(val)
        }
      })
    },

    genTable () {
      const data = {
        attrs: { ...this.$attrs },

        on: {
          input: (selection) => {
            this.selection = selection
          }
        },

        scopedSlots: {
          'header.data-table-select': (data) => {
            return [
              this.genSelectAll(data)
            ]
          },
          'item.data-table-select': (props) => {
            return [
              this.genItemSelect(props)
            ]
          },
          ...this.$scopedSlots
        }
      }

      return this.$createElement(
        VDataTable,
        data
      )
    }
  },

  render () {
    const data = {
      class: {
        ...this.classes,
        'action-table': true
      }
    }

    return this.$createElement('div', data, [
      this.genActionHeader(),
      this.$createElement(VDivider),
      this.genTable()
    ])
  }
})

// export const a = VDataTable.extend({
//   name: 'dash-table',

//   methods: {
//     genHeading (props) {
//       return [
//         this.$createElement(DashTableHeading, {
//           attrs: {
//             title: 'Teste',
//             subtitle: 'Este é um teste'
//           }
//         }),
//         this.$createElement(VDivider)
//       ]
//     },

//     genDefaultScopedSlot (props) {
//       const simpleProps = {
//         height: this.height,
//         fixedHeader: this.fixedHeader,
//         dense: this.dense
//       }

//       const data = {
//         class: {
//           'dash-table': true
//         }
//       }

//       const children = [
//         this.genHeading(props),
//         this.$createElement(VSimpleTable, {
//           props: simpleProps
//         }, [
//           this.proxySlot('top', getSlot(this, 'top', props, true)),
//           this.genCaption(props),
//           this.genColgroup(props),
//           this.genHeaders(props),
//           this.genBody(props),
//           this.proxySlot('bottom', this.genFooters(props))
//         ])
//       ]

//       return this.$createElement('div', data, children)
//     }
//   },

//   // created () {
//   //   this.scopedSlots = {}
//   //   this.scopedSlots['data-table-select'] = function (props) {
//   //     createElement('div', 'F')
//   //   }
//   // }

//   scopedSlots: {
//     'data-table-select': (a) => {
//       return this.$createElement('div', 'F')
//     }
//   }
// })
