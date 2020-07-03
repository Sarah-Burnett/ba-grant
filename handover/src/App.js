import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './app.css';
import SlidesState from './context/slides/SlidesState';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Login from './components/Login';
import Slides from './components/Slides';
import ProgressState from './context/progress/ProgressState';
import routes from './utilities/routes';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [ loading, setLoading ] = useState(true);
  useEffect( () => {
    if (sessionStorage.getItem('baAuth')) setIsAuth(true);
    setLoading(false);
  }, [])
  return (
    <ProgressState>
        <SlidesState>
          <div className="app">
              <Nav/>
              { !isAuth &&  !loading && <Login className="fade" setIsAuth={setIsAuth}/> }
              { isAuth &&
              <div style={{minHeight: "79vh"}}>
              <Router>
                  {routes.map(({path, Component, url, redirectMsg, redirectUrl, progress}) => (
                  <Route key={path} exact path={path}>
                      { Component ? <Component/> : <Slides url={url} progress={progress} redirectMsg={redirectMsg} redirectUrl={redirectUrl}/> }
                </Route>
                  ))}
              </Router>
              </div>
              }
              <Footer/>
          </div>
      </SlidesState>
    </ProgressState>
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
