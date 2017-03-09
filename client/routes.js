import React from 'react';
import { Route, IndexRoute } from 'react-router/es6';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import SetNotes from './components/SetNotes';
import Notes from './components/Notes';
import Note from './components/Note';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route component={SetNotes}>
        <Route path="/notes" component={Notes} />
        <Route path="/note/:id" component={Note} />
      </Route>
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
