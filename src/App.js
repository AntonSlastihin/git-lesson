import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router , Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
// import Undefined from "./components/Undefined/Undefined";


const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="content">
          <Route exact path="/" component={Profile} /> 
          <Route exact path="/dialogs" render={() => <Dialogs contents={props.contents}/>} /> 
          <Route path="/profile" component={Profile} />





          
          {/* <Route path="/news" component={News} />
          <Route path="/music" component={Music} /> */}
          {/* <Route component={Undefined}/> */}
        </div>
      </div>
    </Router>);
}

export default App;