import React from 'react';
import classes from './App.module.scss';
import {Header, Hero} from './components';
import { Home, ContactUs, About, Post} from './containers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
      <Router>
        <div className={classes.App}>
          <Header />
          <Hero />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' component={About} />
            <Route path='/contactUs' component={ContactUs} />
            <Route path='/Post/:postId' component={Post} />
          </Switch>
          <div className={classes.Footer}>
            <p className={classes.P}>&copy; 2020 Blog. All Rights Reserved.Desgned & developed by <a href="/">Hala</a></p>
          </div>
        </div>
      </Router>
    )
}
export default App;