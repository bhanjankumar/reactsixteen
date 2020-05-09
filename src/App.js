import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link,useHistory } from 'react-router-dom';
import AppPage from './pages/app/app-container'
import HomePage from './pages/home/home-container';
import SearchPage from './pages/search/search-container';
import Header from './pages/common/header-container';
import Footer from './pages/common/components/footer';
import Layout from './pages/app/app-container';
import {createBrowserHistory} from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const history = createBrowserHistory();


function App() {
  return (
    <div>
      <AppPage/>
    </div>
  );
}

export default App;
