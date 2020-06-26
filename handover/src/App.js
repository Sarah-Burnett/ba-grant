import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './app.css';
import SlidesState from './context/slides/SlidesState';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Login from './components/Login';
import Home from './layout/Home';
import Slides from './components/Slides';

const routes = [
  { path: '/sharepoint-getting-started', url: './json/sharepointintro.json' },
  { path: '/using-macros', url: './json/macros.json' },
  { path: '/data-storage', url: './json/datastorage.json'},
  { path: '/sona-getting-started', url: './json/sonaintro.json' },
  { path: '/qualtrics-getting-started', url: './json/qualtricsintro.json', redirectMsg: 'Proceed to exporting data', redirectUrl: '/qualtrics-export'},
  { path: '/qualtrics-export', url: './json/qualtricsexport.json' },
  { path: '/eprime-testing', url: './json/eprimecollection.json'},
  { path: '/eprime-preprocess', url: './json/eprimepreprocessing.json' },
  { path: '/psychophys-testing', url: './json/psychophyscollection.json' },
  { path: '/psychophys-preprocess-p1', url: './json/psychophysp1.json', redirectMsg: 'Proceed to p2', redirectUrl: '/psychophys-preprocess-p2' },
  { path: '/psychophys-preprocess-p2', url: './json/psychophysp2.json'},
  { path: '/', Component: Home },
]

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [ loading, setLoading ] = useState(true);
  useEffect( () => {
    if (sessionStorage.getItem('baAuth')) setIsAuth(true);
    setLoading(false);
  }, [])
  return (
    <SlidesState>
         <div className="app">
            <Nav/>
            { !isAuth &&  !loading && <Login className="fade" setIsAuth={setIsAuth}/> }
            { isAuth &&
            <Router>
              <div style={{minHeight: "79vh"}}>
                {routes.map(({path, Component, url, redirectMsg, redirectUrl}) => (
                <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition in={match != null} timeout={500} classNames="fade" unmountOnExit>
                      { Component ? <Component/> : <Slides url={url} redirectMsg={redirectMsg} redirectUrl={redirectUrl}/> }
                  </CSSTransition>
                )}
              </Route>
                ))}
              </div>
            </Router>
            }
            <Footer/>
        </div>
    </SlidesState>
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
