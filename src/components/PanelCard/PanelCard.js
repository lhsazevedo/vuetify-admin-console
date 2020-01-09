// Styles
import './PanelCard.scss'

// Mixins
import Routable from 'vuetify/lib/mixins/routable'

// Utilities
import mixins from 'vuetify/lib/util/mixins'

const baseMixins = mixins(Routable)

export default baseMixins.extend({
  name: 'panel-card',

  props: {
    icon: String,
    title: String,
    description: String,
    to: null
  },

  computed: {
    classes () {
      return {
        'panel-card': true,
        'text--primary': true,
        ...Routable.options.computed.classes.call(this)
      }
    }
  },

  methods: {
    genWrapper () {
      const data = {
        class: { 'panel-card__wrapper': true }
      }
      return [this.$createElement('div', data, this.genContent())]
    },

    genContent () {
      return [
        this.genImage(),
        this.genTitle(),
        this.genDescription()
      ]
    },

    genImage () {
      const data = {
        attrs: {
          src: this.icon,
          alt: this.title,
          width: '48',
          height: '48'
        }
      }

      return this.$createElement('img', data)
    },

    genTitle () {
      const data = {
        class: { 'panel-card__title': true }
      }
      return this.$createElement('div', data, this.title)
    },

    genDescription () {
      const data = {
        class: { 'panel-card__description': true }
      }
      return this.$createElement('div', data, this.description)
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()

    return h(tag, data, this.genWrapper())
  }
})
