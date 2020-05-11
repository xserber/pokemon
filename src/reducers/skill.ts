import createReducer from "../utils"
import { GET_SKILL, CHANGE_SKILL_LOADING } from "../constants"

const initialState = {
  loading: false,
}

export default createReducer(initialState, {
  [GET_SKILL]: (state: object, skill: object) => ({ ...state, skill }),
  [CHANGE_SKILL_LOADING]: (state: object, loading: boolean) => ({
    ...state,
    loading,
  }),
})
