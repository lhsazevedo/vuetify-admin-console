// Styles
import './ActionButton.scss'

import Vue from 'vue'
import VBtn from 'vuetify/lib/components/VBtn'

export default Vue.component('action-button', {
  render (h) {
    const data = {
      class: {
        'action-button': true,
        'font-weight-regular': true,
        'text-none': true
      },

      attrs: {
        color: 'primary',
        ...this.$attrs,
        text: true
      },

      on: this.$listeners
    }

    return h(VBtn, data, this.$slots.default)
  }
})
