import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import Loader from "../../components/Loader"

import { getSkill } from "../../actions"
import "./style.scss"

function Skill() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { name } = useParams()
  const skill = useSelector(
    (state: {
      // eslint-disable-next-line camelcase
      skill: { skill?: { name: string; effect_entries: { effect: string }[] } }
    }) => state.skill.skill
  )
  const loading = useSelector(
    (state: { skill: { loading: boolean } }) => state.skill.loading
  )

  useEffect(() => {
    dispatch(getSkill(name))
  }, [dispatch, name])

  return (
    <main className="abilities m-auto">
      <button className="abilities__btn" type="button" onClick={history.goBack}>
        go back
      </button>
      <div
        className={`abilities__container ${
          loading && "abilities__container--loader"
        }`}
      >
        {loading && <Loader />}
        {!loading && (
          <>
            <h1 className="abilities__name">{skill && skill.name}</h1>
            {skill && skill.effect_entries && (
              <ul className="abilities__list">
                {skill.effect_entries.map((el: { effect: string }) => (
                  <li className="abilities__item" key={el.effect}>
                    {el.effect}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </main>
  )
}

export default Skill
