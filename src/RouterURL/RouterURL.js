import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Registration from "../Pages/Registration/Registration";
import Shop from "../Pages/Shop/Shop";
import Checkout from "../Pages/Checkout/Checkout";

function RouterURL({ currentUser }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/registration"
          component={() =>
            currentUser ? <Redirect to="/" /> : <Registration />
          }
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default RouterURL;
