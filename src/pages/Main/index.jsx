import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPokemons, filteredPokemons } from '../../actions';
import Loader from '../../components/Loader';
import './style.scss';

export default function Main() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.list);
  const loading = useSelector((state) => state.pokemon.loading);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      <header>
        <input
          className="filter"
          type="text"
          placeholder="Filtered by name"
          onInput={({ target }) => {
            dispatch(filteredPokemons(target.value));
          }}
        />
      </header>
      <main className={`list ${loading && 'list--loader'}`}>
        {loading && <Loader />}
        {!loading &&
          pokemons.map((el) => (
            <Link className="list__element pokemons" key={el.name} to={`/pokemon/${el.name}`}>
              <picture>
                <source srcSet="https://via.placeholder.com/300.webp" type="image/webp" />
                <source srcSet="https://via.placeholder.com/300.jpeg" type="image/jpeg" />
                <img
                  className="pokemons__image"
                  src="https://via.placeholder.com/300.jpeg"
                  alt="placeholder"
                />
              </picture>
              <p className="pokemons__name">{el.name}</p>
            </Link>
          ))}
      </main>
    </>
  );
}
