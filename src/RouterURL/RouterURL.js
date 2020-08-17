import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Hats from "../Pages/Hats/Hats";
import Sneakers from "../Pages/Sneakers/Sneakers";
import Womens from "../Pages/Womens/Womens";
import Mens from "../Pages/Mens/Mens";
import Jackets from "../Pages/Jackets/Jackets";
import Registration from "../Pages/Registration/Registration";
import Shop from "../Pages/Shop/Shop";
import Checkout from "../Pages/Checkout/Checkout";

function RouterURL({ currentUser }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/hats" component={Hats} />
        <Route path="/sneakers" component={Sneakers} />
        <Route path="/womens" component={Womens} />
        <Route path="/mens" component={Mens} />
        <Route path="/jackets" component={Jackets} />
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
