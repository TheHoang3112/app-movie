import React from 'react';
import './App.css';
import Home from './routers/Home'
import About from './routers/About';
import Detail from './routers/Detail'
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/movie/:id' component={Detail} />
    </HashRouter>
  );
}

export default App;