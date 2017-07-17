import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router'
import Home from './Home'
import City from './City'
import Layout from './Layout'
import Profile from './Profile.js'
import '../public/css/index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/cities/:name' component={City} />
    </Route>
  </Router>,
  document.getElementById('root')
);
