import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import "foundation-sites";
import $ from "jquery";

const App = (props) => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return <h1>Hello from the frontend!</h1>;
};

export default hot(App);
