import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3367d6'
      }
    }
  },

  breakpoint: {
    thresholds: {
      xs: 720,
      sm: 1024,
      md: 1280,
      lg: 1600
    }
  }
})
