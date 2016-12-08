import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Categories from '../components/categories';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Categories} />
  </Route>
);

export default routes;
