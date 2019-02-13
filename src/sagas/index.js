import { fork } from 'redux-saga/effects';

import stylePickerSaga from './stylePickerSaga';
import currentStylesSaga from './currentStylesSaga';
import synonymsPickerSaga from './synonymPickerSaga';

export default function* rootSaga() {
  yield fork(stylePickerSaga);
  yield fork(currentStylesSaga);
  yield fork(synonymsPickerSaga);
}
