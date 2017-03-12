import React from 'react';
import { Route, IndexRoute } from 'react-router/es6';
import App from './containers/App';

const loadRoute = cb => module => cb(null, module.default);
const atPath = path => (location, cb) => {
  import(`./components/${path}`)
    .then(loadRoute(cb))
};
const getComponent = path => ({ getComponent: atPath(path) });

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute {...getComponent('Home')} />
      <Route {...getComponent('SetNotes')} >
        <Route path="/notes" {...getComponent('Notes')} />
        <Route path="/notes/:id" {...getComponent('Note')} />
        <Route path="/tags/:tag" {...getComponent('Tags')} />
      </Route>
      <Route path="*" status={404} {...getComponent('NoMatch')} />
    </Route>
  </Route>
)
