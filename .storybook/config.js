import  { configure } from '@storybook/vue'

import Vue from 'vue'
import VSelect from 'vue-select'

Vue.component('v-select', VSelect)
function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)