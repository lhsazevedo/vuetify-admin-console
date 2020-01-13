// Components
import { VDataTable } from 'vuetify/lib/components/VDataTable'
import { VDivider } from 'vuetify/lib/components/VDivider'
import ActionTableHeading from './ActionTableHeading'

import Vue from 'vue'

// import { getSlot } from 'vuetify/lib/util/helpers'

export default Vue.component('action-table', {
  props: {
    title: String,
    subtitle: String
  },

  methods: {
    genActionHeader () {
      const heading = this.$createElement(ActionTableHeading, {
        attrs: {
          title: this.title,
          subtitle: this.subtitle
        }
      })

      return [ heading ]
    },

    genTable () {
      return this.$createElement(VDataTable.extend({
        // extend
      }))
    }
  },

  render (h) {
    return h('div', [
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
