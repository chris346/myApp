import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Main from './main';

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="form" component={ReduxForm}/>
        <Route path="portal" component={Main}/>
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'));
