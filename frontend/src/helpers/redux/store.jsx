import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer.jsx';
import rootSaga from './rootSaga.jsx';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

store.subscribe(() => {
  window.localStorage.setItem('state', JSON.stringify(store.getState()));
  // сохранение состояния в localStorage
});

sagaMiddleware.run(rootSaga);

export default store;
