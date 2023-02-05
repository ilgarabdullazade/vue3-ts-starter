import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { router } from './router';
import store from './store';
import './assets/scss/main.scss';
import App from './App.vue';

const app = createApp(App);
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('./locales/*.json', { eager: true })
  ).map(([key, value]) => {
    return [key.slice(10, -5), value.default];
  })
);
app.use(
  createI18n({
    legacy: false,
    locale: unref(useLocalStorage('locale', 'en')),
    messages,
  })
);
app.use(store);
app.use(router);
app.mount('#app');
