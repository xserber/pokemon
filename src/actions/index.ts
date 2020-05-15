import { Dispatch } from "redux"
import {
  GET_POKEMONS,
  GET_INFORMATION_POKEMON,
  GET_SKILL,
  FILTERED_POKEMON,
  CHANGE_SKILL_LOADING,
  CHANGE_LIST_POKEMON_LOADING,
  CHANGE_POKEMON_LOADING,
} from "../constants"
import IDataPokemons from "../types/pokemons"
import IPokemon from "../types/pokemon"
import IAbility from "../types/ability"

const url = "https://pokeapi.co/api/v2/"

function setDataPokemons(payload: IDataPokemons[]) {
  return {
    type: GET_POKEMONS,
    payload,
  }
}

function chageLoadingListPokemon(payload: boolean) {
  return {
    type: CHANGE_LIST_POKEMON_LOADING,
    payload,
  }
}

export function getPokemons() {
  return (dispatch: Dispatch) => {
    dispatch(chageLoadingListPokemon(true))
    fetch(`${url}pokemon?limit=20`)
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(setDataPokemons(results))
        dispatch(chageLoadingListPokemon(false))
      })
  }
}


function setInformationPokemon(payload: IPokemon[]) {
  return {
    type: GET_INFORMATION_POKEMON,
    payload,
  }
}

function chageLoadingPokemon(payload: boolean) {
  return {
    type: CHANGE_POKEMON_LOADING,
    payload,
  }
}

export function getInformationPokemon(name: string) {
  return (dispatch: Dispatch) => {
    dispatch(chageLoadingPokemon(true))
    fetch(`${url}pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setInformationPokemon(data))
        dispatch(chageLoadingPokemon(false))
      })
  }
}

function setSkill(payload: IAbility[]) {
  return {
    type: GET_SKILL,
    payload,
  }
}

function chageLoading(payload: boolean) {
  return {
    type: CHANGE_SKILL_LOADING,
    payload,
  }
}

export function getSkill(name: string) {
  return (dispatch: Dispatch) => {
    dispatch(chageLoading(true))
    fetch(`${url}ability/${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setSkill(data))
        dispatch(chageLoading(false))
      })
  }
}

export function filteredPokemons(payload: string) {
  return {
    type: FILTERED_POKEMON,
    payload,
  }
}
