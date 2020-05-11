import React from "react"
import { Link } from "react-router-dom"
import pokeball from "../../assets/gaming.svg"

import "./style.scss"

export default () => (
  <main className="flex f-d-column f-ai-center m-auto not-page">
    <div className="flex">
      <p className="not-page__number">4</p>
      <img className="not-page__image" src={pokeball} alt="0" />
      <p className="not-page__number">4</p>
    </div>
    <p className="not-page__text">Page not found</p>
    <Link className="not-page__link" to="/">
      Go back to main page
    </Link>
  </main>
)
