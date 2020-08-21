import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/app.css';
import SlidesState from './context/slides/SlidesState';
import Nav from './components/nav/Nav';
import Footer from './components/nav/Footer';
import Login from './components/auth/Login';
import Slides from './components/slides/Slides';
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
              <Nav isAuth={isAuth}/>
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