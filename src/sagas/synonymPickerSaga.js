import {
  fork,
  take,
  put,
  call,
} from 'redux-saga/effects';
import { getSynonymsAction, synonymSelectAction } from './actions';
import { getSelectedWord, replaceWord } from '../utils';
import { getSynonymsList } from '../api';
import { setSynonyms } from '../store/synonyms/actions';

function* getSynonymsSaga() {
  while (true) {
    let synonymsResponse;
    yield take(getSynonymsAction);
    const selectedWord = getSelectedWord();
    if (!selectedWord) continue; // eslint-disable-line no-continue
    try {
      synonymsResponse = yield call(getSynonymsList, selectedWord);
    } catch (err) {
      console.error(err);
    }
    const synonymsList = synonymsResponse.map(({ word }) => word);
    yield put(setSynonyms(synonymsList));
  }
}

function* synonymSelectSaga() {
  while (true) {
    const { payload: selectedSynonym } = yield take(synonymSelectAction);
    replaceWord(selectedSynonym);
    yield put(setSynonyms([]));
  }
}
export default function* synonymsSaga() {
  yield fork(getSynonymsSaga);
  yield fork(synonymSelectSaga);
}
