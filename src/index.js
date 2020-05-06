import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Route from "react-router-dom/Route";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import App from './App.js';
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import Item from "./views/Item.js";
import Items from "./views/Items.js";
import NewItems from "./views/NewItems.js";
import Update from "./views/Update.js";
// import indexRoutes from "./routes/indexRoutes.js";

import * as serviceWorker from './serviceWorker';

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className='App'>
    <Header />
    <Navigation />
    <Route path='/' exact strict component={ App } />
    <Route path='/about' exact strict component={ About } />
    <Route path='/items' exact strict component={ Items } />
    <Route path='/new-items' exact strict component={ NewItems } />
    <Route path='/item/:id' exact strict component={ Item } />
    <Route path='/update/:id' exact strict component={ Update } />
      </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
