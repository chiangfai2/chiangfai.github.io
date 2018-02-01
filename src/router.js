import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BlogLayout from './layouts';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BlogLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
