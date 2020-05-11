import createReducer from '../utils';
import { GET_SKILL, CHANGE_SKILL_LOADING } from '../constants';

const initialState = {
  loading: false,
};

export default createReducer(initialState, {
  [GET_SKILL]: (state, skill) => ({ ...state, skill }),
  [CHANGE_SKILL_LOADING]: (state, loading) => ({ ...state, loading }),
});
