import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';

import { getSkill } from '../../actions';
import './style.scss';

function Skill({ history, match }) {
  const dispatch = useDispatch();
  const skill = useSelector((state) => state.skill.skill);
  const loading = useSelector((state) => state.skill.loading);

  useEffect(() => {
    dispatch(getSkill(match.params.name));
  }, [dispatch]);

  return (
    <div className="abilities">
      <button className="abilities__btn" type="button" onClick={history.goBack}>
        go back
      </button>
      <div className={`abilities__container ${loading && 'abilities__container--loader'}`}>
        {loading && <Loader />}
        {!loading && (
          <>
            <h1 className="abilities__name">{skill && skill.name}</h1>
            {skill && skill.effect_entries && (
              <ul className="abilities__list">
                {skill.effect_entries.map((el, indx) => (
                  <li className="abilities__item" key={parseInt(indx, 10)}>
                    {el.effect}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

Skill.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

Skill.defaultProps = {
  history: {
    goBack: () => {},
  },
  match: {
    params: {
      name: '',
    },
  },
};

export default Skill;
