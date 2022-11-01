import './App.css';
import Header from './Components/Header/Header';
import Feed from './Components/Feed/Feed';
import Footer from './Components/Footer/Footer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from './Components/util/SortBySlice';
import { setSubreddit } from './Components/util/SubredditSlice';
import { setPosts } from './Components/util/PostsSlice';
import axios from 'axios';


function App() {
const dispatch = useDispatch();

const sortBy = useSelector(state => state.sortBy.sortBy)
const subreddit = useSelector(state => state.subreddit.subreddit)
const posts = useSelector(state => state.posts.posts)


  function handleSortByChange(newSortByOption) {
    dispatch(setPosts(undefined))
    dispatch(setSortBy(newSortByOption))
  }
  function handleSubredditChange(newSubreddit) {
    dispatch(setSubreddit(newSubreddit))
  }
  
  function handlePostsChange(newPosts) {
    dispatch(setPosts(newPosts))
  }
  useEffect(() => {
    const getPosts = async () => {
      console.log(`Running getPosts with subreddit "${subreddit}" and sortBy "${sortBy}"`);
      const response = await axios.get(`https://www.reddit.com/r/${subreddit}/${sortBy}.json`);
      console.log(`retrieved response! Setting state.posts`);
      const fetchedPosts = (response.data.data.children.map(post => {
          return post.data
      }))
      handlePostsChange(fetchedPosts);
  }
  getPosts();
  }, [sortBy, subreddit]);
  console.log('state.posts:')
  console.log(posts);
  return (
    <>
      <Header 
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}
      />
      <Feed 
        subreddit={subreddit}
        sortBy={sortBy}
        posts={posts}
      />
      <Footer 
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}/>
  </>
  );
}

export default App;
