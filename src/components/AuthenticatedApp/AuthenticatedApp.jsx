import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../../constants/routes.constant";
import Main from "../Main/Main";

function AuthenticatedApp() {
  return (
    <Switch>
      <Route exact path={routes.login().route} component={Main} />
      <Route path={routes.main().route} component={Main} />
      <Route path={routes.register().route} component={Main} />
    </Switch>
  );
}

export default AuthenticatedApp;
