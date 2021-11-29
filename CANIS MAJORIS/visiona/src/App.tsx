import React from 'react';
import './style.css';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Page2}/>
            <Route path="/busca" component={Page1}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
