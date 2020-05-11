import createReducer from '../utils';
import {
  GET_POKEMONS,
  GET_INFORMATION_POKEMON,
  FILTERED_POKEMON,
  CHANGE_POKEMON_LOADING,
  CHANGE_LIST_POKEMON_LOADING,
} from '../constants';

const initialState = {
  list: [],
  filterList: [],
  current: null,
  loading: false,
  loadingPokemon: false,
};

export default createReducer(initialState, {
  [GET_POKEMONS]: (state, list) => ({ ...state, list, filterList: list }),
  [GET_INFORMATION_POKEMON]: (state, current) => ({ ...state, current }),
  [FILTERED_POKEMON]: (state, payload) => ({
    ...state,
    list: [...state.filterList.filter((el) => el.name.includes(payload))],
  }),
  [CHANGE_POKEMON_LOADING]: (state, loadingPokemon) => ({ ...state, loadingPokemon }),
  [CHANGE_LIST_POKEMON_LOADING]: (state, loading) => ({ ...state, loading }),
});
