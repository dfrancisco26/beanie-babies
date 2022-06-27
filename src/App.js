import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';
import './App.css';

export default function App() {


  return (
    <Router>
      <div className='App'>
        <h1>Beanie babies baby Baby Babies Beaniebabies beaniebabies</h1>
        <Switch>
          <Route exact path="/">
            <BeaniesPage />
          </Route>
          <Route exact path="/beanieDetail/:id"> 
            <BeanieDetail />
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}