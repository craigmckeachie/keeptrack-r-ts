import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import HomePage from './home/HomePage';
import { Route, NavLink, Switch, useLocation } from 'react-router-dom';
import ProjectPage from './projects/ProjectPage';
import { Provider } from 'react-redux';
import { store } from './state';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  let location = useLocation();
  return (
    <Provider store={store}>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" exact className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects/" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/projects" exact component={ProjectsPage} />
              <Route path="/projects/:id" component={ProjectPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Provider>
  );
}

export default App;
