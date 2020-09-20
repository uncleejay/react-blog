import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './App.css';

import rootReducer from './reducers/index'
import { Navbar} from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'

// create store
const store = createStore(rootReducer, applyMiddleware(thunk));

const Routing = () => {
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={DashboardPage}/>
          <Route exact path="/posts" component={PostsPage}/>
          <Route exact path="/posts/:id" component={SinglePostPage}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    )
}

const App = () => {
  return(
      <Provider store={store}>
          <Routing/>
      </Provider>
  );
}

export default App;
