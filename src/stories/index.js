import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

storiesOf('Test', module)
  .add('simple template', () => ({
    template: '<v-select></v-select>'
  }))