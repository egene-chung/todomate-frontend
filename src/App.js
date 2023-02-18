import React from 'react';
// import Calendar from './components/Calendar/Calendar';

// function App() {
//   return <Calendar />;
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
