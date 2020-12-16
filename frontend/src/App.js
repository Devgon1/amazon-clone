import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazon clone
            </a>
          </div>
          <div>
            <a href="/card">Cart</a>
            <a href="/signin">Sign in</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id">
            <ProductScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
