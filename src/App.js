import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import OrderScreen from "./pages/OrderScreen/OrderScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/orders">
          <OrderScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
