import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  synonymsList: [],
};
const reducer = handleActions({
  [actions.setSynonyms]: (state, { payload: synonymsList }) => ({
    ...state, synonymsList,
  }),
}, initialState);

export default reducer;
