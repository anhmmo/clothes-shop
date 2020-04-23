import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Hats from "../Pages/Hats/Hats";
import Sneakers from "../Pages/Sneakers/Sneakers";
import Womens from "../Pages/Womens/Womens";
import Mens from "../Pages/Mens/Mens";
import Jackets from "../Pages/Jackets/Jackets";

function RouterURL() {
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
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default RouterURL;
