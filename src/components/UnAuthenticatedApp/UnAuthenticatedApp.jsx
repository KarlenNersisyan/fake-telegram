import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../../constants/routes.constant";
import Login from "../Login/Login";
import Register from "../Register/Register";

function UnAuthenticatedApp() {
  return (
    <Switch>
      <Route exact path={routes.login().route} component={Login} />
      <Route path={routes.main().route} component={Login} />
      <Route path={routes.register().route} component={Register} />
    </Switch>
  );
}

export default UnAuthenticatedApp;
