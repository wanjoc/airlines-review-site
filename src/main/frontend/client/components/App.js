import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import AirlinesIndex from "./AirlinesIndex"
import AirlineShow from "./AirlineShow"
import NewAirlineForm from "./NewAirlineForm"
import Homepage from "./Homepage"

const App = () => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/airlines" component={AirlinesIndex} />
        <Route exact path="/airlines/new" component={NewAirlineForm} />
        <Route exact path="/airlines/:id" component={AirlineShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
