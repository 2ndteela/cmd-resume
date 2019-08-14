import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Initializing from './views/Initializing';
import Terminal from './views/Terminal';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Initializing} />
          <Route path="/terminal" component={Terminal} />
        </div>
      </Router>
    </div>
  );
}

export default App;
