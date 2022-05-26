import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "../assets/scss/main.scss"

import Homepage from "./Homepage"
import NavBar from "./NavBar"
import AirlinesIndex from "./AirlinesIndex"
import NewAirlineForm from "./NewAirlineForm.js"
import AirlineShow from "./AirlineShow"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import EditReview from "./EditReview"

const App = () => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/airlines/new" component={NewAirlineForm} />
          <Route exact path="/airlines/about-us" component={AboutUs} />
          <Route exact path="/airlines" component={AirlinesIndex} />
          <Route exact path="/airlines/:id" component={AirlineShow} />
          <Route exact path="/airlines/edit/:id" component={EditReview} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default hot(App)
