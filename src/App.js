import './App.css';
import Header from './Components/Header/Header';
import Feed from './Components/Feed/Feed';
import Footer from './Components/Footer/Footer';
import React, { useState, useCallback } from 'react';



function App() {
const [subreddit, setSubreddit] = useState("all");
const [sortBy, setSortBy] = useState("hot");
const [posts, setPosts] = useState([])


  function handleSubredditChange(e) {
    setSubreddit(e.target.value);
  }
  function onClickSortBy(newSortByOption) {
    setSortBy(newSortByOption);
    console.log(sortBy)
  }

  return (
    <>
    <Header 
      sortBy={sortBy}
      onClickSortBy={onClickSortBy}
    />
    <Feed 
      subreddit={subreddit}
      sortBy={sortBy}
      posts={posts}
      setPosts={setPosts}
    />
    <Footer />
    </>
  );
}

export default App;
