import * as React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from '../NoMatch/NoMatch';
import HomeContainer from '../../../containers/Home/HomeContainer';
import { ROUTE_PAGE } from '../../../functionals/Common/constants';

const HomePage = withRouter(HomeContainer);

export const ROUTES = [
  {
    label: 'Home',
    icon: 'home',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_ROOT,
    component: () => <HomePage />,
  },
  {
    label: 'Home',
    icon: 'home',
    exact: true,
    pathname: ROUTE_PAGE.ROUTE_HOME,
    component: () => <HomePage />,
  },
];

export const renderRoutes = (routes) =>
  routes.map((route) => {
    if (route.children) {
      return renderRoutes(route.children);
    }
    return (
      <Route
        key={route.pathname}
        path={route.pathname}
        exact={route.exact}
        component={route.component}
      />
    );
  });

function Routes() {
  return (
    <Switch>
      {renderRoutes(ROUTES)}
      <Route key="noMatch" component={() => <NoMatch />} />
      <Redirect from={ROUTE_PAGE.ROUTE_ROOT} to={ROUTE_PAGE.ROUTE_HOME} />
    </Switch>
  );
}

export default Routes;
