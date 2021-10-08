import { all } from 'redux-saga/effects';
import defaultSaga from './defaultSaga.jsx';

export default function* rootSaga() {
  yield all([defaultSaga()]);
}
