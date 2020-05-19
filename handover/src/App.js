import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import QualtricsIntro from './pages/QualtricsIntro';
import QualtricsExport from './pages/QualtricsExport';
import SonaIntro from './pages/SonaIntro';
import SharepointIntro from './pages/SharepointIntro'

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
          <Route path="/">
            <h2>I am home page</h2>
          </Route>
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
