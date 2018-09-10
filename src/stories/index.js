import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import MyButton from '../MyButton.vue'


storiesOf('Test', module)
  .add('My button', () => ({
    components: { MyButton },
    template: '<div><my-button></my-button></div>'
  }))