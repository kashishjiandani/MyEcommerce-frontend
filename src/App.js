import WebFont from "webfontloader";
import React from "react";
import Router from "./Router/Router"
import MainState from "./Context/MainState";

function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });

  return (
    <MainState>
      <Router/>
    </MainState>
  );
}

export default App;
