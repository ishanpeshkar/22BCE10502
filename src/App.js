
import './App.css';
import Feed from "./components/Feed";
import TopUser from './components/TopUser.jsx';
import TrendingPost from './components/TrendingPost.jsx';
import Header from './components/Header.jsx';
import React from 'react';
import Home from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Home/>
      <TopUser/>
      <Feed/>
      
      <TrendingPost/>
      

    </div>
  );
}

export default App;
