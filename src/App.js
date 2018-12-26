import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Menu from './MenuBar/MenuBar';
import Project from './Project/Project';
import About from './About/About';
import Product from './Product/Product';
import Loader from './loader';
import Careers from './Careers/Careers'
import './App.css';

class App extends Component {
  state = {
    isLoading: true
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({isLoading:false})
    },1000)
  }
  render() {
    return (
      <div className="App">
        <span style={this.state.isLoading ? {display:"block"}:{display:"none"}}>
          <Loader />
        </span>

        <span style={this.state.isLoading ? {display:"none"}:{display:"block"}}>
          <Menu />
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path="/Project" component={Project} />
          <Route path="/Product" component={Product} />
          <Route path="/About" component={About} />
          <Route path="/Careers" component={Careers} />
        </span>
      </div>
    );
  }
}

const RouterComp = () => {
  return(
    <Router>
      <App />
    </Router>
  )
}

export default RouterComp;
