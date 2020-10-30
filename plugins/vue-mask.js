import Vue from "vue";
import InputFacade from 'vue-input-facade'
const options = {
  name: 'mask',

  tokens: {
    '#': { pattern: /\d/ },
    'A': { pattern: /[а-я]/i },
    'N': { pattern: /[0-9a-z]/i },
    'X': { pattern: /./ },
  }
}

Vue.use(InputFacade, options)