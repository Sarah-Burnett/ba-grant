import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './app.css';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Home from './pages/Home';
import SonaIntro from './pages/SonaIntro';
import QualtricsIntro from './pages/QualtricsIntro';
import QualtricsExport from './pages/QualtricsExport';
import EprimePreprocessing from './pages/EPrimePreprocessing';
import SharepointIntro from './pages/SharepointIntro';
import PsychophysP1 from './pages/PsychophysP1';
import PsychophysP2 from './pages/PsychophysP2';

const routes = [
  { path: '/sharepoint-getting-started', Component: SharepointIntro },
  { path: '/sona-getting-started', Component: SonaIntro },
  { path: '/qualtrics-getting-started', Component: QualtricsIntro },
  { path: '/qualtrics-export', Component: QualtricsExport },
  { path: '/psychophys-preprocess-p1', Component: PsychophysP1 },
  { path: '/psychophys-preprocess-p2', Component: PsychophysP2 },
  { path: '/eprime-preprocess', Component: EprimePreprocessing },
  { path: '/', Component: Home },
]

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <div style={{minHeight: "79.8vh"}}>
          {routes.map(({path, Component}) => (
           <Route key={path} exact path={path}>
           {({ match }) => (
             <CSSTransition in={match != null} timeout={500} classNames="fade" unmountOnExit>
                 <Component  className="fade"/>
             </CSSTransition>
           )}
         </Route>
          ))}
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

//
{/* <Route path="/qualtrics-getting-started">
            <QualtricsIntro/>
          </Route>
          <Route path="/qualtrics-export">
            <QualtricsExport/>
          </Route>
          <Route path="/sharepoint-getting-started">
            <SharepointIntro/>
          </Route>
          <Route path="/psychophys-preprocess-p1">
            <PsychophysP1/>
          </Route>
          <Route path="/psychophys-preprocess-p1">
            <PsychophysP1/>
          </Route>
          <Route path="/">
            <Home/>
          </Route> */}
