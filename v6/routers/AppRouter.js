import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Login from '../components/Login';
import Board from '../components/Board';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/board" component={Board} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
