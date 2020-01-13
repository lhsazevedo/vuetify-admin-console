// Helpers
import Vue from 'vue'

// Components
import { VCardText } from 'vuetify/lib/components/VCard'

export default Vue.extend({
  name: 'dash-table-heading',

  props: {
    title: String,
    subtitle: String
  },

  methods: {
    genContent () {
      return [
        this.genTitle(),
        this.genSubtitle()
      ]
    },

    genTitle () {
      const data = {
        class: {
          'subtitle-1': true,
          'font-weight-medium': true,
          'text--secondary': true,
          'mr-6': true
        }
      }

      const children = [
        this.$createElement(
          'span',
          {
            class: {
              'subtitle-1': true,
              'font-weight-medium': true,
              'text--primary': true
            }
          },
          this.title
        ),
        ' | ' + this.subtitle
      ]

      return this.$createElement('div', data, children)
    },

    genSubtitle () {

    }
  },

  render (h) {
    const data = {
      class: {
        'dash-table-heading': true,
        'grey': true,
        'lighten-4': true
      }
    }

    return h(VCardText, data, this.genContent())
  }
})
