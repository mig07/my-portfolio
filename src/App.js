import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import { Home } from './pages/Home';
import Projects from './pages/Project';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
      <NavBar />      
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
