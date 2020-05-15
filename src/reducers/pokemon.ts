import createReducer from "../utils"
import {
  GET_POKEMONS,
  GET_INFORMATION_POKEMON,
  FILTERED_POKEMON,
  CHANGE_POKEMON_LOADING,
  CHANGE_LIST_POKEMON_LOADING,
} from "../constants"
import IDataPokemons from "../types/pokemons"
import IPokemon from "../types/pokemon"

interface IState {
  list:           IDataPokemons[];
  filterList:     IDataPokemons[];
  current:       IPokemon | null;
  loading:        boolean;
  loadingPokemon: boolean;
}

const initialState: IState = {
  list: [],
  filterList: [],
  current: null,
  loading: false,
  loadingPokemon: false,
}

export default createReducer(initialState, {
  [GET_POKEMONS]: (state: IState, list: IDataPokemons[]) => ({
    ...state,
    list,
    filterList: list,
  }),
  [GET_INFORMATION_POKEMON]: (state: IState, current: IPokemon): IState => ({
    ...state,
    current,
  }),
  [FILTERED_POKEMON]: (
    state: { filterList: { name: string }[] },
    payload: string
  ) => ({
    ...state,
    list: [...state.filterList.filter((el) => el.name.includes(payload))],
  }),
  [CHANGE_POKEMON_LOADING]: (
    state: IState,
    loadingPokemon: boolean
  ): IState => ({
    ...state,
    loadingPokemon,
  }),
  [CHANGE_LIST_POKEMON_LOADING]: (state: IState, loading: boolean): IState => ({
    ...state,
    loading,
  }),
})
