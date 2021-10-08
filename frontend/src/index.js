import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './helpers/redux/store.jsx';
import en from './translations/en/index.json';
import ru from './translations/ru/index.json';
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: en,
    },
    ru: {
      global: ru,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
