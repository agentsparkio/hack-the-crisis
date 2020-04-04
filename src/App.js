import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// common components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Quiz from './components/quiz/quiz';
// pages
import Account from './routes/me/account';
import Explore from './routes/explore/explore';
import Learn from './routes/learn/learn';

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
      
          <Route path="/me">
            <Account />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/recycling">
            <Quiz 
            type="Recycling"
            description="Complete this quiz to earn 32 extra points"
             />
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
