import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { createBrowserHistory } from 'history';
import Page404 from './pages/Page404';
import Desembarque from './pages/portfolio/desembarque';

function Routes() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact component={Home} path={'/'}></Route>
        <Route component={Desembarque} path={'/desembarque'}></Route>
        <Route exact component={Page404} path={'/*'}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
