import { fork, take, put } from 'redux-saga/effects';
import { checkStylesAction } from './actions';
import { getCurrentStyles } from '../utils';
import { setCurrentStyles } from '../store/styles/actions';

function* checkStyles() {
  while (true) {
    yield take(checkStylesAction);
    const currentStylesList = getCurrentStyles();
    yield put(setCurrentStyles(currentStylesList));
  }
}

export default function* currentStylesSaga() {
  yield fork(checkStyles);
}
