import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Desembarque from './pages/portfolio/desembarque';

function Routes() {
  return (
    <Switch>
      <Route exact component={Home} path={'/'}></Route>
      <Route component={Desembarque} path={'/desembarque'}></Route>
      <Route exact component={Page404} path={'/*'}></Route>
    </Switch>
  );
}

export default Routes;
