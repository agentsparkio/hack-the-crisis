import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import "./blueprint.css";
import Account from './routes/account';

function App() {
  return (
    <Router>
      <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/account">
          <Account />
          </Route>
          <Route path="/">
            <Account />
          </Route>
        </Switch>

      <Footer />

    </Router>

  );
}

export default App;
