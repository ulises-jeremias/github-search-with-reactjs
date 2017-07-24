import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';

const history = createBrowserHistory();

const routes = (
    <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/user/:username" component={User}/>
          </Switch>
        </ App>
    </Router>
);

injectTapEventPlugin();
ReactDOM.render(routes, document.getElementById('root'));
