import {
  GET_POKEMONS,
  GET_INFORMATION_POKEMON,
  GET_SKILL,
  FILTERED_POKEMON,
  CHANGE_SKILL_LOADING,
  CHANGE_LIST_POKEMON_LOADING,
  CHANGE_POKEMON_LOADING,
} from '../constants';

const url = 'https://pokeapi.co/api/v2/';

function setDataPokemons(payload) {
  return {
    type: GET_POKEMONS,
    payload,
  };
}

function chageLoadingListPokemon(payload) {
  return {
    type: CHANGE_LIST_POKEMON_LOADING,
    payload,
  };
}

export function getPokemons() {
  return (dispatch) => {
    dispatch(chageLoadingListPokemon(true));
    fetch(`${url}pokemon?limit=20`)
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(setDataPokemons(results));
        dispatch(chageLoadingListPokemon(false));
      });
  };
}

function setInformationPokemon(payload) {
  return {
    type: GET_INFORMATION_POKEMON,
    payload,
  };
}

function chageLoadingPokemon(payload) {
  return {
    type: CHANGE_POKEMON_LOADING,
    payload,
  };
}

export function getInformationPokemon(name) {
  return (dispatch) => {
    dispatch(chageLoadingPokemon(true));
    fetch(`${url}pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setInformationPokemon(data));
        dispatch(chageLoadingPokemon(false));
      });
  };
}

function setSkill(payload) {
  return {
    type: GET_SKILL,
    payload,
  };
}

function chageLoading(payload) {
  return {
    type: CHANGE_SKILL_LOADING,
    payload,
  };
}

export function getSkill(name) {
  return (dispatch) => {
    dispatch(chageLoading(true));
    fetch(`${url}ability/${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setSkill(data));
        dispatch(chageLoading(false));
      });
  };
}

export function filteredPokemons(payload) {
  return {
    type: FILTERED_POKEMON,
    payload,
  };
}
