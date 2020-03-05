import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Wilders from './components/Wilders/Wilders';
import Ambiance from './components/Ambiance/Ambiance';
import Competences from './components/Competences/Competences';
import Embauchez from './components/Embauchez/Embauchez';
import AdminHomePage from './components/admin/AdminHomePage/AdminHomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/wilders" component={Wilders} />
        <Route path="/ambiance" component={Ambiance} />
        <Route path="/competences" component={Competences} />
        <Route path="/embauchez" component={Embauchez} />
        <Route path="/adminhomepage" component={AdminHomePage} />
      </Switch>
    </div>
  );
}

export default App;
