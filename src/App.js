import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Account from './routes/account';
import "./blueprint.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="content">
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Account />
          </Route>
        </Switch>

      </div>

      <Footer />

    </Router>

  );
}

export default App;
