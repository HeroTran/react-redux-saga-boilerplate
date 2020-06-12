import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const AppContainer = React.lazy(() => import('./containers/App/AppContainer'));

const App = () => {
  return (
    <Switch>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" component={AppContainer} />
        </Switch>
      </React.Suspense>
    </Switch>
  );
};
export default App;
