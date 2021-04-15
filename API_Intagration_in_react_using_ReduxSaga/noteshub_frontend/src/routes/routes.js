import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// import NavigationBar from "../components/layouts/NavigationBar";
import routes from "./routesList";
import RouteValidator from "./RouteValidator";

const CustomRoutes = () => (
  <Fragment>
    {/* <NavigationBar /> */}
    <Switch>
      {routes.map(({ path, key, ...props }) => (
        <Route
          path={path}
          key={key}
          exact={true}
          // component={component}
          render={() => <RouteValidator path={path} {...props} />}
        />
      ))}
    </Switch>
  </Fragment>
);

export default CustomRoutes;
