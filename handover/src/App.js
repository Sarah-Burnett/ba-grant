import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Nav from './layout/Nav'
import Home from './pages/Home'
import QualtricsIntro from './pages/QualtricsIntro';
import QualtricsExport from './pages/QualtricsExport';
import SonaIntro from './pages/SonaIntro';
import SharepointIntro from './pages/SharepointIntro'
import PsychophysP from './pages/PsychophysP'
import PsychophysP1 from './pages/PsychophysP1'


function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Switch>
          <Route path="/qualtrics-getting-started">
            <QualtricsIntro/>
          </Route>
          <Route path="/qualtrics-export">
            <QualtricsExport/>
          </Route>
          <Route path="/sona-getting-started">
            <SonaIntro/>
          </Route>
          <Route path="/sharepoint-getting-started">
            <SharepointIntro/>
          </Route>
          <Route path="/psychophys-preprocess">
            <PsychophysP/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
