import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
          <h1>Navbar...</h1>
          <hr />
          <Switch>
              <Route path="/contacto">
                    Esta es la pagina de contacto
              </Route>
              <Route path="/nosotros">
                    Esta es la pagina de nosotros
              </Route>
              <Route path="/">
                    Esta es la pagina de incio
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
