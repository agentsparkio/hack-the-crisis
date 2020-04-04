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
import Profile from './routes/profile/profile';
import Dashboard from './routes/me/dashboard';
import Explore from './routes/explore/explore';
import Learn from './routes/learn/learn';
import Achievement from "./routes/profile/achievement";
import MyData from "./routes/profile/myData";
import About from "./routes/profile/about";

import "./blueprint.css";
import "./App.css";

function App() {
  const [userName, setUserName] = React.useState("Jane Smith");
  const [title, setTitle] = React.useState("Zero Waste");
  const [location, setLocation] = React.useState("Marrickville");
  const [points, setPoints] = React.useState(200);

  return (
    <Router>
      <Header title={title} location={location} />
      <div className="content">
        <Switch>
          <Route path="/profile">
            <Profile
            userName={userName}
            points={points}
            location={location}
            />
          </Route>
          <Route path="/about">
            <About title={title} />
          </Route>
          
          <Route path="/timeline">
            <Achievement />
          </Route>
          <Route path="/my-data">
            <div className="container">
            <MyData />
            </div>
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
              points={20}
            />
          </Route>
          <Route path="/">
            <Dashboard
            location={location}
            />
          </Route>
        </Switch>

      </div>

      <Footer />

    </Router>

  );
}

export default App;
