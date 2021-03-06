import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

import { getInformationPokemon } from "../../actions"
import Loading from "../../components/Loader"
import "./style.scss"

function Pokemon() {
  const dispatch = useDispatch()
  const { name } = useParams()
  const pokemon = useSelector(
    (state: {
      pokemon: {
        current: {
          name: string
          // eslint-disable-next-line camelcase
          stats: { stat: { name: string }; base_stat: string }[]
          types: { type: { name: string } }[]
          abilities: { ability: { name: string } }[]
          // eslint-disable-next-line camelcase
          sprites: { front_default: string }
        }
      }
    }) => state.pokemon.current
  )
  const loading = useSelector(
    (state: { pokemon: { loadingPokemon: boolean } }) =>
      state.pokemon.loadingPokemon
  )

  useEffect(() => {
    dispatch(getInformationPokemon(name))
  }, [dispatch, name])

  return (
    <main className="pokemon m-auto">
      <Link className="pokemon__back" to="/">
        Go back to main page
      </Link>
      <div
        className={`pokemon__container flex ${
          loading ? "pokemon__container--loader" : "f-js-sb"
        }`}
      >
        {loading && <Loading />}
        {!loading && (
          <>
            <div>
              <p className="pokemon__subtitle">
                Name:
                <span>{pokemon && pokemon.name}</span>
              </p>
              {pokemon && pokemon.stats && (
                <>
                  <p className="pokemon__subtitle">Characteristic:</p>
                  <ul className="pokemon__stats">
                    {pokemon.stats.map((el) => (
                      <li key={el.stat.name} className="pokemon__stat">
                        {`${el.stat.name}:`}
                        <span>{el.base_stat}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {pokemon && pokemon.types && (
                <>
                  <p className="pokemon__subtitle">Type:</p>
                  <ul className="pokemon__types">
                    {pokemon.types.map((el) => (
                      <li key={el.type.name} className="pokemon__type">
                        {el.type.name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {pokemon && pokemon.abilities && (
                <>
                  <p className="pokemon__subtitle">Abilities:</p>
                  <ul className="pokemon__abilities">
                    {pokemon.abilities.map((el) => (
                      <li key={el.ability.name}>
                        <Link
                          className="pokemon__ability"
                          to={`/skill/${el.ability.name}`}
                        >
                          {el.ability.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {pokemon && pokemon.sprites.front_default && (
              <img
                className="pokemon__image"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            )}
          </>
        )}
      </div>
    </main>
  )
}

export default Pokemon
