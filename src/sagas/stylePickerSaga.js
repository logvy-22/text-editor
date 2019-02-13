import { fork, take, put } from 'redux-saga/effects';
import { checkStylesAction, chooseStyleAction } from './actions';
import { setStyle } from '../utils';

function* styleButtonClickHandler() {
  while (true) {
    const { payload: styleType } = yield take(chooseStyleAction);
    setStyle(styleType);
    yield put(checkStylesAction());
  }
}

export default function* stylePickerSaga() {
  yield fork(styleButtonClickHandler);
}
