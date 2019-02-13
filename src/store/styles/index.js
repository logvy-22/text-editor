import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  stylesList: [],
};
const reducer = handleActions({
  [actions.setCurrentStyles]: (state, { payload: stylesList }) => ({
    ...state, stylesList,
  }),
}, initialState);

export default reducer;
