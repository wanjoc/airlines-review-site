import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import AirlinesIndex from "./AirlinesIndex"
import AirlineShow from "./AirlineShow"

const App = () => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/airlines" component={AirlinesIndex} />
        <Route exact path="/airlines/:id" component={AirlineShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
