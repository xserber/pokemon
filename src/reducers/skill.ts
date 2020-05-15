import createReducer from "../utils"
import { GET_SKILL, CHANGE_SKILL_LOADING } from "../constants"
import IAbility from "../types/ability"

interface IState {
  loading: boolean;
  skill: IAbility | null;
}

const initialState: IState = {
  loading: false,
  skill: null
}

export default createReducer(initialState, {
  [GET_SKILL]: (state: IState, skill: IAbility): IState => ({ ...state, skill }),
  [CHANGE_SKILL_LOADING]: (state: IState, loading: boolean): IState => ({
    ...state,
    loading,
  }),
})
