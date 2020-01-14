// Style
import './ActionTable.scss'

// Components
import { VDataTable } from 'vuetify/lib/components/VDataTable'
import { VDivider } from 'vuetify/lib/components/VDivider'
import ActionTableHeader from './ActionTableHeader'

import Vue from 'vue'

// import { getSlot } from 'vuetify/lib/util/helpers'

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

  computed: {
    classes () {
      return {
        'action-table--has-selection': this.hasSelection
      }
    },

    hasSelection () {
      return this.selection.length > 0
    },

    // eslint-disable-next-line
    doNothing () {
      // console.log(this.selection)
      // nothing
    }
  },

  class: {
    'action-table': true
  },

  methods: {
    genActionHeader () {
      return this.$createElement(ActionTableHeader, { attrs: this.$attrs })
    },

    genTable () {
      // const dataTable = VDataTable.extend({
      //   // extend
      // })

      return this.$createElement(
        VDataTable,
        {
          attrs: this.$attrs,
          on: {
            input: (selection) => {
              // console.log(selection, Object.assign({}, selection))
              // this.$set(this.selection, selection)
              this.selection = selection
            }
          }
        }
      )
    }
  },

  render (h) {
    // eslint-disable-next-line
    // this.doNothing
    // const a = this.hasSelection
    const data = {
      class: this.classes
    }

    return h('div', data, [
      this.genActionHeader(),
      h(VDivider),
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
//   //   console.log(this.scopedSlots)
//   // }

//   scopedSlots: {
//     'data-table-select': (a) => {
//       console.log('oi')
//       return this.$createElement('div', 'F')
//     }
//   }
// })
