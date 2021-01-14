import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0E4DA4',
        secondary: '#1BB55C',
        tertiary: '#FFBB12',
        accent: '#8c9eff',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252',
        black: {
          base: '#000',
          lighten1: '#263238'
        },
        shade: '#F0F0F0',
        icons: '#979797'
      }
    }
  }
});
