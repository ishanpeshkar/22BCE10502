
import './App.css';
import Feed from "./components/Feed";
import TopUser from './components/TopUser.jsx';
import TrendingPost from './components/TrendingPost.jsx';
import Header from './components/Header.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <TopUser/>
      {/* <Feed/>
      
      <TrendingPost/> */}
      

    </div>
  );
}

export default App;
