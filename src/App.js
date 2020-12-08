import React from 'react';
import { Route, Switch } from 'react-router-dom';
// local imports
import Header from './components/Header';
// pages
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import CreateMain from './pages/CreateMain';
import ViewLantern from './pages/ViewLantern';

// functional component, currently no state
function App() {
  // returns html & js => "JSX"
  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about" component={Onboarding} />
        <Route path="/create" component={CreateMain} />
        <Route path="/view/:id" component={ViewLantern} />

        {/* ERROR Handling */}
        <Route>
          <h1>Error</h1>
          <p>Route/Page does not exist</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
