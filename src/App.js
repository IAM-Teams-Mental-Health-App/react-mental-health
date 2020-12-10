import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// local imports
import Header from './components/Header';
// pages
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import CreateMain from './pages/CreateMain';
import ViewLantern from './pages/ViewLantern';

// functional component, currently no state
function App() {
  const location = useLocation();
  // returns html & js => "JSX"
  return (
    <div className="App container">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
