import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Main from "./pages/Main"
import Pokemon from "./pages/Pokemon"
import Skill from "./pages/Skill"
import NotFound from "./pages/NotFound"

import ScrollToTop from "./components/ScrollToTop"

const Router = () => (
  <BrowserRouter>
    <ScrollToTop>
      <div className="flex m-auto application">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/pokemon/:name" component={Pokemon} />
          <Route path="/skill/:name" component={Skill} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ScrollToTop>
  </BrowserRouter>
)

export default Router
