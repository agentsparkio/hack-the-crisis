import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// common components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import WMQuiz from './components/quiz/WMQuiz';

// pages
import Dashboard from './routes/me/dashboard';
import Profile from './routes/profile/profile';
import Explore from './routes/explore/explore';
import Learn from './routes/learn/learn';
import Achievement from "./routes/profile/achievement";
import MyData from "./routes/profile/myData";
import About from "./routes/profile/about";
import Food from "./routes/food/food";

import "./blueprint.css";
import "./App.css";

function App() {
  const [userName, setUserName] = React.useState("Jane");
  const [title, setTitle] = React.useState("Garbage Pride");
  const [location, setLocation] = React.useState("Marrickville");
  const [points, setPoints] = React.useState(200);
  const [notify, setNotify] = React.useState(false);
  const [notifyText, setNotifyText] = React.useState("Welcome! Earn points by reducing your waste and compete with neighbouring communities!");
  const [notifyTextHeader, setNotifyTextHeader] = React.useState("Hello newbie! :) ");
  const [introAlert, setIntroAlert] = React.useState(true);
  React.useEffect(() => {
    if(!introAlert) {
      setNotifyText("Learn more about how this app can help you reduce your waste.");
      setNotifyTextHeader("More info");
    }
  }, [introAlert]);

  return (
    <Router>
      <Header title={title} location={location} notify={notify} notifyText={notifyText} notifyTextHeader={notifyTextHeader} />
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
            <Dashboard
              userName={userName}
              setNotifyText={setNotifyText}
              setNotifyTextHeader={setNotifyTextHeader}
              location={location}
            />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/explore">
            <Explore
              setNotifyText={setNotifyText}
              setNotifyTextHeader={setNotifyTextHeader}
            />
          </Route>
          <Route path="/waste-management">
            <div className="container-top">
              <WMQuiz
                type="Waste Management"
                description="Complete this quiz to earn 32 extra points"
                points={200}
                setNotifyText={setNotifyText}
                setNotifyTextHeader={setNotifyTextHeader}
              />
            </div>
          </Route>
          <Route path="/">
            {/* <Onboarding /> */}
            <Learn
              introAlert={introAlert}
              setIntroAlert={setIntroAlert}
              userName={userName}
              setNotifyText={setNotifyText}
              setNotifyTextHeader={setNotifyTextHeader}
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
