/*
 * THIS FILE IS NOT IN USE
 * I just dumped everything into the app.js file. We should come back
 * and do this right later but I'm too lazy for now.
 */

import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute} from 'react-router';
import Landing from 'pages/landing';



const routes = (
  <Router>
    <Route path='/' component={Landing} />
  </Router>
);

export default routes;
