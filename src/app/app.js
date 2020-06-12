import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AppContainer } from './containers';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={AppContainer} />
      </Switch>
    </HashRouter>
  );
};
export default App;
