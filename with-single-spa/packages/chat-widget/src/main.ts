import Vue, { CreateElement } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#chat-widget',
    render: (h: CreateElement) => h(App),
  },
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
