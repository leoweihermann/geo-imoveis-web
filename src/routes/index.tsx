import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Overview from '../pages/Overview';
import Dashboard from '../pages/Dashboard';
import CreateProperty from '../pages/CreateProperty';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Overview} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/create-property" component={CreateProperty} />
  </Switch>
);

export default Routes;
